export const DEMO_URL = "https://ademasistemas.com/gestion-creditos/";
export const LOGO_SRC = "/brand/logo.png";
export const VIDEO_SRC = "/media/gestion-creditos-demo.mp4";

export type Feature = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  solves: string;
  example: string;
  icon: string;
  tags: string[];
  legalNote?: string;
};

export type SeoPageContent = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  painTitle: string;
  pain: string;
  benefits: string[];
  features: string[];
  faq: { question: string; answer: string }[];
  cta: string;
  metaTitle: string;
  metaDescription: string;
};

export const painPoints = [
  {
    title: "Excel deja de alcanzar",
    text: "Cuando la cartera crece aparecen archivos duplicados, fórmulas tocadas y saldos que nadie puede defender con seguridad.",
    icon: "chart",
  },
  {
    title: "WhatsApp mezcla todo",
    text: "Sirve para hablar, pero no para auditar promesas de pago, comprobantes, reclamos y próximos pasos de cobranza.",
    icon: "message",
  },
  {
    title: "La mora se discute",
    text: "Cada cálculo manual abre espacio para errores, reclamos y criterios distintos frente al mismo atraso.",
    icon: "alert",
  },
  {
    title: "La cobranza queda en la cabeza",
    text: "Si una persona falta, cuesta saber quién debe, cuánto debe, desde cuándo y qué se prometió cobrar.",
    icon: "eye",
  },
];

export const beforeAfter = {
  before: [
    "Clientes repartidos entre planillas y cuadernos",
    "Cuotas calculadas o corregidas a mano",
    "Mora explicada caso por caso",
    "Contratos y comprobantes difíciles de encontrar",
    "Promesas de pago perdidas en WhatsApp",
    "Deudores sin prioridad clara",
  ],
  after: [
    "Cartera centralizada por cliente y operación",
    "Cuotas, vencimientos y saldos visibles",
    "Mora calculada con reglas consistentes",
    "Documentación asociada a cada crédito",
    "Portal para que el cliente consulte su estado",
    "Reportes para priorizar la cobranza diaria",
  ],
};

export const flowSteps = [
  "Cargás el cliente",
  "Registrás el crédito",
  "Definís el plan de cuotas",
  "Cargás cobros y comprobantes",
  "Revisás mora y deudores",
  "Priorizás la cobranza con reportes",
];

export const features: Feature[] = [
  {
    id: "clientes",
    title: "Clientes",
    eyebrow: "Ficha única",
    description:
      "Datos de contacto, créditos activos, pagos, saldos y estado de cuenta reunidos en una sola vista.",
    solves:
      "Evita reconstruir la historia del cliente entre planillas, chats, anotaciones y archivos sueltos.",
    example:
      "Buscás un cliente y ves al instante qué operaciones tiene activas, qué pagó y qué falta cobrar.",
    icon: "users",
    tags: ["Historial", "Estado de cuenta", "Contacto"],
  },
  {
    id: "creditos",
    title: "Créditos",
    eyebrow: "Operación clara",
    description:
      "Monto, condiciones, intereses, cuotas y respaldo documental registrados para cada venta financiada.",
    solves: "Reduce errores al armar planes de pago y baja la dependencia de acuerdos informales.",
    example:
      "Vendés financiado, cargás la operación y el cronograma queda listo para cobrarlo y auditarlo.",
    icon: "file",
    tags: ["Alta rápida", "Condiciones", "Contratos"],
  },
  {
    id: "cuotas",
    title: "Cuotas",
    eyebrow: "Calendario cobrable",
    description:
      "Vencimientos, pagos, saldos pendientes y próximos cobros visibles sin revisar fila por fila.",
    solves: "Muestra qué vence hoy, qué está atrasado y qué sigue pendiente en cada operación.",
    example:
      "Un cliente consulta cuánto le queda y respondés con cuotas pagadas, próxima fecha y saldo actualizado.",
    icon: "calendar",
    tags: ["Vencimientos", "Saldos", "Cronograma"],
  },
  {
    id: "cobros",
    title: "Cobros",
    eyebrow: "Registro confiable",
    description:
      "Pagos, medios, comprobantes y observaciones asociados a la cuota, el crédito y el cliente correcto.",
    solves:
      "Evita pagos duplicados, comprobantes perdidos y dudas sobre qué cuota quedó cancelada.",
    example:
      "Registrás una transferencia, la cuota queda cancelada y el historial se actualiza para todo el equipo.",
    icon: "wallet",
    tags: ["Pagos", "Comprobantes", "Historial"],
  },
  {
    id: "deudores",
    title: "Deudores",
    eyebrow: "Prioridad diaria",
    description:
      "Listado actualizado de clientes con deuda, importes pendientes, días de atraso y datos para contactar.",
    solves:
      "Ayuda a decidir a quién llamar primero y evita que los atrasos chicos se vuelvan grandes.",
    example:
      "Antes de gestionar, filtrás vencidos y priorizás los casos con mayor mora, saldo o antigüedad.",
    icon: "search",
    tags: ["Mora", "Filtros", "Seguimiento"],
  },
  {
    id: "mora",
    title: "Mora",
    eyebrow: "Criterios consistentes",
    description:
      "Reglas de intereses por atraso para trabajar con importes claros, repetibles y fáciles de explicar.",
    solves:
      "Reduce discusiones por cuentas hechas a mano y evita aplicar criterios distintos según quién cobre.",
    example:
      "Una cuota vencida muestra el importe actualizado y deja visible qué parte corresponde al atraso.",
    icon: "alert",
    tags: ["Interés", "Atrasos", "Control"],
  },
  {
    id: "alertas",
    title: "Alertas",
    eyebrow: "Nada queda suelto",
    description:
      "Vencimientos, tareas y recordatorios para actuar antes de que el atraso se acumule.",
    solves:
      "La cobranza deja de depender de acordarse de revisar una planilla o mandar un mensaje a tiempo.",
    example:
      "Al abrir el sistema ves qué vence hoy, qué se atrasó y qué clientes necesitan seguimiento.",
    icon: "bell",
    tags: ["Vencimientos", "Tareas", "Recordatorios"],
  },
  {
    id: "firma",
    title: "Firma electrónica operativa",
    eyebrow: "Respaldo documental",
    description:
      "El cliente puede aceptar o firmar contratos desde el celular, con el documento guardado junto al crédito.",
    solves: "Reduce papeles sueltos, fotos de contratos y documentos difíciles de encontrar.",
    example:
      "Al aprobar una financiación, enviás el contrato y luego queda vinculado a la operación.",
    icon: "signature",
    tags: ["Contratos", "Celular", "Archivo"],
    legalNote:
      "Esta funcionalidad no se ofrece como Firma Digital bajo la Ley 25.506. Funciona como firma electrónica o aceptación operativa dentro del flujo del sistema, según la instrumentación que defina cada negocio.",
  },
  {
    id: "portal",
    title: "Portal del cliente",
    eyebrow: "Consulta simple",
    description:
      "Acceso para que el cliente revise contrato, cuotas, pagos y saldo sin pedir capturas por WhatsApp.",
    solves: "Reduce consultas repetidas y mejora la transparencia de la financiación.",
    example:
      "El cliente entra desde el celular y consulta próximas cuotas, pagos registrados y saldo pendiente.",
    icon: "phone",
    tags: ["Autoservicio", "Cuotas", "Contrato"],
  },
];

export const industries = [
  "Mueblerías",
  "Electrodomésticos",
  "Financieras chicas",
  "Agencias de motos",
  "Mutuales",
  "Comercios de barrio",
  "Distribuidoras",
  "Venta con pagaré o contrato",
];

export const implementationServices = [
  {
    title: "Migración desde Excel",
    text: "Podemos importar clientes, créditos activos, cuotas pendientes y saldos iniciales para que no empieces desde una pantalla vacía.",
    extra: true,
  },
  {
    title: "Configuración de reglas",
    text: "Ajustamos planes, intereses, mora, días de gracia, sucursales, vendedores y cobradores según tu operatoria.",
  },
  {
    title: "Capacitación inicial",
    text: "La capacitación inicial está incluida para que tu equipo aprenda a cargar créditos, registrar cobros y revisar deudores.",
  },
  {
    title: "Contratos y documentos",
    text: "Podemos preparar plantillas para contratos, recibos, estados de cuenta y comprobantes cuando el circuito lo requiere.",
  },
  {
    title: "Portal del cliente",
    text: "Tus clientes pueden consultar cuotas, vencimientos, contrato y estado de cuenta desde el celular.",
  },
  {
    title: "Alertas y reportes",
    text: "Tenés resúmenes de vencimientos, deudores, mora y cartera para decidir la agenda de cobranza.",
  },
];

export const planIncludes = [
  "Uso mensual del sistema Gestión de Créditos",
  "Capacitación inicial para el equipo",
  "Dominio propio el primer año, sujeto a disponibilidad",
  "Backups completos todos los días a las 3 AM",
  "Panel de autogestión para tickets de soporte, servicios y mejoras",
  "Hasta 5 horas mensuales de ajustes incluidos, no acumulables",
];

export const planExcludes = [
  "Importación o migración de datos desde Excel u otros sistemas",
  "Cargas masivas complejas",
  "Capacitación adicional posterior a la inicial",
  "Desarrollos a medida que excedan las 5 horas mensuales incluidas",
  "Integraciones especiales o configuraciones extraordinarias",
];

export const faqs = [
  {
    question: "¿Qué es Gestión de Créditos?",
    answer:
      "Es un sistema de gestión de créditos y cobranzas para centralizar clientes, ventas financiadas, cuotas, cobros, mora, deudores, contratos y reportes.",
  },
  {
    question: "¿Para qué tipo de negocios sirve?",
    answer:
      "Sirve para comercios, financieras chicas, mueblerías, agencias de motos, mutuales, distribuidoras y negocios que venden en cuotas o trabajan con cartera de clientes.",
  },
  {
    question: "¿Reemplaza Excel?",
    answer:
      "Sí. La idea es dejar de depender de planillas, cuadernos y chats para saber quién debe, cuánto debe, desde cuándo debe y qué se hizo para cobrar.",
  },
  {
    question: "¿Puedo cargar créditos ya existentes?",
    answer:
      "Sí. Se pueden cargar créditos activos, cuotas pendientes y saldos iniciales. La importación o migración masiva se cotiza aparte como servicio adicional.",
  },
  {
    question: "¿El sistema calcula mora?",
    answer:
      "Sí. Permite trabajar con reglas de mora e intereses por atraso para que el cálculo sea más claro, repetible y fácil de explicar al cliente.",
  },
  {
    question: "¿Tiene portal para el cliente?",
    answer:
      "Sí. El cliente puede consultar cuotas, vencimientos, contrato, pagos y estado de cuenta desde el celular, reduciendo consultas repetidas por WhatsApp.",
  },
  {
    question: "¿La firma es firma digital?",
    answer:
      "No se presenta como Firma Digital bajo la Ley 25.506. Funciona como firma electrónica o aceptación operativa dentro del flujo del sistema, según la instrumentación definida por cada negocio.",
  },
  {
    question: "¿Qué incluye el plan mensual?",
    answer:
      "Incluye uso del sistema, capacitación inicial, dominio propio por el primer año, backups diarios a las 3 AM, panel de tickets y hasta 5 horas mensuales de ajustes no acumulables.",
  },
  {
    question: "¿ADEMA migra mis datos actuales?",
    answer:
      "Sí, podemos ayudarte a migrar datos desde Excel u otros formatos. Ese trabajo se cotiza aparte a razón de USD 30 por hora de servicio.",
  },
];

export const seoPages: SeoPageContent[] = [
  {
    path: "/sistema-para-mueblerias",
    eyebrow: "Mueblerías",
    title: "Sistema de créditos para mueblerías que venden en cuotas",
    description:
      "Controlá clientes, cuotas, vencimientos, mora y contratos sin depender de Excel, cuadernos ni comprobantes perdidos por WhatsApp.",
    painTitle:
      "Cuando una mueblería financia, cada cuota mal seguida se convierte en dinero difícil de recuperar.",
    pain: "Entre entregas, promesas de pago, cambios de fecha y comprobantes por WhatsApp, la cartera puede crecer más rápido que el control administrativo.",
    benefits: [
      "Ver cuotas vencidas y próximas",
      "Consultar deuda por cliente",
      "Guardar contratos junto al crédito",
      "Priorizar deudores antes de salir a cobrar",
    ],
    features: ["Clientes", "Créditos", "Cuotas", "Mora", "Contratos", "Portal del cliente"],
    faq: [
      {
        question: "¿Sirve para mueblerías con financiación propia?",
        answer:
          "Sí. Está pensado para negocios que venden en cuotas y necesitan seguir saldos, vencimientos, mora y cobros.",
      },
      {
        question: "¿Puedo cargar créditos viejos?",
        answer:
          "Sí. Se pueden cargar manualmente o migrar desde planillas como servicio adicional.",
      },
    ],
    cta: "Ver cómo funciona en una mueblería",
    metaTitle: "Sistema de créditos para mueblerías | Gestión de Créditos",
    metaDescription:
      "Software para mueblerías que venden en cuotas. Controlá clientes, vencimientos, mora, contratos y cobranzas sin depender de Excel o WhatsApp.",
  },
  {
    path: "/sistema-para-financieras",
    eyebrow: "Financieras chicas",
    title: "Sistema para financieras chicas que necesitan controlar cartera y cobranzas",
    description:
      "Gestioná créditos, cuotas, mora, deudores, cobradores y reportes diarios desde una plataforma simple de operar.",
    painTitle:
      "Una financiera chica no puede depender de planillas sueltas para saber cuánto tiene prestado y cuánto venció.",
    pain: "Cuando la cartera crece, necesitás saldos confiables, reglas de mora consistentes y seguimiento diario de deudores.",
    benefits: [
      "Cartera centralizada",
      "Mora con reglas claras",
      "Reportes de vencimientos",
      "Seguimiento por cliente y operación",
    ],
    features: ["Créditos", "Cuotas", "Cobros", "Deudores", "Alertas", "Reportes"],
    faq: [
      {
        question: "¿Sirve para financieras pequeñas?",
        answer:
          "Sí. La propuesta está pensada para equipos chicos que necesitan control sin armar una estructura compleja.",
      },
      {
        question: "¿Permite revisar deudores?",
        answer:
          "Sí. Podés ver atrasos, saldos pendientes y datos útiles para priorizar la cobranza.",
      },
    ],
    cta: "Consultar demo para financiera",
    metaTitle: "Sistema para financieras chicas | Gestión de Créditos",
    metaDescription:
      "Software para financieras chicas: control de créditos, cuotas, mora, deudores, cobranzas y reportes diarios en una sola plataforma.",
  },
  {
    path: "/sistema-para-cobranza-de-cuotas",
    eyebrow: "Cobranza de cuotas",
    title: "Sistema para cobranza de cuotas y seguimiento de vencimientos",
    description:
      "Ordená vencimientos, pagos, comprobantes, atrasos y contactos para que la cobranza no dependa de memoria o chats dispersos.",
    painTitle:
      "La cobranza se complica cuando no está claro qué vence hoy y qué ya quedó atrasado.",
    pain: "Si cada cobro se confirma por un chat distinto, los comprobantes se pierden y los atrasos aparecen cuando ya cuesta más cobrarlos.",
    benefits: [
      "Ver vencimientos del día",
      "Registrar pagos y medios de cobro",
      "Asociar comprobantes",
      "Detectar atrasos a tiempo",
    ],
    features: ["Cuotas", "Cobros", "Alertas", "Deudores", "Reportes"],
    faq: [
      {
        question: "¿Permite registrar pagos parciales?",
        answer:
          "El sistema permite ordenar cobros y asociarlos a cuotas y clientes según el circuito configurado.",
      },
      {
        question: "¿Ayuda a saber a quién cobrar primero?",
        answer: "Sí. Los listados de vencidos y deudores ayudan a priorizar la gestión diaria.",
      },
    ],
    cta: "Consultar sistema de cobranzas",
    metaTitle: "Sistema para cobranza de cuotas | Gestión de Créditos",
    metaDescription:
      "Controlá cuotas, vencimientos, pagos, comprobantes, atrasos y deudores con un sistema de cobranza para negocios que venden financiado.",
  },
  {
    path: "/sistema-para-control-de-mora",
    eyebrow: "Control de mora",
    title: "Sistema para controlar mora, atrasos y deudores",
    description:
      "Aplicá criterios claros de mora, visualizá cuotas vencidas y seguí a los clientes con deuda desde un mismo lugar.",
    painTitle: "La mora calculada a mano abre discusiones y puede hacerte perder plata.",
    pain: "Cada atraso necesita reglas claras para evitar errores, reclamos y criterios distintos entre vendedores o cobradores.",
    benefits: [
      "Criterios de mora consistentes",
      "Cuotas vencidas visibles",
      "Saldos actualizados",
      "Seguimiento de deudores",
    ],
    features: ["Mora", "Deudores", "Cuotas", "Alertas", "Estado de cuenta"],
    faq: [
      {
        question: "¿El sistema calcula intereses por atraso?",
        answer:
          "Sí. Se pueden configurar criterios de mora para trabajar importes más claros y repetibles.",
      },
      {
        question: "¿Puedo ver desde cuándo debe un cliente?",
        answer:
          "Sí. El seguimiento muestra atrasos, cuotas pendientes e historial asociado al cliente.",
      },
    ],
    cta: "Controlar mora y deudores",
    metaTitle: "Sistema para control de mora | Gestión de Créditos",
    metaDescription:
      "Software para controlar mora, cuotas vencidas, intereses por atraso y deudores en negocios que venden en cuotas.",
  },
  {
    path: "/sistema-para-vender-en-cuotas",
    eyebrow: "Venta en cuotas",
    title: "Sistema para vender en cuotas sin perder control",
    description:
      "Centralizá clientes, créditos, planes de pago, cobros, mora y reportes para financiar ventas con seguimiento claro.",
    painTitle: "Vender en cuotas puede aumentar ventas, pero también puede desordenar la cobranza.",
    pain: "Si el seguimiento vive en Excel, cuadernos y WhatsApp, cada nueva operación suma riesgo operativo.",
    benefits: [
      "Plan de cuotas por operación",
      "Historial de pagos",
      "Alertas de vencimiento",
      "Estado de cuenta por cliente",
    ],
    features: ["Clientes", "Créditos", "Cuotas", "Cobros", "Portal del cliente"],
    faq: [
      {
        question: "¿Sirve para comercios que financian ventas?",
        answer:
          "Sí. Está pensado para comercios que venden en cuotas y necesitan saber qué cobrar y cuándo.",
      },
      {
        question: "¿Ayuda a salir de Excel?",
        answer:
          "Sí. Reemplaza la planilla como centro de control de clientes, cuotas, mora y cobranzas.",
      },
    ],
    cta: "Vender en cuotas con control",
    metaTitle: "Sistema para vender en cuotas | Gestión de Créditos",
    metaDescription:
      "Sistema para vender en cuotas y controlar clientes, créditos, vencimientos, cobros, mora y deudores desde una sola plataforma.",
  },
  {
    path: "/sistema-para-reemplazar-excel-creditos",
    eyebrow: "Reemplazar Excel",
    title: "Sistema para reemplazar Excel en la gestión de créditos",
    description:
      "Dejá de depender de planillas para controlar cartera, cuotas, vencimientos, mora, cobros, comprobantes y deudores.",
    painTitle: "Excel sirve al principio, pero se vuelve frágil cuando la cartera crece.",
    pain: "Una fórmula modificada, un archivo duplicado o una cuota mal marcada pueden cambiar saldos y afectar toda la cobranza.",
    benefits: [
      "Datos centralizados",
      "Menos errores manuales",
      "Historial por cliente",
      "Reportes listos para decidir",
    ],
    features: ["Clientes", "Créditos", "Cuotas", "Cobros", "Reportes"],
    faq: [
      {
        question: "¿Puedo migrar mi Excel actual?",
        answer:
          "Sí. ADEMA puede ayudarte a importar datos como servicio adicional cotizado por hora.",
      },
      {
        question: "¿Tengo que cargar todo de cero?",
        answer:
          "No necesariamente. Se puede definir un plan de migración según el estado de tus planillas.",
      },
    ],
    cta: "Migrar mi Excel al sistema",
    metaTitle: "Sistema para reemplazar Excel en créditos | Gestión de Créditos",
    metaDescription:
      "Reemplazá Excel para gestionar créditos, cuotas, mora, cobros y deudores con un sistema centralizado para carteras financiadas.",
  },
  {
    path: "/portal-cliente-creditos",
    eyebrow: "Portal del cliente",
    title: "Portal del cliente para consultar créditos, cuotas y estado de cuenta",
    description:
      "Tus clientes pueden revisar vencimientos, pagos, saldos y contratos desde el celular, sin pedir capturas por WhatsApp.",
    painTitle: "Cada consulta manual por WhatsApp le quita tiempo al equipo de cobranza.",
    pain: "Cuando el cliente no puede ver su estado, pide capturas, pregunta por cuotas y obliga a responder consultas repetidas.",
    benefits: [
      "Consulta desde el celular",
      "Menos mensajes repetidos",
      "Más transparencia",
      "Estado de cuenta disponible",
    ],
    features: ["Portal", "Cuotas", "Contratos", "Estado de cuenta", "Pagos"],
    faq: [
      {
        question: "¿El cliente puede ver sus cuotas?",
        answer: "Sí. El portal permite consultar cuotas, vencimientos, pagos y saldo pendiente.",
      },
      {
        question: "¿Reduce consultas por WhatsApp?",
        answer:
          "Sí. El cliente puede acceder a información básica sin esperar una respuesta manual.",
      },
    ],
    cta: "Conocer el portal del cliente",
    metaTitle: "Portal del cliente para créditos | Gestión de Créditos",
    metaDescription:
      "Portal para que clientes consulten cuotas, vencimientos, pagos, saldos, contratos y estado de cuenta desde el celular.",
  },
  {
    path: "/contratos-creditos-firma-electronica",
    eyebrow: "Contratos y firma",
    title: "Contratos de créditos con firma electrónica operativa",
    description:
      "Ordená contratos, aceptación del cliente y documentación asociada a cada crédito, con alcance legal comunicado de forma responsable.",
    painTitle: "Los contratos sueltos pierden valor operativo cuando nadie sabe dónde quedaron.",
    pain: "Fotos, papeles y PDFs dispersos complican el seguimiento del crédito y hacen más lenta la respuesta ante reclamos.",
    benefits: [
      "Contrato asociado al crédito",
      "Aceptación desde el celular",
      "Archivo ordenado",
      "Alcance legal claro",
    ],
    features: ["Contratos", "Firma electrónica", "Documentos", "Cliente", "Crédito"],
    faq: [
      {
        question: "¿Es Firma Digital bajo Ley 25.506?",
        answer:
          "No. Se comunica como firma electrónica o aceptación operativa, no como Firma Digital bajo la Ley 25.506.",
      },
      {
        question: "¿Conviene validar el circuito legalmente?",
        answer:
          "Sí. Para usos con exigencias legales específicas, conviene revisar el circuito con asesoría profesional.",
      },
    ],
    cta: "Consultar contratos y firma",
    metaTitle: "Contratos de créditos y firma electrónica | Gestión de Créditos",
    metaDescription:
      "Sistema para ordenar contratos de créditos, aceptación del cliente y documentación asociada, con firma electrónica operativa.",
  },
  {
    path: "/software-gestion-creditos-argentina",
    eyebrow: "Argentina",
    title: "Software de gestión de créditos y cobranzas en Argentina",
    description:
      "Plan mensual para negocios argentinos que venden en cuotas y necesitan controlar cartera, cobros, mora, contratos y deudores.",
    painTitle:
      "En Argentina, vender financiado exige claridad diaria sobre cartera, vencimientos y deuda.",
    pain: "La inflación, los atrasos y la cobranza informal hacen que depender de planillas sea cada vez más riesgoso.",
    benefits: [
      "Plan Argentina $99.999 + IVA",
      "Capacitación inicial incluida",
      "Backups diarios",
      "Hasta 5 horas mensuales de ajustes",
    ],
    features: ["Sistema", "Dominio", "Backups", "Tickets", "Ajustes mensuales"],
    faq: [
      {
        question: "¿Cuál es el precio del plan?",
        answer: "El plan Argentina sale $99.999 + IVA por mes.",
      },
      {
        question: "¿Qué pasa con migraciones o capacitaciones extra?",
        answer: "Se cotizan aparte a USD 30 por hora de servicio.",
      },
    ],
    cta: "Consultar plan Argentina",
    metaTitle: "Software de gestión de créditos en Argentina | Gestión de Créditos",
    metaDescription:
      "Software argentino para gestión de créditos y cobranzas. Plan mensual con capacitación inicial, dominio, backups, tickets y ajustes incluidos.",
  },
];

export function getSeoPage(path: string) {
  return seoPages.find((page) => page.path === path);
}
