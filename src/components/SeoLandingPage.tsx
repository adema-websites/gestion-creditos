import { ArrowRight, CheckCircle2, ClipboardCheck, ShieldCheck } from "lucide-react";
import { DEMO_URL, LOGO_SRC, planIncludes, type SeoPageContent } from "@/lib/landing-content";

export function SeoLandingPage({ page }: { page: SeoPageContent }) {
  return (
    <div className="landing-page min-h-screen bg-[#050914] text-slate-50">
      <header className="border-b border-white/10 bg-[#050914]/92 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src={LOGO_SRC}
              alt="Gestión de Créditos"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="min-w-0">
              <span className="block text-sm font-black uppercase text-white sm:text-base">
                Gestión de Créditos
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Adema Sistemas
              </span>
            </span>
          </a>
          <a
            href={DEMO_URL}
            className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
          >
            Agendar demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 landing-grid-bg" aria-hidden="true" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                {page.eyebrow}
              </span>
              <h1 className="mt-6 max-w-4xl text-3xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                {page.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={DEMO_URL}
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
                >
                  {page.cta} <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/#demo"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            <aside className="rounded-lg border border-cyan-300/20 bg-[#091523] p-6 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.9)]">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Plan Argentina
              </span>
              <p className="mt-3 text-4xl font-black text-white">$99.999 + IVA</p>
              <p className="mt-2 text-sm text-slate-400">por mes</p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-300">
                {planIncludes.slice(0, 5).map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-md border border-amber-300/25 bg-amber-300/8 p-3 text-xs leading-5 text-amber-50">
                Servicios adicionales como migración de datos o capacitación extra se cotizan aparte
                a USD 30/hora.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#070d19] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">
                Dolor del negocio
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                {page.painTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">{page.pain}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.benefits.map((benefit) => (
                <article
                  key={benefit}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <CheckCircle2 className="h-6 w-6 text-emerald-300" />
                  <p className="mt-4 text-base font-extrabold text-white">{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#050914] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div className="rounded-lg border border-cyan-300/18 bg-[#091523] p-6">
              <ClipboardCheck className="h-8 w-8 text-cyan-200" />
              <h2 className="mt-5 text-2xl font-black uppercase text-white">
                Funcionalidades relevantes
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {page.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-sm font-semibold text-cyan-100"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-emerald-300/18 bg-emerald-300/[0.05] p-6">
              <ShieldCheck className="h-8 w-8 text-emerald-200" />
              <h2 className="mt-5 text-2xl font-black uppercase text-white">
                Implementación acompañada
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                ADEMA Sistemas ayuda a dejar funcionando un circuito de créditos y cobranzas con
                capacitación inicial, configuración y soporte mensual.
              </p>
              <a
                href="/#plan"
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-200 hover:text-emerald-100"
              >
                Ver alcance del plan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#071321] py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                Preguntas frecuentes
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
                Respuestas rápidas antes de la demo
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {page.faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <h3 className="text-base font-extrabold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="landing-cta-bg py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              Próximo paso
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
              Controlá tu cartera antes de que la mora decida por vos
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Si hoy necesitás revisar una planilla o varios chats para saber qué cobrar, es momento
              de profesionalizar el seguimiento.
            </p>
            <a
              href={DEMO_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200"
            >
              {page.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
