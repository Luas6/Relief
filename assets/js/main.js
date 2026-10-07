document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');


  // =========================
  // NAVBAR
  // =========================

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }


  // =========================
  // MOBILE MENU
  // =========================

  if (navToggle && navMenu) {

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');

      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });


    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });


    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
        navToggle.focus();
      }
    });


    function closeMenu() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }


  // =========================
  // GALLERY
  // =========================

  if (typeof GLightbox === 'function') {
    GLightbox({
      selector: '.glightbox'
    });
  }


  // =========================
  // SCROLL ANIMATIONS
  // =========================

  const animatedElements = document.querySelectorAll(
    '.about-image, .gallery-item, .faq-item, .contact-item, .trust-item'
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

        // Empieza la animación cuando ya ha entrado bastante en pantalla
        if (entry.intersectionRatio >= 0.8) {
          entry.target.classList.add('is-visible');
        }

        // Solo reseteamos cuando ha salido completamente
        if (!entry.isIntersecting) {
          entry.target.classList.remove('is-visible');
        }

      });

    }, {
      threshold: [0, 0.8]
    });

    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }


  // =========================
  // SMOOTH SCROLL
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
  // FAQ
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

});