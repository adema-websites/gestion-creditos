import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  RotateCcw,
  LayoutGrid,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type Manifest = {
  title: string;
  edition: string;
  pages: string[];
};

export function MagazineViewer() {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [page, setPage] = useState(0);
  const [thumbsOpen, setThumbsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dark, setDark] = useState(true);
  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Load manifest
  useEffect(() => {
    fetch("/magazine/manifest.json")
      .then((r) => r.json())
      .then(setManifest)
      .catch(() => setManifest({ title: "Revista", edition: "", pages: [] }));
  }, []);

  // Dark mode toggle on root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [dark]);

  const total = manifest?.pages.length ?? 0;

  const goTo = useCallback(
    (p: number) => {
      if (!total) return;
      const next = Math.max(0, Math.min(total - 1, p));
      setPage(next);
      transformRef.current?.resetTransform();
    },
    [total]
  );

  const next = useCallback(() => goTo(page + 1), [goTo, page]);
  const prev = useCallback(() => goTo(page - 1), [goTo, page]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          prev();
          break;
        case "Home":
          goTo(0);
          break;
        case "End":
          goTo(total - 1);
          break;
        case "+":
        case "=":
          transformRef.current?.zoomIn();
          break;
        case "-":
        case "_":
          transformRef.current?.zoomOut();
          break;
        case "0":
          transformRef.current?.resetTransform();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total]);

  // Fullscreen API
  const toggleFullscreen = useCallback(async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  }, []);
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Swipe navigation (only when zoom is at base)
  const onTouchStart = (e: React.TouchEvent) => {
    const scale =
      (transformRef.current as unknown as { state?: { scale: number } } | null)
        ?.state?.scale ?? 1;
    if (scale > 1.05) {
      touchStartX.current = null;
      return;
    }
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const currentSrc = manifest?.pages[page];

  const headerTitle = useMemo(() => manifest?.title ?? "Revista", [manifest]);

  return (
    <div
      ref={containerRef}
      className="flex h-[100dvh] w-full flex-col overflow-hidden bg-background text-foreground"
    >
      {/* Header */}
      <header className="flex items-center justify-between gap-2 border-b border-border bg-card/80 px-3 py-2 backdrop-blur sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            asChild
            aria-label="Volver al inicio"
          >
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setThumbsOpen((v) => !v)}
            aria-label="Páginas"
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold sm:text-base">
              {headerTitle}
            </h1>
            {manifest?.edition && (
              <p className="hidden truncate text-xs text-muted-foreground sm:block">
                {manifest.edition}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark((v) => !v)}
            aria-label="Modo oscuro"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleFullscreen}
            aria-label="Pantalla completa"
          >
            {isFullscreen ? (
              <Minimize2 className="h-5 w-5" />
            ) : (
              <Maximize2 className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Body */}
      <div className="relative flex min-h-0 flex-1">
        {/* Thumbnails sidebar (desktop) / drawer (mobile) */}
        <aside
          className={[
            "absolute inset-y-0 left-0 z-30 w-56 shrink-0 border-r border-border bg-card transition-transform duration-200 sm:static sm:translate-x-0",
            thumbsOpen ? "translate-x-0" : "-translate-x-full sm:-translate-x-full sm:hidden",
          ].join(" ")}
          aria-label="Miniaturas"
        >
          <div className="flex items-center justify-between border-b border-border px-3 py-2 sm:hidden">
            <span className="text-sm font-medium">Páginas</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setThumbsOpen(false)}
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid h-[calc(100%-2.75rem)] grid-cols-2 gap-2 overflow-y-auto p-2 sm:h-full sm:grid-cols-1">
            {manifest?.pages.map((src, i) => (
              <button
                key={src}
                onClick={() => {
                  goTo(i);
                  setThumbsOpen(false);
                }}
                className={[
                  "group relative overflow-hidden rounded border bg-white transition",
                  i === page
                    ? "border-primary ring-2 ring-primary/40"
                    : "border-border hover:border-primary/50",
                ].join(" ")}
                style={{ aspectRatio: "148 / 210" }}
                aria-label={`Ir a página ${i + 1}`}
                aria-current={i === page ? "page" : undefined}
              >
                <img
                  src={src}
                  alt={`Página ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
                <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white">
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {thumbsOpen && (
          <div
            className="absolute inset-0 z-20 bg-black/40 sm:hidden"
            onClick={() => setThumbsOpen(false)}
          />
        )}

        {/* Canvas */}
        <main
          className="relative flex min-w-0 flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--color-secondary)_0%,_var(--color-background)_70%)] p-2 sm:p-6"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {currentSrc ? (
            <TransformWrapper
              ref={transformRef}
              minScale={1}
              maxScale={4}
              initialScale={1}
              centerOnInit
              doubleClick={{ mode: "toggle", step: 1.5 }}
              wheel={{ step: 0.15 }}
              pinch={{ step: 5 }}
              limitToBounds
            >
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  key={currentSrc}
                  src={currentSrc}
                  alt={`Página ${page + 1} de ${total}`}
                  draggable={false}
                  className="block h-full max-h-full w-auto max-w-full select-none rounded-sm bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
                  style={{ aspectRatio: "148 / 210" }}
                />
              </TransformComponent>
            </TransformWrapper>
          ) : (
            <div className="text-sm text-muted-foreground">Cargando…</div>
          )}

          {/* Floating prev/next */}
          <NavButton side="left" onClick={prev} disabled={page === 0} />
          <NavButton side="right" onClick={next} disabled={page >= total - 1} />
        </main>
      </div>

      {/* Bottom toolbar */}
      <footer className="flex items-center justify-between gap-2 border-t border-border bg-card/80 px-2 py-2 backdrop-blur sm:px-4">
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => transformRef.current?.zoomOut()}
            aria-label="Alejar"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => transformRef.current?.resetTransform()}
            aria-label="Restablecer zoom"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => transformRef.current?.zoomIn()}
            aria-label="Acercar"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={prev}
            disabled={page === 0}
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1 tabular-nums">
            <input
              type="number"
              min={1}
              max={total}
              value={page + 1}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (!Number.isNaN(v)) goTo(v - 1);
              }}
              className="w-12 rounded border border-input bg-background px-1.5 py-0.5 text-center text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Número de página"
            />
            <span className="text-muted-foreground">/ {total}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            disabled={page >= total - 1}
            aria-label="Página siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}

function NavButton({
  side,
  onClick,
  disabled,
}: {
  side: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={side === "left" ? "Página anterior" : "Página siguiente"}
      className={[
        "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg ring-1 ring-border backdrop-blur transition hover:bg-card disabled:cursor-not-allowed disabled:opacity-30 sm:flex",
        side === "left" ? "left-3" : "right-3",
      ].join(" ")}
    >
      {side === "left" ? (
        <ChevronLeft className="h-6 w-6" />
      ) : (
        <ChevronRight className="h-6 w-6" />
      )}
    </button>
  );
}