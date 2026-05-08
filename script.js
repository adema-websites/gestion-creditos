/* =========================================================
   Gestión de Créditos · Adema Sistemas
   Interacciones de la landing
========================================================= */

(() => {
  'use strict';

  /* ----- Año dinámico en footer ----- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Toggle menú mobile ----- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  /* ----- Reveal on scroll ----- */
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('is-visible'));
  }

  /* ----- Modales de funcionalidades ----- */
  const modalLayer = document.querySelector('[data-modal-layer]');
  const modalTriggers = document.querySelectorAll('[data-modal]');
  let activeModal = null;
  let lastFocused = null;

  const getFocusable = (root) => Array.from(root.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  )).filter(el => !el.hasAttribute('hidden'));

  const closeModal = () => {
    if (!modalLayer || !activeModal) return;
    activeModal.hidden = true;
    modalLayer.hidden = true;
    document.body.classList.remove('modal-open');
    activeModal = null;
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  };

  const openModal = (id) => {
    if (!modalLayer) return;
    const modal = document.getElementById(`modal-${id}`);
    if (!modal) return;

    if (activeModal) activeModal.hidden = true;
    lastFocused = document.activeElement;
    activeModal = modal;
    modalLayer.hidden = false;
    modal.hidden = false;
    document.body.classList.add('modal-open');

    const focusable = getFocusable(modal);
    if (focusable.length) focusable[0].focus();
  };

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.modal));
  });

  if (modalLayer) {
    modalLayer.addEventListener('click', (event) => {
      if (event.target.closest('[data-modal-close]')) closeModal();
    });

    document.addEventListener('keydown', (event) => {
      if (!activeModal) return;

      if (event.key === 'Escape') {
        closeModal();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = getFocusable(activeModal);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ----- Header: leve sombra al hacer scroll ----- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 10px 30px -15px rgba(0,0,0,.6)'
        : 'none';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
