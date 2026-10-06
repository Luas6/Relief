document.addEventListener("DOMContentLoaded", () => {
  const formUrl = document.getElementById("form-url");
  if (formUrl) formUrl.value = window.location.href;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (typeof window.GLightbox === "function") {
    try {
      const lightbox = window.GLightbox({
        selector: ".glightbox",
        descriptions: false,
        openEffect: reducedMotion.matches ? "none" : "zoom",
        closeEffect: reducedMotion.matches ? "none" : "zoom",
        slideEffect: reducedMotion.matches ? "none" : "slide"
      });
      if (lightbox && typeof lightbox.on === "function") {
        lightbox.on("open", () => {
          const dialog = document.querySelector(".glightbox-container");
          if (dialog) dialog.setAttribute("aria-label", "Photographies des réalisations RELIEF");
        });
      }
    } catch (error) {
      console.warn("La galerie reste accessible par ses liens.", error);
    }
  }

  // Interior menus use Bootstrap; only the home has this drawer.
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    const setMenuOpen = open => {
      navMenu.classList.toggle("active", open);
      navToggle.classList.toggle("active", open);
      navToggle.setAttribute("aria-expanded", String(open));
    };
    navToggle.addEventListener("click", () => setMenuOpen(!navMenu.classList.contains("active")));
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && navMenu.classList.contains("active")) {
        setMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  // Animate once, only after 25% enters the viewport inset by 80px.
  // No initial hidden state: content remains usable without JS or an observer.
  if (document.body.classList.contains("home-root") && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".service-card, .about-image, .why-card, .process-step, .gallery-item, .faq-item");
    const seen = new WeakSet();
    let observer;
    const updateMotion = () => {
      if (observer) observer.disconnect();
      targets.forEach(target => target.classList.remove("home-reveal"));
      if (reducedMotion.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.25) return;
          const target = entry.target;
          observer.unobserve(target);
          seen.add(target);
          const fragment = document.getElementById(window.location.hash.slice(1));
          if (reducedMotion.matches || target.contains(document.activeElement) ||
              (fragment && (target.contains(fragment) || fragment.contains(target)))) return;
          target.classList.add("home-reveal");
        });
      }, { threshold: 0.25, rootMargin: "0px 0px -80px 0px" });

      targets.forEach(target => {
        if (!seen.has(target)) observer.observe(target);
      });
    };
    targets.forEach(target => {
      target.addEventListener("animationend", event => {
        if (event.animationName === "reliefHomeEnter") target.classList.remove("home-reveal");
      });
      target.addEventListener("focusin", () => {
        seen.add(target);
        target.classList.remove("home-reveal");
        if (observer) observer.unobserve(target);
      });
    });
    reducedMotion.addEventListener("change", updateMotion);
    updateMotion();
  }

  document.querySelectorAll('.home-root a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
      const target = document.getElementById(anchor.getAttribute("href").slice(1));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    });
  });

  const questions = document.querySelectorAll(".faq-item");
  questions.forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) questions.forEach(other => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });
});
