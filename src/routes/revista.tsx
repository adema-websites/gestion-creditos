import { createFileRoute } from "@tanstack/react-router";
import { MagazineViewer } from "@/components/MagazineViewer";

export const Route = createFileRoute("/revista")({
  head: () => ({
    meta: [
      { title: "Revista · Gestión de Créditos — Adema Sistemas" },
      {
        name: "description",
        content:
          "Revista interactiva del sistema: pantallas, funcionalidades y casos de uso para entender Gestión de Créditos antes de la demo.",
      },
    ],
  }),
  component: RevistaPage,
});

function RevistaPage() {
  return <MagazineViewer />;
}
