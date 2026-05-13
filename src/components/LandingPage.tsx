import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  CalendarClock,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  ExternalLink,
  Eye,
  FileSignature,
  FileText,
  Menu,
  MessageCircle,
  PlayCircle,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  beforeAfter,
  DEMO_URL,
  faqs,
  features,
  flowSteps,
  implementationServices,
  industries,
  LOGO_SRC,
  painPoints,
  planExcludes,
  planIncludes,
  seoPages,
  VIDEO_SRC,
  type Feature,
} from "@/lib/landing-content";

const iconMap: Record<string, LucideIcon> = {
  alert: AlertTriangle,
  bell: BellRing,
  calendar: CalendarClock,
  chart: ChartNoAxesColumnIncreasing,
  eye: Eye,
  file: FileText,
  message: MessageCircle,
  phone: Smartphone,
  search: SearchCheck,
  signature: FileSignature,
  users: Users,
  wallet: WalletCards,
};

export function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const activeFeature = useMemo(
    () => features.find((feature) => feature.id === activeFeatureId) ?? null,
    [activeFeatureId],
  );

  return (
    <div className="landing-page min-h-screen bg-[#050914] text-slate-50">
      <header className="sticky top-0 z-50 border-b border-cyan-300/15 bg-[#050914]/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setNavOpen(false)}
          >
            <img
              src={LOGO_SRC}
              alt="Gestión de Créditos"
              className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_0_14px_rgba(45,212,230,0.45)]"
            />
            <span className="min-w-0">
              <span className="block text-sm font-black uppercase tracking-[0.16em] text-white sm:text-base">
                Gestión de Créditos
              </span>
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-cyan-300">
                Adema Sistemas
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex"
            aria-label="Principal"
          >
            <a href="#antes" className="transition hover:text-white">
              Antes/después
            </a>
            <a href="#rubros" className="transition hover:text-white">
              Rubros
            </a>
            <a href="#implementacion" className="transition hover:text-white">
              Implementación
            </a>
            <a href="#plan" className="transition hover:text-white">
              Plan
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <Link to="/revista" className="transition hover:text-white">
              Revista
            </Link>
            <a
              href={DEMO_URL}
              className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 font-extrabold text-slate-950 shadow-[0_12px_34px_-16px_rgba(45,212,230,0.85)] transition hover:bg-cyan-200"
            >
              Agendar demo <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/25 text-cyan-200 lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((value) => !value)}
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {navOpen && (
          <div className="border-t border-cyan-300/15 bg-[#071321] px-4 py-3 lg:hidden">
            <nav
              className="mx-auto grid max-w-7xl gap-2 text-sm font-medium text-slate-200"
              aria-label="Principal mobile"
            >
              {[
                ["antes", "Antes/después"],
                ["rubros", "Rubros"],
                ["implementacion", "Implementación"],
                ["plan", "Plan"],
                ["faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="rounded-md px-3 py-2 hover:bg-cyan-300/10"
                  onClick={() => setNavOpen(false)}
                >
                  {label}
                </a>
              ))}
              <Link
                to="/revista"
                className="rounded-md px-3 py-2 hover:bg-cyan-300/10"
                onClick={() => setNavOpen(false)}
              >
                Revista
              </Link>
              <a
                href={DEMO_URL}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2 font-semibold text-slate-950"
              >
                Agendar demo <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 landing-grid-bg" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(45,212,230,0.9)]" />{" "}
                Software de gestión de créditos y cobranzas
              </span>
              <h1 className="mt-6 max-w-4xl text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl lg:text-7xl">
                Dejá de perder plata por créditos mal controlados
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                Gestión de Créditos te ayuda a saber quién debe, cuánto debe, desde cuándo y qué
                hacer para cobrar. Centralizá clientes, cuotas, mora, contratos y cobranzas en un
                solo sistema.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DEMO_URL}
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-[0_16px_40px_-18px_rgba(45,212,230,0.9)] transition hover:bg-cyan-200"
                >
                  Quiero ordenar mi cartera <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  <PlayCircle className="h-4 w-4" /> Ver cómo funciona
                </a>
              </div>

              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-6 text-sm">
                <Metric icon={BadgeCheck} label="Cartera" value="360°" tone="cyan" />
                <Metric icon={BellRing} label="Cobranza" value="Día a día" tone="amber" />
                <Metric icon={ShieldCheck} label="Mora" value="Visible" tone="emerald" />
              </dl>
            </div>

            <div className="relative">
              <div className="rounded-lg border border-cyan-300/25 bg-[#091523] p-2 shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" /> Demo del sistema
                  </span>
                  <span className="text-cyan-200">video</span>
                </div>
                <video
                  className="aspect-video w-full rounded-md bg-black object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                >
                  <source src={VIDEO_SRC} type="video/mp4" />
                </video>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <MiniMetric label="Plan" value="$99.999 + IVA" />
                <MiniMetric label="Backups" value="3 AM" />
                <MiniMetric label="Ajustes" value="5 h/mes" />
              </div>
            </div>
          </div>
        </section>

        <section id="problemas" className="border-b border-white/10 bg-[#070d19] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Problemas reales"
            title="Cuando la cartera crece, el desorden también"
            text="La venta en cuotas funciona cuando el seguimiento es claro. El problema aparece cuando cada dato vive en una herramienta distinta."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {painPoints.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
                >
                  <Icon className="h-8 w-8 text-cyan-200" />
                  <h3 className="mt-5 text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="antes" className="bg-[#050914] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Antes vs después"
            title="Del seguimiento disperso a una cartera que se puede cobrar"
            text="El valor no está en tener más pantallas. Está en pasar de datos sueltos a un circuito claro para vender, cobrar y decidir."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ComparisonPanel title="Antes" tone="amber" items={beforeAfter.before} />
            <ComparisonPanel title="Después" tone="emerald" items={beforeAfter.after} />
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#071321] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                Cómo funciona
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                Todo el ciclo del crédito en un solo lugar
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                El sistema acompaña un proceso natural: cargar el cliente, registrar la operación,
                seguir cuotas, cobrar, controlar mora y revisar reportes sin saltar entre planillas
                y chats.
              </p>
              <a
                href={DEMO_URL}
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
              >
                Agendar demo gratuita <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {flowSteps.map((step, index) => (
                <div key={step} className="rounded-lg border border-cyan-300/18 bg-[#091523] p-5">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                    0{index + 1}
                  </span>
                  <p className="mt-4 text-base font-extrabold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="funcionalidades"
          className="border-b border-white/10 bg-[#050914] py-16 sm:py-20"
        >
          <SectionIntro
            eyebrow="Funcionalidades principales"
            title="Las piezas clave para cobrar con más claridad"
            text="Cada módulo responde a una parte concreta de la operación: cliente, crédito, cuota, cobro, deuda, documentación y seguimiento."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <button
                  key={feature.id}
                  type="button"
                  className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 text-left transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
                  onClick={() => setActiveFeatureId(feature.id)}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-5 block text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                    {feature.eyebrow}
                  </span>
                  <span className="mt-2 block text-xl font-extrabold text-white">
                    {feature.title}
                  </span>
                  <span className="mt-3 block text-sm leading-6 text-slate-400">
                    {feature.description}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                    Ver detalle{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section id="rubros" className="border-b border-white/10 bg-[#070d19] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Rubros ideales"
            title="Pensado para negocios que venden en cuotas"
            text="No todos los negocios venden igual, pero todos tienen el mismo problema cuando la cartera crece: saber quién debe, cuánto debe, desde cuándo y qué se hizo para cobrar."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-3 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {industries.map((industry) => (
              <article
                key={industry}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <Sparkles className="h-6 w-6 text-amber-200" />
                <h3 className="mt-4 text-lg font-extrabold text-white">{industry}</h3>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-8 flex w-full max-w-7xl flex-wrap gap-3 px-4 sm:px-6 lg:px-8">
            {seoPages.slice(0, 6).map((page) => (
              <a
                key={page.path}
                href={page.path}
                className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/14"
              >
                {page.eyebrow} <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>

        <section
          id="implementacion"
          className="border-b border-white/10 bg-[#050914] py-16 sm:py-20"
        >
          <SectionIntro
            eyebrow="Implementación acompañada"
            title="No te damos solo el sistema: te ayudamos a ordenar tu cartera"
            text="La diferencia no es entregar una app vacía. Es dejar funcionando un circuito completo de créditos y cobranzas, con capacitación inicial y soporte para operar mejor."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
            {implementationServices.map((service) => (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <ClipboardCheck className="h-7 w-7 text-emerald-300" />
                <h3 className="mt-5 text-lg font-extrabold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.text}</p>
                {service.extra && (
                  <p className="mt-4 rounded-md border border-amber-300/25 bg-amber-300/8 p-3 text-xs font-semibold leading-5 text-amber-50">
                    Servicio cotizado aparte según volumen y calidad de datos.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="plan" className="border-b border-white/10 bg-[#071321] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                Plan Argentina
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                $99.999 + IVA por mes
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Un paquete integral para operar mejor tu cartera: sistema, capacitación inicial,
                dominio propio, backups diarios, panel de tickets y hasta 5 horas mensuales de
                ajustes incluidos.
              </p>
              <a
                href={DEMO_URL}
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
              >
                Consultar implementación <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <PlanList title="Incluye" items={planIncludes} tone="emerald" />
              <PlanList title="Se cotiza aparte" items={planExcludes} tone="amber" />
            </div>
          </div>
          <div className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="rounded-lg border border-amber-300/25 bg-amber-300/8 p-5 text-sm leading-7 text-amber-50">
              La capacitación inicial está incluida. Los trabajos adicionales como migración de
              datos, carga masiva, capacitación extra o ajustes fuera del alcance mensual se cotizan
              aparte a razón de USD 30 por hora de servicio. Las 5 horas mensuales incluidas no son
              acumulables.
            </p>
          </div>
        </section>

        <section id="portal" className="border-b border-white/10 bg-[#050914] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
                <Smartphone className="h-5 w-5" /> Portal del cliente
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                Menos consultas repetidas por WhatsApp
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Tus clientes pueden consultar cuotas, vencimientos, contrato, pagos y estado de
                cuenta desde el celular. Eso mejora la transparencia y libera tiempo del equipo de
                cobranza.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Cuotas y vencimientos",
                "Contrato asociado",
                "Estado de cuenta",
                "Consulta desde celular",
              ].map((item) => (
                <article
                  key={item}
                  className="rounded-lg border border-emerald-300/18 bg-emerald-300/[0.05] p-5"
                >
                  <CheckCircle2 className="h-6 w-6 text-emerald-300" />
                  <p className="mt-4 text-base font-extrabold text-white">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="firma" className="border-b border-amber-300/20 bg-[#11100b] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-200">
                <FileSignature className="h-5 w-5" /> Firma y contratos
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                Contratos más fáciles de guardar, con el alcance legal claro
              </h2>
            </div>
            <div className="rounded-lg border border-amber-200/20 bg-amber-200/[0.06] p-6">
              <p className="text-base leading-8 text-amber-50">
                La funcionalidad permite que el cliente acepte o firme contratos desde el celular y
                que el documento quede asociado al crédito. No se presenta como Firma Digital bajo
                la Ley 25.506. Debe entenderse como firma electrónica o aceptación operativa dentro
                del flujo del sistema, con la validez y los recaudos que correspondan según cada
                instrumentación.
              </p>
              <p className="mt-4 text-sm leading-6 text-amber-100/75">
                Para usos con exigencias legales específicas, conviene validar el circuito
                documental con asesoría profesional antes de adoptarlo como reemplazo de otros
                mecanismos.
              </p>
            </div>
          </div>
        </section>

        <section id="demo" className="border-b border-white/10 bg-[#050914] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                <PlayCircle className="h-5 w-5" /> Demo visible
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                Mirá cómo se ordena una cartera de créditos
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                En pocos minutos vas a ver cómo se cargan clientes, créditos, cuotas, cobros y
                deudores. La demo sirve para entender si el sistema encaja con tu forma de vender en
                cuotas.
              </p>
              <a
                href={DEMO_URL}
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-extrabold text-cyan-100 transition hover:bg-cyan-300/16"
              >
                Solicitar demo con asesoramiento <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#091523] p-2">
              <video
                className="aspect-video w-full rounded-md bg-black object-cover"
                controls
                preload="metadata"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="revista" className="border-b border-white/10 bg-[#070d19] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Lead magnet"
            title="Descargá la revista del sistema"
            text="La revista resume pantallas, funcionalidades y beneficios. También sirve como guía visual para entender cómo ordenar una cartera de créditos antes de pedir una demo."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <Link
              to="/revista"
              className="group flex flex-col gap-6 rounded-lg border border-cyan-300/20 bg-[#050914] p-8 shadow-[0_26px_80px_-42px_rgba(0,0,0,0.9)] transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.04]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <BookOpen className="h-8 w-8" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                  Folleto interactivo
                </span>
                <span className="mt-2 block text-2xl font-black text-white sm:text-3xl">
                  Ver revista online
                </span>
                <span className="mt-3 block text-sm leading-7 text-slate-400">
                  Navegá página a página y compartí el material con tu equipo antes de la demo.
                </span>
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-extrabold text-cyan-200">
                Abrir revista{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <article className="rounded-lg border border-emerald-300/18 bg-emerald-300/[0.05] p-8">
              <CreditCard className="h-8 w-8 text-emerald-300" />
              <h3 className="mt-5 text-2xl font-black uppercase text-white">
                Solicitar guía con asesoramiento
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Dejanos tu nombre, negocio y WhatsApp en el contacto de demo y te enviamos la guía
                completa para ordenar una cartera de créditos.
              </p>
              <a
                href={DEMO_URL}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-200"
              >
                Recibir la guía por WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </section>

        <section id="faq" className="border-b border-white/10 bg-[#050914] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Preguntas frecuentes"
            title="Respuestas directas para decidir mejor"
            text="Estas respuestas ayudan a entender alcance, rubros, migración, mora, portal, firma y servicios incluidos antes de coordinar una demo."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <h3 className="text-base font-extrabold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="landing-cta-bg py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              Próximo paso
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              ¿Hoy sabés exactamente cuánto tenés prestado, cuánto venció y cuánto deberías cobrar
              esta semana?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Si la respuesta depende de revisar un Excel, un cuaderno o varios chats de WhatsApp,
              es momento de ordenar tu cartera.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={DEMO_URL}
                className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
              >
                Quiero ordenar mi cartera <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={DEMO_URL}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                Migrar mi Excel al sistema <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#030611] py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Gestión de Créditos" className="h-9 w-9 object-contain" />
            <div>
              <strong className="block uppercase tracking-[0.18em] text-white">
                Gestión de Créditos
              </strong>
              <span>Adema Sistemas</span>
            </div>
          </div>
          <p>Menos desorden. Más control. Más claridad para cobrar.</p>
          <a href="mailto:contact@ademasistemas.com" className="text-cyan-200 hover:text-cyan-100">
            contact@ademasistemas.com
          </a>
        </div>
      </footer>

      <a
        href={DEMO_URL}
        className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300 px-4 py-3 text-sm font-extrabold text-slate-950 shadow-[0_18px_40px_-18px_rgba(45,212,230,0.9)] transition hover:bg-cyan-200 lg:inline-flex"
      >
        Demo <ArrowRight className="h-4 w-4" />
      </a>

      {activeFeature && (
        <FeatureModal feature={activeFeature} onClose={() => setActiveFeatureId(null)} />
      )}
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone: "cyan" | "amber" | "emerald";
}) {
  const toneClass = {
    cyan: "text-cyan-200",
    amber: "text-amber-200",
    emerald: "text-emerald-200",
  }[tone];

  return (
    <div>
      <dt className="flex items-center gap-2 text-slate-400">
        <Icon className={`h-4 w-4 ${toneClass}`} /> {label}
      </dt>
      <dd className={`mt-1 text-2xl font-black ${toneClass}`}>{value}</dd>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">{label}</span>
      <strong className="mt-1 block text-lg font-black text-white">{value}</strong>
    </div>
  );
}

function ComparisonPanel({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "amber" | "emerald";
  items: string[];
}) {
  const toneClass =
    tone === "amber"
      ? "text-amber-200 border-amber-300/20 bg-amber-300/[0.05]"
      : "text-emerald-200 border-emerald-300/20 bg-emerald-300/[0.05]";
  return (
    <article className={`rounded-lg border p-6 ${toneClass}`}>
      <h3 className="text-2xl font-black uppercase text-white">{title}</h3>
      <ul className="mt-6 grid gap-3 text-sm text-slate-200">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function PlanList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "emerald" | "amber";
}) {
  const iconClass = tone === "emerald" ? "text-emerald-300" : "text-amber-300";
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <h3 className="text-xl font-black uppercase text-white">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${iconClass}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FeatureModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  const Icon = iconMap[feature.icon];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`feature-${feature.id}`}
      onMouseDown={onClose}
    >
      <article
        className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg border border-cyan-300/20 bg-[#071321] p-6 shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              {feature.eyebrow}
            </p>
            <h2
              id={`feature-${feature.id}`}
              className="mt-2 text-3xl font-black uppercase text-white"
            >
              {feature.title}
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
            aria-label="Cerrar"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-5 text-base leading-7 text-slate-300">{feature.description}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-cyan-200">
              Qué resuelve
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{feature.solves}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-200">
              Ejemplo práctico
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{feature.example}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {feature.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-semibold text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {feature.legalNote && (
          <div className="mt-6 rounded-lg border border-amber-300/25 bg-amber-300/8 p-4 text-sm leading-6 text-amber-50">
            {feature.legalNote}
          </div>
        )}

        <a
          href={DEMO_URL}
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
        >
          Solicitar demo <ArrowRight className="h-4 w-4" />
        </a>
      </article>
    </div>
  );
}
