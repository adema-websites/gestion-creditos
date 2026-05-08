(() => {
  'use strict';

  const canvas = document.getElementById('signatureCanvas');
  if (!canvas) return;

  const params = new URLSearchParams(window.location.search);
  const currency = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  });

  const values = {
    contractId: params.get('contrato') || 'GC-DEMO',
    token: params.get('token') || 'TOKEN-DEMO',
    client: params.get('cliente') || 'Cliente demo',
    amount: Number(params.get('monto') || 0),
    installments: Number(params.get('cuotas') || 0),
    installment: Number(params.get('cuota') || 0),
    total: Number(params.get('total') || 0),
    firstDueDate: params.get('primerVencimiento') || '-'
  };

  const el = (id) => document.getElementById(id);
  const context = canvas.getContext('2d');
  let drawing = false;
  let hasSignature = false;

  const setText = (id, text) => {
    const target = el(id);
    if (target) target.textContent = text;
  };

  const initContract = () => {
    setText('contractId', values.contractId);
    setText('contractClient', values.client);
    setText('contractAmount', currency.format(values.amount));
    setText('contractInstallment', currency.format(values.installment));
    setText('contractInstallments', String(values.installments));
    setText('contractTotal', currency.format(values.total));
    setText('evidenceToken', values.token);
    setText('endpointPreview', window.location.href);
  };

  const prepareCanvas = () => {
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = '#03161E';
    context.fillStyle = '#EAF6FA';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#6E869A';
    context.font = '18px Inter, Arial, sans-serif';
    context.fillText('Firme dentro de este recuadro', 28, canvas.height - 28);
  };

  const pointerPosition = (event) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDraw = (event) => {
    event.preventDefault();
    drawing = true;
    hasSignature = true;
    const point = pointerPosition(event);
    context.beginPath();
    context.moveTo(point.x, point.y);
    if (event.pointerId !== undefined && canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
  };

  const draw = (event) => {
    if (!drawing) return;
    event.preventDefault();
    const point = pointerPosition(event);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const stopDraw = () => {
    drawing = false;
  };

  const hashText = async (text) => {
    if (window.crypto && window.crypto.subtle) {
      const buffer = new TextEncoder().encode(text);
      const digest = await window.crypto.subtle.digest('SHA-256', buffer);
      return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
    }
    let hash = 0;
    for (let index = 0; index < text.length; index += 1) {
      hash = ((hash << 5) - hash) + text.charCodeAt(index);
      hash |= 0;
    }
    return `demo-${Math.abs(hash).toString(16)}`;
  };

  const confirmSignature = async () => {
    const status = el('signStatus');
    status.classList.remove('error');
    if (!hasSignature) {
      status.classList.add('error');
      status.textContent = 'Dibujá la firma antes de confirmar.';
      return;
    }

    const signedAt = new Date();
    const signerDoc = el('signerDoc').value.trim() || 'Sin DNI informado';
    const signatureData = canvas.toDataURL('image/png');
    const device = `${navigator.platform || 'Dispositivo'} · ${navigator.language || 'Idioma no informado'} · ${screen.width}x${screen.height}`;
    const payload = JSON.stringify({ ...values, signerDoc, signedAt: signedAt.toISOString(), device, signatureData });
    const digest = await hashText(payload);

    setText('evidenceTime', signedAt.toLocaleString('es-AR'));
    setText('evidenceDevice', device);
    setText('evidenceHash', digest);
    setText('evidenceIp', 'Demo local: en producción se registra IP real desde el servidor');

    const firstEvidence = document.querySelector('.evidence-item strong');
    if (firstEvidence) firstEvidence.textContent = 'Firmado y sellado';
    status.textContent = 'Firma registrada. La constancia de evidencia ya está lista.';
  };

  initContract();
  prepareCanvas();

  canvas.addEventListener('pointerdown', startDraw);
  canvas.addEventListener('pointermove', draw);
  canvas.addEventListener('pointerup', stopDraw);
  canvas.addEventListener('pointercancel', stopDraw);
  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  window.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);
  document.getElementById('clearSignature').addEventListener('click', () => {
    hasSignature = false;
    prepareCanvas();
    const status = el('signStatus');
    status.classList.remove('error');
    status.textContent = 'Firma borrada.';
  });
  document.getElementById('confirmSignature').addEventListener('click', confirmSignature);
  document.getElementById('printEvidence').addEventListener('click', () => window.print());
})();