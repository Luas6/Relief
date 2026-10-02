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

  const container = document.querySelector(".mySwiper");
  if (!container) return;
  const showFallback = () => container.classList.add("swiper-fallback");
  const initialize = () => {
    if (typeof window.Swiper !== "function") {
      showFallback();
      return;
    }
    try {
      const swiper = new window.Swiper(container, {
        loop: false,
        spaceBetween: 10,
        speed: reducedMotion.matches ? 0 : 300,
        autoplay: false,
        keyboard: { enabled: true, onlyInViewport: true },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 4, allowTouchMove: false }
        }
      });
      reducedMotion.addEventListener("change", event => {
        swiper.params.speed = event.matches ? 0 : 300;
      });
    } catch (error) {
      showFallback();
      console.warn("Le carrousel est affiché sans animation.", error);
    }
  };
  const loadSwiper = () => {
    if (typeof window.Swiper === "function") {
      initialize();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
    script.onload = initialize;
    script.onerror = showFallback;
    document.body.appendChild(script);
  };
  if (!("IntersectionObserver" in window)) {
    loadSwiper();
    return;
  }
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect();
      loadSwiper();
    }
  });
  observer.observe(container);
});
