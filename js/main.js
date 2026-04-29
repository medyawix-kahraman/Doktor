/* ============================================
   MAIN.JS — All Site JavaScript
   Op. Dr. Erol Bahtiyar Website
   ============================================ */

'use strict';

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', function () {
  initMobileNav();
  initScrollReveal();
  initActiveNav();
  initFAQ();
  initContactForm();
  initStickyNav();
});

/* ============================================
   MOBILE NAVIGATION
   ============================================ */
function initMobileNav() {
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');
  const overlay    = document.getElementById('overlay');
  const closeBtn   = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  if (!hamburger || !mobileNav || !overlay) return;

  function openMenu() {
    mobileNav.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ============================================
   SCROLL REVEAL (Intersection Observer)
   ============================================ */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (!targets.length) return;

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(function (el) { observer.observe(el); });
}

/* ============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================ */
function initActiveNav() {
  const sections  = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    let current = '';
    const scrollY = window.scrollY;

    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Run once on load
}

/* ============================================
   STICKY NAV SHADOW ON SCROLL
   ============================================ */
function initStickyNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
    } else {
      nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
    }
  }, { passive: true });
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-item__btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all items
      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove('open');
        const otherBtn = otherItem.querySelector('.faq-item__btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ============================================
   CONTACT FORM — WhatsApp Integration
   ============================================ */
function initContactForm() {
  const submitBtn = document.getElementById('submitBtn');
  if (!submitBtn) return;

  submitBtn.addEventListener('click', function () {
    const nameInput    = document.getElementById('name');
    const phoneInput   = document.getElementById('phone');
    const serviceInput = document.getElementById('service');
    const messageInput = document.getElementById('message');

    const name    = nameInput    ? nameInput.value.trim()    : '';
    const phone   = phoneInput   ? phoneInput.value.trim()   : '';
    const service = serviceInput ? serviceInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Basic validation
    if (!name) {
      showFormError(nameInput, 'Ad soyad zorunludur.');
      return;
    }

    if (!phone || phone.length < 10) {
      showFormError(phoneInput, 'Geçerli bir telefon numarası giriniz.');
      return;
    }

    // Build WhatsApp message
    let text = 'Merhaba, web sitesinden randevu almak istiyorum.';
    text += '\n\n*Ad Soyad:* ' + name;
    text += '\n*Telefon:* ' + phone;
    if (service) text += '\n*İlgilendiği Tedavi:* ' + service;
    if (message) text += '\n*Mesaj:* ' + message;
    text += '\n\n_opdrerolbahtiyar.com üzerinden gönderildi._';

    const waURL = 'https://api.whatsapp.com/send/?phone=905304023235&text=' + encodeURIComponent(text);
    window.open(waURL, '_blank', 'noopener,noreferrer');

    // Success feedback
    showFormSuccess(submitBtn);
  });
}

function showFormError(input, message) {
  if (!input) return;
  input.style.borderColor = '#dc2626';
  input.focus();

  // Reset after 2 seconds
  setTimeout(function () {
    input.style.borderColor = '';
  }, 2000);

  // Show toast
  showToast(message, 'error');
}

function showFormSuccess(btn) {
  const original = btn.innerHTML;
  btn.innerHTML = '✓ Gönderildi! WhatsApp açılıyor...';
  btn.style.background = '#16a34a';
  btn.disabled = true;

  setTimeout(function () {
    btn.innerHTML = original;
    btn.style.background = '';
    btn.disabled = false;
  }, 3500);
}

/* ============================================
   TOAST NOTIFICATION
   ============================================ */
function showToast(message, type) {
  // Remove existing toast
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'polite');

  toast.style.cssText = [
    'position:fixed',
    'bottom:100px',
    'right:24px',
    'z-index:9999',
    'background:' + (type === 'error' ? '#dc2626' : '#16a34a'),
    'color:white',
    'padding:12px 20px',
    'border-radius:8px',
    'font-size:14px',
    'font-weight:500',
    'font-family:Inter,sans-serif',
    'box-shadow:0 4px 16px rgba(0,0,0,0.2)',
    'transition:opacity 0.3s ease',
    'max-width:300px',
    'line-height:1.4'
  ].join(';');

  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(function () {
    toast.style.opacity = '0';
    setTimeout(function () { toast.remove(); }, 300);
  }, 3000);
}

/* ============================================
   SMOOTH SCROLL for anchor links
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = document.querySelector('.nav') ? document.querySelector('.nav').offsetHeight : 70;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  });
});

/* ============================================
   LAZY LOAD IMAGES (Fallback for older browsers)
   ============================================ */
(function () {
  if ('loading' in HTMLImageElement.prototype) return; // Native lazy load supported

  const images = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  images.forEach(function (img) { observer.observe(img); });
})();
