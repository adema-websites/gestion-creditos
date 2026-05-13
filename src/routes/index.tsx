import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Software de gestión de créditos y cobranzas | Gestión de Créditos" },
      {
        name: "description",
        content:
          "Sistema para vender en cuotas sin perder control. Ordená clientes, créditos, cuotas, cobros, mora, deudores, contratos y portal del cliente en una sola plataforma.",
      },
      { property: "og:title", content: "Software de gestión de créditos y cobranzas" },
      {
        property: "og:description",
        content:
          "Dejá de depender de Excel, cuadernos y WhatsApp para controlar cartera, cuotas vencidas, mora y cobranzas.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
