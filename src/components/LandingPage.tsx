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
  LayoutDashboard,
  Menu,
  MessageCircle,
  PlayCircle,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const DEMO_URL = "https://ademasistemas.com/gestion-creditos/";
const LOGO_SRC = "/brand/logo.png";
const VIDEO_SRC = "/media/gestion-creditos-demo.mp4";

type Feature = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  solves: string;
  example: string;
  icon: LucideIcon;
  tags: string[];
  legalNote?: string;
};

const painPoints = [
  {
    title: "Excel deja de alcanzar",
    text: "Versiones distintas, formulas tocadas y datos repartidos hacen dificil saber que cartera esta realmente actualizada.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "WhatsApp mezcla todo",
    text: "Promesas de pago, comprobantes y reclamos quedan escondidos entre conversaciones personales y grupos.",
    icon: MessageCircle,
  },
  {
    title: "La mora se calcula a mano",
    text: "Cada atraso obliga a revisar fechas, saldos e intereses, con riesgo de errores y discusiones con clientes.",
    icon: AlertTriangle,
  },
  {
    title: "La cobranza depende de memoria",
    text: "Si una persona no esta, cuesta saber quien debe, cuanto debe, desde cuando y cual fue el ultimo contacto.",
    icon: Eye,
  },
];

const features: Feature[] = [
  {
    id: "clientes",
    title: "Clientes",
    eyebrow: "Ficha unica",
    description:
      "Datos, contacto, historial de creditos, pagos y estado de cuenta ordenados en una sola vista.",
    solves:
      "Evita buscar informacion en planillas, chats, anotaciones y archivos sueltos.",
    example:
      "Buscas un cliente y ves al instante que creditos tiene activos, que cuotas pago y que falta cobrar.",
    icon: Users,
    tags: ["Historial", "Estado de cuenta", "Contacto"],
  },
  {
    id: "creditos",
    title: "Creditos",
    eyebrow: "Operacion clara",
    description:
      "Carga de monto, condiciones, intereses, cuotas y respaldo documental para cada financiacion.",
    solves:
      "Reduce errores al armar planes de pago y evita depender de acuerdos informales.",
    example:
      "Vendes una moto financiada, cargas el credito y el sistema deja el cronograma listo para seguirlo.",
    icon: FileText,
    tags: ["Alta rapida", "Condiciones", "Contratos"],
  },
  {
    id: "cuotas",
    title: "Cuotas",
    eyebrow: "Calendario cobrable",
    description:
      "Vencimientos, cuotas pagadas, saldos pendientes y proximos cobros visibles sin revisar fila por fila.",
    solves:
      "Ordena que vence hoy, que esta atrasado y que sigue pendiente en cada operacion.",
    example:
      "Un cliente consulta cuanto le queda y respondes con cuotas pagadas, proxima fecha y saldo real.",
    icon: CalendarClock,
    tags: ["Vencimientos", "Saldos", "Cronograma"],
  },
  {
    id: "cobros",
    title: "Cobros",
    eyebrow: "Registro confiable",
    description:
      "Pagos, medios, comprobantes y observaciones quedan asociados a la cuota y al cliente correcto.",
    solves:
      "Evita cobros duplicados, comprobantes perdidos y seguimiento disperso.",
    example:
      "Registras una transferencia, la cuota queda pagada y el historial se actualiza para todo el equipo.",
    icon: WalletCards,
    tags: ["Pagos", "Comprobantes", "Historial"],
  },
  {
    id: "deudores",
    title: "Deudores",
    eyebrow: "Prioridad diaria",
    description:
      "Listado actualizado de clientes con deuda, importes pendientes, dias de atraso y datos utiles para contactar.",
    solves:
      "Ayuda a decidir a quien llamar primero y evita que los atrasos queden invisibles.",
    example:
      "Antes de salir a cobrar, filtras vencidos y priorizas los casos con mayor mora o mayor saldo.",
    icon: SearchCheck,
    tags: ["Mora", "Filtros", "Seguimiento"],
  },
  {
    id: "mora",
    title: "Mora",
    eyebrow: "Criterios consistentes",
    description:
      "Configuracion de intereses por atraso para trabajar con importes mas claros y repetibles.",
    solves:
      "Reduce discusiones por cuentas hechas a mano y evita aplicar criterios distintos en cada caso.",
    example:
      "Una cuota vencida muestra el importe actualizado y deja visible que parte corresponde al atraso.",
    icon: AlertTriangle,
    tags: ["Interes", "Atrasos", "Control"],
  },
  {
    id: "alertas",
    title: "Alertas",
    eyebrow: "Nada queda suelto",
    description:
      "Vencimientos, tareas y recordatorios para actuar antes de que la mora se acumule.",
    solves:
      "La cobranza deja de depender de acordarse de revisar una planilla o mandar un mensaje.",
    example:
      "Al abrir el sistema ves que vence hoy, que se atraso y que clientes necesitan contacto.",
    icon: BellRing,
    tags: ["Vencimientos", "Tareas", "Recordatorios"],
  },
  {
    id: "firma",
    title: "Firma electronica operativa",
    eyebrow: "Respaldo documental",
    description:
      "El cliente puede aceptar y firmar contratos desde el celular, con el documento guardado junto al credito.",
    solves:
      "Reduce papeles sueltos, fotos de contratos y archivos dificiles de encontrar.",
    example:
      "Al aprobar una financiacion, envias el contrato y luego queda vinculado a la operacion.",
    icon: FileSignature,
    tags: ["Contratos", "Celular", "Archivo"],
    legalNote:
      "Esta funcionalidad no se ofrece como Firma Digital bajo la Ley 25.506. Funciona como firma electronica o aceptacion operativa dentro del flujo del sistema, segun la instrumentacion que defina cada negocio.",
  },
  {
    id: "portal",
    title: "Portal del cliente",
    eyebrow: "Consulta simple",
    description:
      "Acceso para que el cliente revise contrato, cuotas y estado sin pedir capturas ni esperar una respuesta manual.",
    solves:
      "Reduce consultas repetidas y mejora la claridad sobre la financiacion.",
    example:
      "El cliente entra desde el celular y consulta proximas cuotas, pagos y saldo pendiente.",
    icon: Smartphone,
    tags: ["Autoservicio", "Cuotas", "Contrato"],
  },
];

const flowSteps = [
  "Alta del cliente",
  "Carga del credito",
  "Plan de cuotas",
  "Registro de cobros",
  "Mora y deudores",
  "Seguimiento y reportes",
];

const resourceCards = [
  {
    title: "Guia para dejar Excel",
    text: "Que informacion conviene centralizar primero para ordenar una cartera activa sin frenar la cobranza.",
    icon: ClipboardCheck,
  },
  {
    title: "Mora sin discusiones",
    text: "Como trabajar vencimientos, intereses y saldos con criterios claros para el equipo y el cliente.",
    icon: CreditCard,
  },
  {
    title: "Cobranza por WhatsApp",
    text: "Buenas practicas para usar mensajes sin perder historial ni convertir cada seguimiento en una busqueda manual.",
    icon: MessageCircle,
  },
  {
    title: "Anexo de producto",
    text: "La revista del sistema resume pantallas, funcionalidades y casos de uso para entenderlo en pocos minutos.",
    icon: BookOpen,
  },
];

export function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const activeFeature = useMemo(
    () => features.find((feature) => feature.id === activeFeatureId) ?? null,
    [activeFeatureId]
  );

  return (
    <div className="landing-page min-h-screen bg-[#050914] text-slate-50">
      <header className="sticky top-0 z-50 border-b border-cyan-300/15 bg-[#050914]/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" onClick={() => setNavOpen(false)}>
            <img src={LOGO_SRC} alt="Gestion de Creditos" className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_0_14px_rgba(45,212,230,0.45)]" />
            <span className="min-w-0">
              <span className="block text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">Gestion de Creditos</span>
              <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-cyan-300">Adema Sistemas</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex" aria-label="Principal">
            <a href="#problemas" className="transition hover:text-white">Problemas</a>
            <a href="#funcionalidades" className="transition hover:text-white">Funcionalidades</a>
            <a href="#demo" className="transition hover:text-white">Demo</a>
            <Link to="/revista" className="transition hover:text-white">Revista</Link>
            <a href="#firma" className="transition hover:text-white">Firma</a>
            <a href={DEMO_URL} className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 font-extrabold text-slate-950 shadow-[0_12px_34px_-16px_rgba(45,212,230,0.85)] transition hover:bg-cyan-200">
              Solicitar demo <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/25 text-cyan-200 lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((value) => !value)}
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {navOpen && (
          <div className="border-t border-cyan-300/15 bg-[#071321] px-4 py-3 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2 text-sm font-medium text-slate-200" aria-label="Principal mobile">
              {["problemas", "funcionalidades", "demo", "firma"].map((item) => (
                <a key={item} href={`#${item}`} className="rounded-md px-3 py-2 capitalize hover:bg-cyan-300/10" onClick={() => setNavOpen(false)}>
                  {item}
                </a>
              ))}
              <Link
                to="/revista"
                className="rounded-md px-3 py-2 capitalize hover:bg-cyan-300/10"
                onClick={() => setNavOpen(false)}
              >
                Revista
              </Link>
              <a href={DEMO_URL} className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-2 font-semibold text-slate-950">
                Solicitar demo <ArrowRight className="h-4 w-4" />
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
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(45,212,230,0.9)]" /> Software de gestion de creditos
              </span>
              <h1 className="mt-6 max-w-4xl text-3xl font-black uppercase leading-[1.04] text-white sm:text-5xl lg:text-7xl">
                Gestion de Creditos para vender en cuotas sin perder control
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
                Ordena clientes, creditos, cuotas, cobranzas, mora y deudores en una sola aplicacion para comercios, financieras chicas y negocios que hoy dependen de Excel, cuaderno o WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={DEMO_URL} className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-[0_16px_40px_-18px_rgba(45,212,230,0.9)] transition hover:bg-cyan-200">
                  Solicitar demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#demo" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                  <PlayCircle className="h-4 w-4" /> Ver video
                </a>
              </div>

              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-6 text-sm">
                <div>
                  <dt className="text-slate-400">Cartera</dt>
                  <dd className="mt-1 text-2xl font-black text-white">360°</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Cobranza</dt>
                  <dd className="mt-1 text-2xl font-black text-emerald-300">Dia a dia</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Mora</dt>
                  <dd className="mt-1 text-2xl font-black text-amber-300">Visible</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="rounded-lg border border-cyan-300/25 bg-[#091523] p-2 shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-300" /> Demo del sistema</span>
                  <span className="text-cyan-200">video</span>
                </div>
                <video className="aspect-video w-full rounded-md bg-black object-cover" autoPlay muted loop playsInline controls preload="metadata">
                  <source src={VIDEO_SRC} type="video/mp4" />
                </video>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Metric icon={BadgeCheck} label="Cuotas" value="al dia" tone="cyan" />
                <Metric icon={BellRing} label="Alertas" value="hoy" tone="amber" />
                <Metric icon={ShieldCheck} label="Respaldo" value="ordenado" tone="emerald" />
              </div>
            </div>
          </div>
        </section>

        <section id="problemas" className="border-b border-white/10 bg-[#070d19] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Problemas reales"
            title="Cuando la cartera crece, el desorden tambien"
            text="La venta en cuotas funciona cuando el seguimiento es claro. El problema aparece cuando cada dato vive en una herramienta distinta."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {painPoints.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]">
                <item.icon className="h-8 w-8 text-cyan-200" />
                <h3 className="mt-5 text-lg font-extrabold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#050914] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">La solucion</span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">Todo el ciclo del credito en un solo lugar</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Gestion de Creditos centraliza el alta, el plan de pago, los cobros, la mora y el seguimiento. El equipo trabaja con la misma informacion y el cliente recibe respuestas mas claras.
              </p>
              <a href={DEMO_URL} className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200">
                Quiero ordenar mi cartera <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {flowSteps.map((step, index) => (
                <div key={step} className="rounded-lg border border-cyan-300/18 bg-[#091523] p-5">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">0{index + 1}</span>
                  <p className="mt-4 text-base font-extrabold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="border-y border-white/10 bg-[#071321] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Funcionalidades principales"
            title="Las piezas clave para cobrar con mas claridad"
            text="Cada modulo responde a una parte concreta de la operacion: cliente, credito, cuota, cobro, deuda y seguimiento."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
            {features.map((feature) => (
              <button
                key={feature.id}
                type="button"
                className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 text-left transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
                onClick={() => setActiveFeatureId(feature.id)}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <feature.icon className="h-5 w-5" />
                </span>
                <span className="mt-5 block text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{feature.eyebrow}</span>
                <span className="mt-2 block text-xl font-extrabold text-white">{feature.title}</span>
                <span className="mt-3 block text-sm leading-6 text-slate-400">{feature.description}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                  Ver detalle <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="demo" className="bg-[#050914] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-cyan-200"><PlayCircle className="h-5 w-5" /> Demo visible</span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">Mira como se ordena una cartera de creditos</h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                El video acompana el recorrido comercial: clientes, operaciones, cuotas, cobros y seguimiento. Sirve para que quien llega desde la web entienda rapido si la aplicacion encaja con su negocio.
              </p>
              <a href={DEMO_URL} className="mt-7 inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-extrabold text-cyan-100 transition hover:bg-cyan-300/16">
                Solicitar demo personalizada <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#091523] p-2">
              <video className="aspect-video w-full rounded-md bg-black object-cover" controls preload="metadata">
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="firma" className="border-y border-amber-300/20 bg-[#11100b] py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-200"><FileSignature className="h-5 w-5" /> Firma y contratos</span>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">Contratos mas faciles de guardar, con el alcance legal claro</h2>
            </div>
            <div className="rounded-lg border border-amber-200/20 bg-amber-200/[0.06] p-6">
              <p className="text-base leading-8 text-amber-50">
                La funcionalidad de firma ayuda a que el cliente acepte o firme contratos desde el celular y a conservar el documento asociado al credito. No se presenta como Firma Digital bajo la Ley 25.506. Debe entenderse como firma electronica o aceptacion operativa del flujo, con la validez y los recaudos que correspondan segun cada instrumentacion.
              </p>
              <p className="mt-4 text-sm leading-6 text-amber-100/75">
                Para usos con exigencias legales especificas, conviene validar el circuito documental con asesoria profesional antes de adoptarlo como reemplazo de otros mecanismos.
              </p>
            </div>
          </div>
        </section>

        <section id="revista" className="bg-[#070d19] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Anexo de producto"
            title="La revista del sistema"
            text="Resume pantallas, funcionalidades y beneficios para quien quiere entender el sistema con una lectura visual. Se abre en pantalla completa para mejor experiencia."
          />
          <div className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/revista"
              className="group flex flex-col items-center gap-6 rounded-lg border border-cyan-300/20 bg-[#050914] p-10 text-center shadow-[0_26px_80px_-42px_rgba(0,0,0,0.9)] transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.04] sm:flex-row sm:text-left"
            >
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <BookOpen className="h-10 w-10" />
              </span>
              <div className="flex-1">
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Folleto interactivo</span>
                <span className="mt-2 block text-2xl font-black text-white sm:text-3xl">Abrir la revista del producto</span>
                <span className="mt-3 block text-sm leading-7 text-slate-400">
                  Navega pagina a pagina, hace zoom, y lee el folleto completo en modo oscuro. Ideal para compartir con el equipo antes de una demo.
                </span>
              </div>
              <ArrowRight className="h-6 w-6 shrink-0 text-cyan-200 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section id="recursos" className="border-y border-white/10 bg-[#050914] py-16 sm:py-20">
          <SectionIntro
            eyebrow="Contenido de apoyo"
            title="Copy y recursos alineados al folleto"
            text="La web evita tecnicismos innecesarios y habla de lo que el cliente busca: controlar cartera, cobrar mejor y reducir desorden."
          />
          <div className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {resourceCards.map((resource) => (
              <article key={resource.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <resource.icon className="h-8 w-8 text-emerald-300" />
                <h3 className="mt-5 text-lg font-extrabold text-white">{resource.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{resource.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="landing-cta-bg py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Proximo paso</span>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">Ordena la cartera antes de que la cobranza te ordene el dia</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Si vendes en cuotas y el seguimiento depende de Excel, WhatsApp o una persona, Gestion de Creditos te ayuda a trabajar con mas control y menos friccion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={DEMO_URL} className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200">
                Solicitar demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href={DEMO_URL} className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
                Hablar con Adema Sistemas <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#030611] py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Gestion de Creditos" className="h-9 w-9 object-contain" />
            <div>
              <strong className="block uppercase tracking-[0.18em] text-white">Gestion de Creditos</strong>
              <span>Adema Sistemas</span>
            </div>
          </div>
          <p>Menos desorden. Mas control. Mas claridad para cobrar.</p>
          <a href="mailto:hola@ademasistemas.com" className="text-cyan-200 hover:text-cyan-100">hola@ademasistemas.com</a>
        </div>
      </footer>

      <a href={DEMO_URL} className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300 px-4 py-3 text-sm font-extrabold text-slate-950 shadow-[0_18px_40px_-18px_rgba(45,212,230,0.9)] transition hover:bg-cyan-200 lg:inline-flex">
        Demo <ArrowRight className="h-4 w-4" />
      </a>

      {activeFeature && <FeatureModal feature={activeFeature} onClose={() => setActiveFeatureId(null)} />}
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Metric({ icon: Icon, label, value, tone }: { icon: LucideIcon; label: string; value: string; tone: "cyan" | "amber" | "emerald" }) {
  const toneClass = {
    cyan: "text-cyan-200 border-cyan-300/25 bg-cyan-300/8",
    amber: "text-amber-200 border-amber-300/25 bg-amber-300/8",
    emerald: "text-emerald-200 border-emerald-300/25 bg-emerald-300/8",
  }[tone];

  return (
    <div className={`rounded-lg border p-4 ${toneClass}`}>
      <Icon className="h-5 w-5" />
      <span className="mt-3 block text-xs uppercase tracking-[0.18em] opacity-75">{label}</span>
      <strong className="mt-1 block text-lg font-black text-white">{value}</strong>
    </div>
  );
}

function FeatureModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby={`feature-${feature.id}`} onMouseDown={onClose}>
      <article className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg border border-cyan-300/20 bg-[#071321] p-6 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
              <feature.icon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">{feature.eyebrow}</p>
            <h2 id={`feature-${feature.id}`} className="mt-2 text-3xl font-black uppercase text-white">{feature.title}</h2>
          </div>
          <button type="button" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white" aria-label="Cerrar" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="mt-5 text-base leading-7 text-slate-300">{feature.description}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-cyan-200">Que resuelve</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{feature.solves}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-200">Ejemplo practico</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{feature.example}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {feature.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-semibold text-cyan-100">{tag}</span>
          ))}
        </div>

        {feature.legalNote && (
          <div className="mt-6 rounded-lg border border-amber-300/25 bg-amber-300/8 p-4 text-sm leading-6 text-amber-50">
            {feature.legalNote}
          </div>
        )}

        <a href={DEMO_URL} className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-cyan-200">
          Solicitar demo <ArrowRight className="h-4 w-4" />
        </a>
      </article>
    </div>
  );
}
