# Nueva versión de la web de Gestión de Créditos

Este documento describe, antes de tocar la implementación, qué voy a cambiar en la web, cómo está hoy y cómo debería quedar la nueva versión. La intención es que la landing venda con más fuerza el valor real del producto: no solo tener un sistema, sino ordenar una cartera de créditos, cobrar mejor, reducir mora mal calculada y dejar de depender de Excel, cuadernos o WhatsApp.

La versión actual está bien encaminada. Ya comunica el dolor correcto y tiene una estructura comercial razonable: problema, solución, funcionalidades, demo, firma y contratos, revista y llamado a la acción. La nueva versión no parte de cero: toma esa base y la vuelve más directa, más segmentada por rubro, más orientada a implementación y más preparada para SEO, buscadores y modelos de lenguaje.

## Objetivo comercial de la nueva versión

La web debe dejar de sonar solo descriptiva y pasar a vender una transformación clara:

> No solo te damos un sistema: te ayudamos a migrar tu Excel, ordenar tu cartera y dejar funcionando un circuito completo de créditos y cobranzas.

El cliente no compra solamente "control". Compra dejar de perder plata, tiempo y autoridad frente al deudor. Por eso la nueva versión va a insistir en resultados concretos:

- Saber quién debe.
- Saber cuánto debe.
- Saber desde cuándo debe.
- Saber qué se hizo para cobrar.
- Calcular mora con criterio claro.
- Tener contratos, cuotas, cobros y deudores en una sola plataforma.
- Reemplazar planillas, cuadernos, mensajes sueltos y comprobantes perdidos.

## Estado actual de la web

La home actual está implementada principalmente en `src/components/LandingPage.tsx`, con metadatos en `src/routes/index.tsx` y una ruta separada para la revista en `src/routes/revista.tsx`.

Hoy la landing tiene estas secciones:

1. Header con navegación.
2. Hero con video.
3. Problemas reales.
4. Solución y flujo del crédito.
5. Funcionalidades principales.
6. Demo visible.
7. Firma y contratos.
8. Revista del sistema.
9. Revista del sistema y material para evaluar la demo.
10. CTA final.
11. Footer.

Esto ya cubre buena parte del mensaje comercial, pero todavía deja oportunidades importantes:

- El hero es correcto, aunque le falta más tensión de pérdida económica.
- La página habla de negocios en general, pero no hace que cada rubro se reconozca rápidamente.
- Los módulos están bien explicados, pero todavía no se empaquetan como un servicio completo de implementación.
- La revista existe como apoyo visual, pero todavía no funciona como lead magnet.
- Falta una comparación simple de "antes vs después".
- Falta una sección de preguntas frecuentes pensada para conversión, SEO y LLMs.
- Faltan páginas específicas para búsquedas de intención alta.
- Hay muchos textos sin tildes en la landing actual, lo que baja la percepción de cuidado en una venta B2B.

## Nueva estructura propuesta

La nueva landing quedará ordenada así:

1. Hero fuerte.
2. Dolor: Excel, WhatsApp, mora y deudores.
3. Antes vs después.
4. Cómo funciona el sistema.
5. Funcionalidades principales.
6. Rubros ideales.
7. Servicios de implementación.
8. Portal del cliente.
9. Firma y contratos con aclaración legal.
10. Demo o video.
11. Revista del sistema como lead magnet.
12. Preguntas frecuentes.
13. CTA final.

Esta estructura mantiene lo que funciona, pero agrega las piezas que faltan para vender más fuerte.

## Cambios sección por sección

### 1. Hero fuerte

#### Cómo está hoy

El hero actual dice:

> Gestión de Créditos para vender en cuotas sin perder control

Y acompaña con:

> Ordena clientes, créditos, cuotas, cobranzas, mora y deudores en una sola aplicación para comercios, financieras chicas y negocios que hoy dependen de Excel, cuaderno o WhatsApp.

El mensaje es claro, pero todavía suena más descriptivo que urgente. Habla de control, pero no golpea lo suficiente sobre la pérdida de plata, la mora mal calculada y las cobranzas olvidadas.

#### Cómo va a quedar

Voy a convertir el hero en una promesa más comercial y directa.

Opción principal:

> Sistema de gestión de créditos para vender en cuotas sin perder control

Subtítulo:

> Ordená clientes, cuotas, contratos, cobranzas, mora y deudores en una sola plataforma. Ideal para comercios, financieras chicas, mueblerías y negocios que hoy dependen de Excel, cuadernos o WhatsApp.

Versión más agresiva para testear o usar como bloque alternativo:

> Dejá de perder plata por créditos mal controlados

Subtítulo:

> Gestión de Créditos te ayuda a saber quién debe, cuánto debe, desde cuándo y qué hacer para cobrar. Centralizá cartera, cuotas, mora, contratos y cobranzas en un solo sistema.

#### Valor buscado

El visitante debe entender en los primeros segundos que el problema no es "usar Excel", sino perder plata y tiempo por operar una cartera sin método. El hero tiene que conectar con una preocupación concreta: no saber exactamente cuánto hay prestado, cuánto venció y qué se debe cobrar esta semana.

#### CTA del hero

Voy a reemplazar o reforzar los CTAs actuales con opciones más orientadas a intención:

- Quiero ordenar mi cartera.
- Agendar demo gratuita.
- Ver cómo funciona.

## 2. Dolor: Excel, WhatsApp, mora y deudores

#### Cómo está hoy

La sección de problemas actuales ya tiene buenas tarjetas:

- Excel deja de alcanzar.
- WhatsApp mezcla todo.
- La mora se calcula a mano.
- La cobranza depende de memoria.

Los conceptos son correctos, pero los textos necesitan más fuerza comercial y tildes.

#### Cómo va a quedar

Voy a mantener los cuatro dolores, pero ajustar el copy para reforzar el costo económico y operativo.

Ejemplos de nuevo enfoque:

- Excel deja de alcanzar cuando la cartera crece y nadie sabe cuál archivo está actualizado.
- WhatsApp sirve para hablar, pero no para ordenar promesas de pago, comprobantes y reclamos.
- La mora calculada a mano genera errores, discusiones y pérdida de autoridad frente al cliente.
- La cobranza no puede depender de la memoria de una persona o de revisar chats uno por uno.

#### Valor buscado

Esta sección debe hacer que el dueño del negocio piense: "esto me pasa". Es una sección de identificación, no solo de explicación.

## 3. Antes vs después

#### Cómo está hoy

No existe una sección específica de comparación antes/después.

#### Cómo va a quedar

Voy a agregar una sección visual simple, probablemente en dos columnas.

Antes:

- Clientes en Excel.
- Cuotas calculadas a mano.
- Mora discutida.
- Contratos sueltos.
- WhatsApp lleno de comprobantes.
- Deudores difíciles de seguir.

Después:

- Cartera centralizada.
- Cuotas y vencimientos visibles.
- Mora con criterio claro.
- Contratos guardados junto al crédito.
- Portal del cliente.
- Reportes diarios para cobrar mejor.

#### Valor buscado

El visitante debe ver la transformación de manera rápida. Esta sección vende porque no habla de funcionalidades aisladas, sino del cambio operativo completo: de desorden a circuito de trabajo.

## 4. Cómo funciona el sistema

#### Cómo está hoy

La página ya tiene un flujo simple:

- Alta del cliente.
- Carga del crédito.
- Plan de cuotas.
- Registro de cobros.
- Mora y deudores.
- Seguimiento y reportes.

#### Cómo va a quedar

Voy a mantener ese flujo, pero lo voy a integrar mejor como explicación de proceso. La idea es que el cliente entienda que no está comprando pantallas sueltas, sino un circuito completo.

Nuevo enfoque sugerido:

1. Cargás el cliente.
2. Registrás el crédito o la venta financiada.
3. El sistema arma el plan de cuotas.
4. Registrás cobros y comprobantes.
5. Ves vencimientos, mora y deudores.
6. Seguís la cobranza con reportes y alertas.

#### Valor buscado

Esta sección debe bajar la ansiedad de adopción. El visitante tiene que sentir que el sistema acompaña un proceso natural, no que agrega complejidad.

## 5. Funcionalidades principales

#### Cómo está hoy

Ya existen tarjetas para:

- Clientes.
- Créditos.
- Cuotas.
- Cobros.
- Deudores.
- Mora.
- Alertas.
- Firma electrónica operativa.
- Portal del cliente.

También existe un modal con detalle, ejemplo práctico, qué resuelve y nota legal cuando corresponde.

#### Cómo va a quedar

Voy a conservar este bloque porque está bien planteado, pero voy a corregir tildes y ajustar los textos para que vendan resultados.

Ejemplos de mejora:

- "Clientes" no solo será una ficha, sino el lugar donde se ve historial, créditos activos, cuotas pagadas, deuda y datos de contacto.
- "Créditos" se explicará como operación respaldada, con condiciones claras, plan de pago y documentación asociada.
- "Cuotas" se enfocará en vencimientos, saldo real y próximas cobranzas.
- "Cobros" se enfocará en evitar comprobantes perdidos, cobros duplicados y confusiones.
- "Deudores" se enfocará en priorizar a quién llamar primero.
- "Mora" se enfocará en reglas consistentes para reducir discusiones.
- "Alertas" se enfocará en anticiparse a vencimientos.
- "Firma" conservará la aclaración legal responsable.
- "Portal del cliente" pasará a tener más peso comercial.

#### Valor buscado

Cada funcionalidad debe responder una pregunta concreta del comprador: "¿esto me ayuda a cobrar mejor?". El texto no debe sonar a listado técnico, sino a herramienta para ordenar la operación.

## 6. Rubros ideales

#### Cómo está hoy

La landing menciona comercios, financieras chicas y negocios, pero no hay una sección de rubros.

#### Cómo va a quedar

Voy a agregar una sección titulada:

> Pensado para negocios que venden en cuotas

Copy sugerido:

> No todos los negocios venden igual, pero todos tienen el mismo problema cuando la cartera crece: saber quién debe, cuánto debe, desde cuándo y qué se hizo para cobrar.

Rubros a mostrar:

- Mueblerías.
- Electrodomésticos.
- Financieras chicas.
- Agencias de motos.
- Mutuales.
- Comercios de barrio.
- Distribuidoras.
- Venta con pagaré o contrato.

#### Valor buscado

Esta sección ayuda a que el cliente se reconozca. También mejora SEO porque nombra rubros y contextos de búsqueda reales. Para buscadores y LLMs, deja más claro para quién sirve el sistema.

## 7. Servicios de implementación

#### Cómo está hoy

La web muestra módulos del sistema, pero todavía no vende la implementación completa.

#### Cómo va a quedar

Voy a agregar una sección titulada:

> No te damos solo el sistema: te ayudamos a ordenar tu cartera

Bloques propuestos:

### Migración desde Excel

Importamos clientes, créditos activos, cuotas pendientes y saldos iniciales para que no tengas que empezar de cero.

### Configuración de reglas

Definimos planes, intereses, mora, días de gracia, sucursales, vendedores y cobradores según tu forma de trabajar.

### Capacitación inicial

Enseñamos a tu equipo a cargar créditos, cobrar cuotas, revisar deudores y consultar reportes.

### Contratos y documentos

Preparamos plantillas PDF para contratos, recibos, estados de cuenta y comprobantes.

### Portal del cliente

Tus clientes pueden consultar cuotas, vencimientos, contrato y estado de cuenta desde el celular.

### Alertas y reportes

Tenés resúmenes de vencimientos, deudores, mora y cartera para tomar decisiones.

#### Valor buscado

Esta sección permite vender más caro y diferenciarse de un software barato. El mensaje es que ADEMA no entrega una herramienta vacía, sino un circuito acompañado: migración, configuración, capacitación, documentos y operación.

### Aclaración comercial sobre implementación y servicios adicionales

La comunicación debe ser clara: el plan mensual incluye capacitación inicial, soporte operativo y una bolsa mensual de ajustes, pero no incluye trabajos extraordinarios de carga, migración o capacitación adicional.

La frase recomendada para la web es:

> La capacitación inicial está incluida en el plan. Los trabajos adicionales como migración de datos, carga masiva, capacitación extra o ajustes fuera del alcance mensual se cotizan aparte a razón de USD 30 por hora de servicio.

Esto evita prometer una implementación ilimitada y al mismo tiempo transmite acompañamiento real. El cliente entiende que no se lo deja solo, pero también queda claro que trabajos especiales tienen costo aparte.

## Plan comercial Argentina

La nueva web debe presentar un plan simple y fuerte para salir al mercado argentino:

> Plan Argentina: $99.999 + IVA por mes

### Incluye

- Uso mensual del sistema Gestión de Créditos.
- Capacitación inicial incluida para que el equipo pueda empezar a cargar créditos, registrar cobros y revisar deudores.
- Dominio propio elegido por el cliente durante el primer año, sujeto a disponibilidad y para dominios estándar.
- Backups completos de datos todos los días a las 3 AM.
- Panel de autogestión del usuario con ADEMA para cargar tickets de soporte, servicios y mejoras.
- Hasta 5 horas mensuales de ajustes incluidos, no acumulables.
- Soporte operativo para consultas vinculadas al uso normal del sistema.

### No incluye y se cotiza aparte

- Importación o migración de datos desde Excel, planillas u otros sistemas.
- Cargas masivas complejas.
- Capacitación adicional posterior a la capacitación inicial incluida.
- Desarrollos a medida que excedan las 5 horas mensuales incluidas.
- Integraciones especiales con sistemas externos.
- Configuraciones extraordinarias fuera del alcance normal del plan.
- Consultoría documental, legal u operativa profunda.

### Valor de referencia para servicios adicionales

ADEMA Sistemas cobra USD 30 por hora de servicio. Ese valor aplica como referencia general para tareas adicionales como migración de datos, capacitación extra, carga masiva, desarrollos fuera de alcance o ajustes que superen las 5 horas mensuales incluidas.

### Cómo debe comunicarse en la landing

El precio no debe aparecer como "solo una app". Debe aparecer como un paquete integral:

> Sistema + capacitación inicial + dominio propio + backups diarios + panel de tickets + hasta 5 horas mensuales de ajustes incluidos.

La idea comercial es que el cliente perciba que paga por una operación acompañada, no por una herramienta vacía.

### Cuidado con la promesa de las 5 horas

Las 5 horas mensuales incluidas son un argumento fuerte de venta, pero deben comunicarse con límite claro:

- Son hasta 5 horas por mes.
- No son acumulables.
- Aplican a ajustes menores, soporte evolutivo y mejoras de bajo alcance.
- No reemplazan proyectos grandes, integraciones complejas ni migraciones de datos.

### Valor buscado

Este bloque ayuda a justificar el precio mensual y diferencia la oferta de un software barato. La promesa correcta es:

> Pagás un plan mensual para operar mejor tu cartera, con sistema, respaldo técnico, capacitación inicial, dominio, backups y acompañamiento mensual razonable.

## 8. Portal del cliente

#### Cómo está hoy

El portal aparece como una funcionalidad más dentro de las tarjetas.

#### Cómo va a quedar

Voy a darle una sección propia o un bloque destacado dentro de implementación/funcionalidades.

Mensajes clave:

- El cliente consulta cuotas y vencimientos sin pedir capturas.
- Puede revisar contrato y estado de cuenta.
- Reduce consultas repetidas por WhatsApp.
- Mejora la transparencia de la financiación.

#### Valor buscado

El portal no es solo comodidad: baja carga operativa, reduce mensajes manuales y mejora la percepción profesional del negocio.

## 9. Firma y contratos con aclaración legal

#### Cómo está hoy

La sección está bien cuidada. Aclara que no se presenta como Firma Digital bajo Ley 25.506 y que funciona como firma electrónica o aceptación operativa, según instrumentación.

#### Cómo va a quedar

Voy a conservar la prudencia legal, mejorar tildes y ordenar el texto para que siga transmitiendo seriedad sin asustar al usuario.

Mensaje base:

> La funcionalidad permite que el cliente acepte o firme contratos desde el celular y que el documento quede asociado al crédito. No se presenta como Firma Digital bajo la Ley 25.506. Debe entenderse como firma electrónica o aceptación operativa dentro del flujo del sistema, con la validez y los recaudos que correspondan según cada instrumentación.

También se mantendrá la recomendación:

> Para usos con exigencias legales específicas, conviene validar el circuito documental con asesoría profesional.

#### Valor buscado

La sección debe proteger comercial y legalmente. No promete más de lo que corresponde, pero muestra que el sistema ayuda a ordenar documentación y respaldo.

## 10. Demo o video

#### Cómo está hoy

El video aparece en el hero y también en la sección demo. El CTA dice "Solicitar demo personalizada".

#### Cómo va a quedar

Voy a mantener el video, pero orientar la sección a conversión.

Nuevo título sugerido:

> Mirá cómo se ordena una cartera de créditos

Copy sugerido:

> En pocos minutos vas a ver cómo se cargan clientes, créditos, cuotas, cobros y deudores. La demo sirve para entender si el sistema encaja con tu forma de vender en cuotas.

CTAs posibles:

- Agendar demo gratuita.
- Ver cómo funciona en una mueblería.
- Consultar implementación.

#### Valor buscado

La demo debe sentirse como el próximo paso natural. No solo "ver un video", sino comprobar si el circuito resuelve el problema real del negocio.

## 11. Revista del sistema como lead magnet

#### Cómo está hoy

La revista existe como folleto interactivo y se puede abrir en `/revista`.

#### Cómo va a quedar

Voy a transformar la sección en una oportunidad de captura de leads, sin quitar la opción de verla online.

Nuevo enfoque:

> Descargá la revista del sistema

Copy sugerido:

> Dejanos tu nombre, negocio y WhatsApp, y te enviamos la guía completa para ordenar una cartera de créditos.

CTAs:

- Ver revista online.
- Solicitar demo con asesoramiento.
- Recibir la guía por WhatsApp.

#### Valor buscado

La revista no debería sonar a material interno o de apoyo genérico. Debe presentarse como una herramienta clara para que el cliente evalúe pantallas, alcance funcional y próximos pasos antes de pedir una demo.

## 12. Preguntas frecuentes

#### Cómo está hoy

No hay una sección de FAQs en la landing.

#### Cómo va a quedar

Voy a agregar una sección de preguntas frecuentes con respuestas explícitas, pensadas para conversión, SEO y LLMs.

Preguntas propuestas:

- ¿Qué es Gestión de Créditos?
- ¿Para qué tipo de negocios sirve?
- ¿Reemplaza Excel?
- ¿Sirve para mueblerías?
- ¿Sirve para financieras chicas?
- ¿Puedo cargar créditos ya existentes?
- ¿El sistema calcula mora?
- ¿Permite cobrar cuotas?
- ¿Tiene portal para el cliente?
- ¿Genera contratos?
- ¿La firma es firma digital?
- ¿Se puede usar desde el celular?
- ¿Puedo tener varias sucursales?
- ¿Puedo instalarlo en servidor propio?
- ¿ADEMA migra mis datos actuales?

#### Valor buscado

Las FAQs responden dudas reales y aumentan la superficie semántica de la página. También ayudan a que buscadores y asistentes entiendan respuestas directas sobre el sistema.

## 13. CTA final más fuerte

#### Cómo está hoy

El CTA final dice:

> Ordena la cartera antes de que la cobranza te ordene el día

Y acompaña con:

> Si vendes en cuotas y el seguimiento depende de Excel, WhatsApp o una persona, Gestión de Créditos te ayuda a trabajar con más control y menos fricción.

Es correcto, pero se puede hacer más concreto.

#### Cómo va a quedar

Nuevo bloque final sugerido:

> ¿Hoy sabés exactamente cuánto tenés prestado, cuánto venció y cuánto deberías cobrar esta semana?

Copy:

> Si la respuesta depende de revisar un Excel, un cuaderno o varios chats de WhatsApp, es momento de ordenar tu cartera.

CTAs:

- Quiero ordenar mi cartera.
- Consultar implementación.

#### Valor buscado

El cierre tiene que llevar al visitante a una autoevaluación simple. Si no puede responder esa pregunta, necesita el sistema.

## Corrección de tildes y presentación del texto

La landing actual contiene muchos textos sin tildes. Voy a corregirlos porque en una venta B2B el cuidado del texto transmite seriedad.

Correcciones esperadas:

- Gestion → Gestión.
- Creditos → Créditos.
- credito → crédito.
- creditos → créditos.
- aplicacion → aplicación.
- Dia → Día.
- Mira → Mirá.
- acompana → acompaña.
- tambien → también.
- proximos → próximos.
- financiacion → financiación.
- informacion → información.
- practico → práctico.
- solucion → solución.
- especificas → específicas.
- asesoria → asesoría.
- esta → está, cuando corresponda como verbo.

También voy a ajustar frases SEO como:

> Software de gestión de créditos

Por una versión más clara:

> Software de gestión de créditos y cobranzas

## CTAs nuevos y ajustes de intención

### Cómo está hoy

La página usa CTAs como:

- Solicitar demo.
- Quiero ordenar mi cartera.
- Solicitar demo personalizada.
- Hablar con Adema Sistemas.

Están bien, pero se pueden segmentar mejor según el momento del visitante.

### Cómo va a quedar

Voy a usar llamados a la acción más concretos:

- Quiero ordenar mi cartera.
- Agendar demo gratuita.
- Ver cómo funciona.
- Ver cómo funciona en una mueblería.
- Migrar mi Excel al sistema.
- Consultar implementación.
- Recibir la revista por WhatsApp.

### Valor buscado

El usuario no siempre está listo para "comprar" o "pedir demo". Algunos necesitan ver el sistema, otros quieren migrar Excel, otros quieren resolver implementación. Los CTAs deben cubrir esas intenciones.

## Páginas SEO específicas

La home seguirá siendo la página principal, pero una sola página difícilmente rankee para todas las búsquedas de intención comercial. Por eso propongo crear páginas hijas.

### Páginas a crear

- `/sistema-para-mueblerias/`
- `/sistema-para-financieras/`
- `/sistema-para-cobranza-de-cuotas/`
- `/sistema-para-control-de-mora/`
- `/sistema-para-vender-en-cuotas/`
- `/sistema-para-reemplazar-excel-creditos/`
- `/portal-cliente-creditos/`
- `/contratos-creditos-firma-electronica/`
- `/software-gestion-creditos-argentina/`

### Estructura de cada página

Cada página debería incluir:

- Dolor del rubro o caso de uso.
- Para quién sirve.
- Funcionalidades relevantes.
- Beneficio económico.
- Capturas o video cuando estén disponibles.
- Preguntas frecuentes específicas.
- CTA a demo o implementación.

### Ejemplo para mueblerías

Título:

> Sistema de créditos para mueblerías que venden en cuotas

Copy:

> Controlá clientes, cuotas, vencimientos, mora y contratos en una sola plataforma. Dejá de depender de Excel, cuadernos y mensajes perdidos de WhatsApp.

### Valor buscado

Estas páginas atacan búsquedas con intención más clara. También permiten que la web sea entendida como una solución específica para rubros y problemas concretos, no como un software genérico.

## Cambios técnicos previstos

### Archivos principales a modificar

- `src/components/LandingPage.tsx`: reordenar secciones, ajustar copy, agregar bloques nuevos y corregir tildes.
- `src/routes/index.tsx`: actualizar title, description y metadatos Open Graph de la home.
- `src/styles.css`: ajustar estilos globales o utilidades si las nuevas secciones necesitan soporte visual adicional.

### Archivos o componentes nuevos posibles

Para mantener el componente principal ordenado, conviene extraer datos o componentes si el archivo crece demasiado:

- `src/components/landing/BeforeAfterSection.tsx`
- `src/components/landing/IndustriesSection.tsx`
- `src/components/landing/ImplementationServicesSection.tsx`
- `src/components/landing/FaqSection.tsx`
- `src/components/landing/SeoLandingPage.tsx`, si se reutiliza estructura para páginas hijas.
- `src/lib/landing-content.ts`, si conviene centralizar textos, rubros, FAQs y servicios.

No es obligatorio crear todos estos archivos. La decisión dependerá de cuán grande quede `LandingPage.tsx` después del primer pase.

### Rutas nuevas posibles

Si se implementan las páginas SEO, se crearán rutas en `src/routes/` siguiendo el patrón de TanStack Router ya usado por `index.tsx` y `revista.tsx`.

Rutas esperadas:

- `src/routes/sistema-para-mueblerias.tsx`
- `src/routes/sistema-para-financieras.tsx`
- `src/routes/sistema-para-cobranza-de-cuotas.tsx`
- `src/routes/sistema-para-control-de-mora.tsx`
- `src/routes/sistema-para-vender-en-cuotas.tsx`
- `src/routes/sistema-para-reemplazar-excel-creditos.tsx`
- `src/routes/portal-cliente-creditos.tsx`
- `src/routes/contratos-creditos-firma-electronica.tsx`
- `src/routes/software-gestion-creditos-argentina.tsx`

Cada ruta debería tener metadatos propios de SEO:

- `title` específico.
- `description` específica.
- `og:title`.
- `og:description`.

## Metadatos SEO de la home

### Cómo está hoy

Title actual:

> Gestión de Créditos · Sistema para controlar carteras y cuotas

Description actual:

> Software para ordenar clientes, créditos, cuotas, cobranzas, mora y deudores en comercios, financieras y negocios que venden en cuotas.

### Cómo va a quedar

Title sugerido:

> Software de gestión de créditos y cobranzas | Gestión de Créditos

Description sugerida:

> Sistema para vender en cuotas sin perder control. Ordená clientes, créditos, cuotas, cobros, mora, deudores, contratos y portal del cliente en una sola plataforma.

OG description sugerida:

> Dejá de depender de Excel, cuadernos y WhatsApp para controlar cartera, cuotas vencidas, mora y cobranzas.

## Enfoque visual

La estética actual usa un fondo oscuro, acentos cyan, ámbar y verde, tarjetas con borde y video destacado. La nueva versión puede conservar esa identidad, pero debe evitar que todo parezca una grilla de tarjetas iguales.

Cambios visuales esperados:

- Mantener el tono tecnológico y serio.
- Hacer el hero más fuerte y más orientado a conversión.
- Usar comparación antes/después con lectura rápida.
- Diferenciar rubros, servicios, FAQ y CTA final para que no parezcan la misma sección repetida.
- Mantener bordes redondeados moderados, consistentes con el diseño actual.
- Asegurar buena lectura en mobile.
- Evitar textos demasiado grandes dentro de paneles compactos.

## Mensajes que deben aparecer con claridad

La nueva web debe repetir, con distintas formas, estas ideas centrales:

- Vendé en cuotas sin perder control.
- Dejá de perder plata por créditos mal controlados.
- Sabé quién debe, cuánto debe y desde cuándo.
- Ordená clientes, cuotas, cobros, mora, contratos y deudores.
- Reemplazá Excel, cuadernos y WhatsApp como sistema de seguimiento.
- No solo instalamos el sistema: ayudamos a migrar datos y ordenar la cartera.
- Sirve para comercios, financieras chicas, mueblerías, agencias, mutuales y negocios que venden financiado.
- El portal del cliente reduce consultas y mejora la transparencia.
- La firma se comunica con alcance legal claro y responsable.

## Qué no conviene perder de la versión actual

Aunque la landing necesita más fuerza, hay elementos que conviene conservar:

- La estructura problema → solución → funcionalidades → demo → firma → revista → CTA.
- El video de demo visible.
- Las funcionalidades principales ya definidas.
- El modal con detalle de cada módulo.
- La aclaración legal responsable sobre firma electrónica.
- La revista interactiva como activo comercial.
- La identidad de Adema Sistemas.

## Orden recomendado de implementación

### Fase 1: Home comercial fuerte

1. Corregir tildes y copy general.
2. Reescribir hero.
3. Reforzar problemas.
4. Agregar antes vs después.
5. Agregar rubros ideales.
6. Agregar servicios de implementación.
7. Destacar portal del cliente.
8. Convertir revista en lead magnet.
9. Agregar FAQ.
10. Reescribir CTA final.
11. Actualizar metadatos SEO de la home.

### Fase 2: Páginas SEO

1. Crear estructura reusable para páginas de aterrizaje.
2. Crear página para mueblerías.
3. Crear página para financieras chicas.
4. Crear página para cobranza de cuotas.
5. Crear página para control de mora.
6. Crear página para vender en cuotas.
7. Crear página para reemplazar Excel.
8. Crear página para portal del cliente.
9. Crear página para contratos y firma electrónica.
10. Crear página para Argentina.

### Fase 3: Captura y seguimiento

1. Definir qué pasa cuando alguien pide la revista.
2. Definir si el CTA abre WhatsApp, formulario o URL externa.
3. Agregar campos mínimos: nombre, negocio y WhatsApp.
4. Medir clics principales si luego se agrega analítica.

## Checklist de aceptación

La nueva versión estará bien lograda si cumple esto:

- El primer pantallazo comunica pérdida de dinero, cartera desordenada y solución clara.
- El visitante entiende en menos de 10 segundos para qué sirve el sistema.
- Un dueño de mueblería, financiera chica o comercio de barrio se reconoce en la página.
- La web explica que ADEMA ayuda con migración, configuración y capacitación.
- La revista deja de ser solo folleto y pasa a tener función de captación.
- Las FAQs responden dudas reales sin vueltas.
- La firma electrónica mantiene una aclaración legal prudente.
- Los CTAs tienen intención concreta.
- Todos los textos visibles tienen tildes correctas.
- La home mantiene buena lectura en celular y escritorio.
- Los metadatos SEO reflejan "software de gestión de créditos y cobranzas".

## Resumen final

La web actual vende un sistema útil. La nueva versión debe vender una transformación más completa: pasar de una cartera dispersa, con Excel, WhatsApp, mora discutida y cobranzas olvidadas, a un circuito ordenado de clientes, créditos, cuotas, cobros, deudores, contratos, portal y reportes.

El diferencial más fuerte no será decir "tenemos módulos". Será decir:

> Te ayudamos a ordenar tu cartera completa: migramos tus datos, configuramos tus reglas, capacitamos a tu equipo y dejamos funcionando un sistema para vender en cuotas y cobrar con más claridad.
