import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoPage } from "@/lib/landing-content";

const page = getSeoPage("/software-gestion-creditos-argentina")!;

export const Route = createFileRoute("/software-gestion-creditos-argentina")({
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
