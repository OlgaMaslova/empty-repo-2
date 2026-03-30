/**
 * script.js — Progressive enhancement for The Rustic Table food blog.
 *
 * Features (all degrade gracefully when JS is unavailable):
 *   1. no-js → js class swap       (unlocks hamburger + collapsible nav CSS)
 *   2. Dynamic copyright year       (keeps footer accurate without editing HTML)
 *   3. Hamburger nav toggle         (mobile drawer open/close + aria-expanded)
 *   4. Scroll-aware sticky header   (drop-shadow on scroll via .scrolled class)
 *   5. Smooth-scroll + nav close    (anchor links scroll smoothly; closes drawer)
 */

// ── 1. No-JS → JS class swap ─────────────────────────────────────────────────
// Runs immediately (before DOMContentLoaded) so CSS scoped to `.js` activates
// before first paint and the hamburger layout doesn't flash in.
document.documentElement.classList.replace('no-js', 'js');

// Everything else waits for the DOM — belt-and-suspenders alongside `defer`.
document.addEventListener('DOMContentLoaded', () => {

  // ── 2. Dynamic copyright year ───────────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ── 3. Hamburger nav toggle ─────────────────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  const header = document.querySelector('.site-header');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ── 4. Scroll-aware header ──────────────────────────────────────────────────
  if (header) {
    window.addEventListener(
      'scroll',
      () => { header.classList.toggle('scrolled', window.scrollY > 10); },
      { passive: true }
    );
  }

  // ── 5. Smooth-scroll + mobile nav close ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close the mobile nav drawer if it's open
      if (nav) {
        nav.classList.remove('is-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

});
