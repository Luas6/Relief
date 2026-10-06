// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  const isOpen = navMenu.classList.contains('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
  }
});

if (typeof GLightbox === 'function') GLightbox({selector: '.glightbox'});

// Progressive enhancement: no initial hidden state, no hero/LCP animation.
if (document.body.classList.contains('home-root') && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.service-card, .about-image, .why-card, .process-step, .gallery-item, .faq-item');
  const seen = new WeakSet();
  let revealObserver;

  const updateMotion = () => {
    if (revealObserver) revealObserver.disconnect();
    targets.forEach(target => target.classList.remove('home-reveal'));
    if (reducedMotion.matches) return;

    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        revealObserver.unobserve(target);
        seen.add(target);
        // Keep keyboard focus and direct fragment destinations stationary.
        const fragment = document.getElementById(window.location.hash.slice(1));
        if (reducedMotion.matches || target.contains(document.activeElement) ||
            (fragment && (target.contains(fragment) || fragment.contains(target)))) return;
        target.classList.add('home-reveal');
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -80px 0px' });

    targets.forEach(target => {
      if (!seen.has(target)) revealObserver.observe(target);
    });
  };

  targets.forEach(target => {
    target.addEventListener('animationend', event => {
      if (event.animationName === 'reliefHomeEnter') target.classList.remove('home-reveal');
    });
    target.addEventListener('focusin', () => {
      seen.add(target);
      target.classList.remove('home-reveal');
      if (revealObserver) revealObserver.unobserve(target);
    });
  });
  reducedMotion.addEventListener('change', updateMotion);
  updateMotion();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: reducedMotion.matches ? 'instant' : 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// FAQ: close others when one opens
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
