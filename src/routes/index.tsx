import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gestión de Créditos · Sistema para controlar carteras y cuotas" },
      {
        name: "description",
        content:
          "Software para ordenar clientes, créditos, cuotas, cobranzas, mora y deudores en comercios, financieras y negocios que venden en cuotas.",
      },
      { property: "og:title", content: "Gestión de Créditos · Adema Sistemas" },
      {
        property: "og:description",
        content: "Controlá tu cartera de clientes, créditos, cuotas y cobranzas desde una sola aplicación.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
