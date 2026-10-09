document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // =========================
  // NAVBAR SCROLL EFFECT
  // =========================
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
  // =========================
  // MOBILE MENU - Unified for all pages
  // Supports both: .nav-toggle/#navMenu (home/404) and .navbar-toggler/#navbarNav (interior pages)
  // =========================
  function setupMobileMenu(toggleBtn, menuEl, isBootstrap = false) {
    if (!toggleBtn || !menuEl) return;
    const closeMenu = () => {
      menuEl.classList.remove('active');
      if (!isBootstrap) {
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        toggleBtn.setAttribute('aria-expanded', 'false');
        // Bootstrap collapse will handle the rest via data-bs-toggle removal
      }
    };
    const openMenu = () => {
      menuEl.classList.add('active');
      if (!isBootstrap) {
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
      } else {
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    };
    const toggleMenu = () => {
      const isOpen = menuEl.classList.contains('active');
      if (isOpen) closeMenu();
      else openMenu();
    };
    toggleBtn.addEventListener('click', toggleMenu);
    // Close on link click
    menuEl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    // Close on Escape
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuEl.classList.contains('active')) {
        closeMenu();
        toggleBtn.focus();
      }
    });
    // Close on click outside (for custom menu)
    if (!isBootstrap) {
      document.addEventListener('click', event => {
        if (menuEl.classList.contains('active') &&
            !menuEl.contains(event.target) &&
            !toggleBtn.contains(event.target)) {
          closeMenu();
        }
      });
    }
  }
  // Custom menu (home/404)
  setupMobileMenu(navToggle, navMenu, false);
  // Bootstrap navbar menu (interior pages) - detect and initialize
  const bsToggle = document.querySelector('.navbar-toggler');
  const bsMenu = document.getElementById('navbarNav');
  if (bsToggle && bsMenu) {
    // Remove Bootstrap's data-bs-toggle to prevent conflict; we handle it
    bsToggle.removeAttribute('data-bs-toggle');
    bsToggle.removeAttribute('data-bs-target');
    setupMobileMenu(bsToggle, bsMenu, true);
  }
  // =========================
  // GALLERY / GLIGHTBOX
  // =========================
  if (typeof GLightbox === 'function') {
    GLightbox({
      selector: '.glightbox'
    });
  }
  // =========================
  // SCROLL ANIMATIONS (IntersectionObserver)
  // =========================
  const animatedElements = document.querySelectorAll(
    '.about-image, .gallery-item, .faq-item, .contact-item, .trust-item, .service-card, .why-card, .process-step, .bento-item'
  );
  if (
    animatedElements.length &&
    !reducedMotion.matches &&
    'IntersectionObserver' in window
  ) {
    animatedElements.forEach(element => {
      element.classList.add('reveal');
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          entry.target.classList.add('is-visible');
        }
        if (!entry.isIntersecting && entry.intersectionRatio === 0) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: [0, 0.6]
    });
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  // =========================
  // SMOOTH SCROLL (respects prefers-reduced-motion)
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        return;
      }
      const target = document.querySelector(href);
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
        block: 'start'
      });
    });
  });
  // =========================
  // FAQ ACCORDION (single open)
  // =========================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) {
        return;
      }
      faqItems.forEach(other => {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });
  // =========================
  // GA4 EVENT TRACKING
  // =========================
  // Clics en teléfono
  document.querySelectorAll('a[href^="tel:"]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'click_phone', { method: 'tel', page_path: window.location.pathname });
      }
    });
  });
  // Clics en email
  document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'click_email', { method: 'mailto', page_path: window.location.pathname });
      }
    });
  });
  // Envío de formulario (FormSubmit)
  document.querySelectorAll('form[action*="formsubmit"]').forEach(form => {
    form.addEventListener('submit', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { form_location: window.location.pathname });
      }
    });
  });
  // Clics en CTA "Devis gratuit" (anclas a #contacto)
  document.querySelectorAll('a[href="#contacto"], a[href$="#contacto"], a[href="/#contacto"]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'cta_devis_click', { page_path: window.location.pathname });
      }
    });
  });
  // Profundidad de scroll 90% (una sola vez por página)
  let maxScrollPct = 0;
  const scrollHandler = () => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const pct = Math.round((window.scrollY / scrollHeight) * 100);
    if (pct > maxScrollPct) maxScrollPct = pct;
    if (maxScrollPct >= 90) {
      if (typeof gtag === 'function') {
        gtag('event', 'scroll_depth_90', { page_path: window.location.pathname });
      }
      window.removeEventListener('scroll', scrollHandler);
    }
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
  // =========================
  // FLOATING ACTION BUTTONS (FAB) - Show on scroll
  // =========================
  const fabPhone = document.querySelector('.fab--phone');
  const fabEmail = document.querySelector('.fab--email');
  function handleFabVisibility() {
    const show = window.scrollY > 200;
    if (fabPhone) fabPhone.classList.toggle('is-visible', show);
    if (fabEmail) fabEmail.classList.toggle('is-visible', show);
  }
  window.addEventListener('scroll', handleFabVisibility, { passive: true });
  // Initial check
  handleFabVisibility();
  // =========================
  // COOKIE CONSENT
  // =========================
  const COOKIE_CONSENT_KEY = 'relief_cookie_consent';
  const COOKIE_EXPIRY_DAYS = 365;
  function getCookieConsent() {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        // Check expiry
        if (data.expiry && Date.now() < data.expiry) {
          return data.consent; // true = accepted, false = rejected
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
    return null; // No valid consent stored
  }
  function setCookieConsent(consent) {
    const expiry = Date.now() + COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ consent, expiry }));
  }
  function loadGA4() {
    if (window.gtagLoaded) return;
    window.gtagLoaded = true;
    // Load GTM script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3VBMWRMRQ4';
    document.head.appendChild(script);
    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', 'G-3VBMWRMRQ4');
  }
  function showCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      // Small delay to allow page to render, then show
      requestAnimationFrame(() => {
        banner.classList.add('is-visible');
      });
    }
  }
  function hideCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('is-visible');
    }
  }
  function handleCookieAccept() {
    setCookieConsent(true);
    hideCookieBanner();
    loadGA4();
  }
  function handleCookieReject() {
    setCookieConsent(false);
    hideCookieBanner();
    // GA4 not loaded
  }
  function openCookieSettings() {
    showCookieBanner();
  }
  // Initialize cookie consent
  const consent = getCookieConsent();
  if (consent === true) {
    // Already accepted - load GA4 immediately
    loadGA4();
  } else if (consent === null) {
    // No consent yet - show banner after short delay
    setTimeout(showCookieBanner, 1000);
  }
  // If consent === false, do nothing (GA4 not loaded)
  // Event listeners for banner buttons
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-cookie-accept]')) {
      handleCookieAccept();
    } else if (e.target.matches('[data-cookie-reject]')) {
      handleCookieReject();
    }
  });
  // Cookie settings link (in banner and footer)
  const settingsLinks = document.querySelectorAll('#cookieSettingsLink, .cookie-settings-link');
  settingsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openCookieSettings();
    });
  });
});