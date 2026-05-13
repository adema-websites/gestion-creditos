import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoPage } from "@/lib/landing-content";

const page = getSeoPage("/portal-cliente-creditos")!;

export const Route = createFileRoute("/portal-cliente-creditos")({
  head: () => ({
    meta: [
      { title: page.metaTitle },
      { name: "description", content: page.metaDescription },
      { property: "og:title", content: page.metaTitle },
      { property: "og:description", content: page.metaDescription },
    ],
  }),
  component: () => <SeoLandingPage page={page} />,
});
