(() => {
  'use strict';

  const form = document.getElementById('creditSimulator');
  if (!form) return;

  const output = {
    amount: document.getElementById('simImporte'),
    installment: document.getElementById('simCuota'),
    total: document.getElementById('simTotal'),
    interest: document.getElementById('simInteres'),
    schedule: document.getElementById('simSchedule'),
    endpoint: document.getElementById('simEndpoint'),
    openLink: document.getElementById('openSignatureLink'),
    pdfBtn: document.getElementById('simPdfBtn'),
    signatureBtn: document.getElementById('simSignatureBtn'),
    fixedDayField: document.getElementById('fixedDayField')
  };

  const dateTimeFormat = new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  let currentSimulation = null;

  const field = (name) => form.elements[name];
  const toNumber = (value, fallback = 0) => {
    const parsed = Number.parseFloat(String(value || '').replace(',', '.'));
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));

  const todayAtNoon = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0, 0);
  };

  const parseInputDate = (value) => {
    if (!value) return null;
    const parts = String(value).split('-').map(Number);
    if (parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return null;
    return new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0, 0);
  };

  const daysInMonth = (year, monthIndex) => new Date(year, monthIndex + 1, 0).getDate();

  const addDays = (date, days) => {
    const next = new Date(date.getTime());
    next.setDate(next.getDate() + days);
    return next;
  };

  const addMonths = (date, months) => {
    const rawMonth = date.getMonth() + months;
    const year = date.getFullYear() + Math.floor(rawMonth / 12);
    const month = ((rawMonth % 12) + 12) % 12;
    const day = Math.min(date.getDate(), daysInMonth(year, month));
    return new Date(year, month, day, 12, 0, 0, 0);
  };

  const withFixedDay = (date, day) => {
    const safeDay = Math.min(day, daysInMonth(date.getFullYear(), date.getMonth()));
    return new Date(date.getFullYear(), date.getMonth(), safeDay, 12, 0, 0, 0);
  };

  const formatDate = (date) => dateTimeFormat.format(date);
  const makeTimestamp = () => {
    const now = new Date();
    const pad = (value) => String(value).padStart(2, '0');
    return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  };

  const formatMoney = (value, sign = '$') => {
    const amount = Number.isFinite(value) ? value : 0;
    return `${sign} ${amount.toLocaleString('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const getPeriodLabel = (periodicity) => {
    if (periodicity === 'Mensual Dia Fijo') return 'Mensual con Día Fijo';
    return periodicity;
  };

  const calculateDueDate = ({ startDate, firstDueDate, periodicity, installmentNumber, fixedDay }) => {
    let baseDate = startDate;
    let offset = installmentNumber;

    if (firstDueDate) {
      if (installmentNumber === 1) return new Date(firstDueDate.getTime());
      baseDate = firstDueDate;
      offset = installmentNumber - 1;
    }

    if (periodicity === 'Diario') return addDays(baseDate, offset);
    if (periodicity === 'Semanal') return addDays(baseDate, offset * 7);
    if (periodicity === 'Quincenal') return addDays(baseDate, offset * 14);
    if (periodicity === 'Mensual Dia Fijo') return withFixedDay(addMonths(baseDate, offset), fixedDay);
    return addMonths(baseDate, offset);
  };

  const makeToken = () => {
    if (window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID().slice(0, 13).toUpperCase();
    }
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`.toUpperCase();
  };

  const buildEndpoint = (simulation) => {
    const params = new URLSearchParams({
      contrato: simulation.contractId,
      token: simulation.token,
      cliente: simulation.client,
      monto: Math.round(simulation.amount),
      cuotas: simulation.installments,
      cuota: Math.round(simulation.installmentAmount),
      total: Math.round(simulation.totalToPay),
      primerVencimiento: formatDate(simulation.schedule[0].dueDate)
    });
    return `firma-demo.html?${params.toString()}`;
  };

  const collectValues = () => {
    const periodicity = String(field('periodicidad').value || 'Mensual');
    const installments = clamp(Math.round(toNumber(field('cuotas').value, 1)), 1, 60);
    const fixedDay = clamp(Math.round(toNumber(field('diaVencimientoFijo').value, 1)), 1, 31);

    return {
      client: String(field('cliente').value || 'Cliente demo').trim() || 'Cliente demo',
      amount: Math.max(toNumber(field('monto').value, 0), 0),
      installments,
      periodicity,
      interestRate: Math.max(toNumber(field('interes').value, 0), 0),
      currencySign: String(field('moneda').value || '$'),
      firstDueDate: parseInputDate(field('primerVencimiento').value),
      fixedDay,
      collectFirstInstallmentToday: Boolean(field('cobrarPrimeraCuotaHoy').checked),
      firstInstallmentPaymentMethod: String(field('medioPagoPrimeraCuota').value || 'Efectivo')
    };
  };

  const calculate = () => {
    const values = collectValues();
    const interestTotal = values.amount * (values.interestRate / 100);
    const totalToPay = values.amount + interestTotal;
    const installmentAmount = values.installments ? totalToPay / values.installments : 0;
    const startDate = todayAtNoon();

    const schedule = Array.from({ length: values.installments }, (_, index) => {
      const installmentNumber = index + 1;
      const paid = values.collectFirstInstallmentToday && installmentNumber === 1;
      return {
        number: installmentNumber,
        dueDate: calculateDueDate({
          startDate,
          firstDueDate: values.firstDueDate,
          periodicity: values.periodicity,
          installmentNumber,
          fixedDay: values.fixedDay
        }),
        amount: installmentAmount,
        state: paid ? 'Pagada' : 'Pendiente',
        paidAt: paid ? startDate : null
      };
    });

    currentSimulation = {
      ...values,
      startDate,
      periodLabel: getPeriodLabel(values.periodicity),
      interestTotal,
      totalToPay,
      installmentAmount,
      schedule,
      contractId: `GC-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`,
      token: makeToken()
    };

    render(currentSimulation);
    return currentSimulation;
  };

  const render = (simulation) => {
    output.fixedDayField.classList.toggle('is-hidden', simulation.periodicity !== 'Mensual Dia Fijo');
    output.amount.textContent = formatMoney(simulation.amount, simulation.currencySign);
    output.installment.textContent = formatMoney(simulation.installmentAmount, simulation.currencySign);
    output.total.textContent = formatMoney(simulation.totalToPay, simulation.currencySign);
    output.interest.textContent = formatMoney(simulation.interestTotal, simulation.currencySign);
    output.schedule.innerHTML = simulation.schedule.map((row) => `
      <tr>
        <td>${row.number}/${simulation.installments}</td>
        <td>${formatDate(row.dueDate)}</td>
        <td><strong>${formatMoney(row.amount, simulation.currencySign)}</strong></td>
        <td>${row.state}</td>
      </tr>
    `).join('');

    const endpoint = buildEndpoint(simulation);
    output.endpoint.textContent = endpoint;
    output.openLink.href = endpoint;
  };

  const addPdfHeader = (pdf, simulation) => {
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(65, 118, 144);
    pdf.setFontSize(18);
    pdf.text('SIMULACIÓN DE CRÉDITO', 105, 22, { align: 'center' });

    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(30, 41, 59);
    pdf.setFontSize(10);
    pdf.text(`Cliente: ${simulation.client}`, 20, 36);
    pdf.text(`Fecha de Simulación: ${formatDate(new Date())} ${new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`, 20, 42);
  };

  const makePdfRows = (simulation) => ([
    ['Importe Solicitado', formatMoney(simulation.amount, simulation.currencySign)],
    ['Cantidad de Cuotas', String(simulation.installments)],
    ['Periodicidad', simulation.periodicity === 'Mensual Dia Fijo' ? `${simulation.periodLabel} (${simulation.fixedDay})` : simulation.periodLabel],
    ['1er Vencimiento', simulation.firstDueDate ? formatDate(simulation.firstDueDate) : 'Automático'],
    ['Interés (%)', `${simulation.interestRate.toFixed(2)}%`],
    ['Interés Total', formatMoney(simulation.interestTotal, simulation.currencySign)],
    ['Total a Pagar', formatMoney(simulation.totalToPay, simulation.currencySign)],
    ['Valor por Cuota', formatMoney(simulation.installmentAmount, simulation.currencySign)],
    ['Cobrar 1ra Cuota Hoy', simulation.collectFirstInstallmentToday ? 'Sí' : 'No'],
    ['Medio Pago 1ra Cuota', simulation.collectFirstInstallmentToday ? simulation.firstInstallmentPaymentMethod : 'N/A']
  ]);

  const downloadPdf = () => {
    const simulation = currentSimulation || calculate();
    const jsPdfApi = window.jspdf && window.jspdf.jsPDF;

    if (!jsPdfApi || !window.jspdf || !jsPdfApi.API.autoTable) {
      openPrintablePdfFallback(simulation);
      return;
    }

    const pdf = new jsPdfApi({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    addPdfHeader(pdf, simulation);

    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 82, 130);
    pdf.setFontSize(14);
    pdf.text('Resumen del Crédito', 20, 56);

    pdf.autoTable({
      startY: 62,
      head: [['Concepto', 'Valor']],
      body: makePdfRows(simulation),
      margin: { left: 20, right: 20 },
      tableWidth: 150,
      styles: { font: 'helvetica', fontSize: 10, cellPadding: 3, lineColor: [128, 128, 128], lineWidth: 0.25, overflow: 'linebreak' },
      headStyles: { fillColor: [65, 118, 144], textColor: [245, 245, 245], fontStyle: 'bold', halign: 'left' },
      bodyStyles: { fillColor: [245, 245, 220], textColor: [17, 24, 39] },
      columnStyles: { 0: { fontStyle: 'bold', cellWidth: 85 }, 1: { halign: 'right', cellWidth: 65 } },
      theme: 'grid'
    });

    const scheduleStart = pdf.lastAutoTable.finalY + 12;
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 82, 130);
    pdf.setFontSize(14);
    pdf.text('Cronograma de Pagos', 20, scheduleStart);

    pdf.autoTable({
      startY: scheduleStart + 6,
      head: [['Cuota', 'Fecha Vencimiento', 'Monto']],
      body: simulation.schedule.map((row) => [`Cuota ${row.number}`, formatDate(row.dueDate), formatMoney(row.amount, simulation.currencySign)]),
      margin: { left: 20, right: 20 },
      tableWidth: 150,
      styles: { font: 'helvetica', fontSize: 9, cellPadding: 3, lineColor: [128, 128, 128], lineWidth: 0.25, halign: 'center', overflow: 'linebreak' },
      headStyles: { fillColor: [65, 118, 144], textColor: [245, 245, 245], fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [211, 211, 211] },
      bodyStyles: { fillColor: [255, 255, 255], textColor: [17, 24, 39] },
      columnStyles: { 0: { cellWidth: 45 }, 1: { cellWidth: 60 }, 2: { cellWidth: 45 } },
      theme: 'grid'
    });

    const noteY = Math.min((pdf.lastAutoTable && pdf.lastAutoTable.finalY ? pdf.lastAutoTable.finalY : 245) + 12, 274);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(55, 65, 81);
    pdf.setFontSize(10);
    const note = 'NOTA: Esta es una simulación. Los valores pueden variar según las condiciones finales del crédito. Este documento no constituye una oferta vinculante ni un compromiso de crédito.';
    pdf.text(pdf.splitTextToSize(note, 170), 20, noteY);

    pdf.save(`simulacion_credito_${makeTimestamp()}.pdf`);
  };

  const openPrintablePdfFallback = (simulation) => {
    const rows = simulation.schedule.map((row) => `
      <tr>
        <td>Cuota ${row.number}</td>
        <td>${formatDate(row.dueDate)}</td>
        <td>${formatMoney(row.amount, simulation.currencySign)}</td>
      </tr>
    `).join('');
    const popup = window.open('', '_blank');
    if (!popup) return;

    popup.document.write(`<!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Simulación ${escapeHtml(simulation.contractId)}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; margin: 32px; }
          button { margin-bottom: 20px; padding: 10px 14px; }
          h1 { color: #417690; font-size: 24px; text-align: center; }
          h2 { color: #2c5282; font-size: 18px; margin-top: 26px; }
          table { border-collapse: collapse; width: 100%; margin-top: 12px; }
          th { background: #417690; color: #f5f5f5; }
          th, td { border: 1px solid #808080; padding: 9px; }
          .summary td { background: #f5f5dc; }
          .summary td:first-child { font-weight: 700; }
          .summary td:last-child { text-align: right; }
          .note { margin-top: 22px; font-style: italic; }
          @media print { button { display: none; } body { margin: 20mm; } }
        </style>
      </head>
      <body>
        <button onclick="window.print()">Guardar como PDF</button>
        <h1>SIMULACIÓN DE CRÉDITO</h1>
        <p><strong>Cliente:</strong> ${escapeHtml(simulation.client)}</p>
        <p><strong>Fecha de Simulación:</strong> ${formatDate(new Date())}</p>
        <h2>Resumen del Crédito</h2>
        <table class="summary"><tbody>${makePdfRows(simulation).map(([label, value]) => `<tr><td>${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`).join('')}</tbody></table>
        <h2>Cronograma de Pagos</h2>
        <table><thead><tr><th>Cuota</th><th>Fecha Vencimiento</th><th>Monto</th></tr></thead><tbody>${rows}</tbody></table>
        <p class="note"><strong>NOTA:</strong> Esta es una simulación. Los valores pueden variar según las condiciones finales del crédito. Este documento no constituye una oferta vinculante ni un compromiso de crédito.</p>
      </body>
      </html>`);
    popup.document.close();
    popup.focus();
  };

  form.addEventListener('input', calculate);
  form.addEventListener('change', calculate);
  output.pdfBtn.addEventListener('click', downloadPdf);
  output.signatureBtn.addEventListener('click', () => {
    const simulation = currentSimulation || calculate();
    const endpoint = buildEndpoint(simulation);
    output.endpoint.textContent = endpoint;
    output.openLink.href = endpoint;
    window.open(endpoint, '_blank', 'noopener');
  });

  calculate();
})();