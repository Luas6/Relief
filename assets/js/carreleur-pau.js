document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('[data-scroll-panel]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wizard = document.getElementById('cpQuoteWizard');

  if (wizard) {
    const steps = [...wizard.querySelectorAll('[data-wizard-step]')];
    const status = document.getElementById('cpWizardStatus');
    const progress = wizard.querySelector('.cp-wizard-progress');
    const progressFill = document.getElementById('cpWizardProgress');
    const contactError = document.getElementById('cpContactError');
    let currentStep = 0;

    const showStep = (index, moveFocus = false) => {
      currentStep = Math.max(0, Math.min(index, steps.length - 1));
      steps.forEach((step, stepIndex) => { step.hidden = stepIndex !== currentStep; });
      const value = currentStep + 1;
      status.textContent = `Étape ${value} sur ${steps.length} · ${['Votre projet', 'Le chantier', 'Vos coordonnées'][currentStep]}`;
      progress.setAttribute('aria-valuenow', String(value));
      progressFill.style.width = `${(value / steps.length) * 100}%`;
      if (contactError) contactError.hidden = true;
      if (moveFocus) steps[currentStep].querySelector('legend').focus();
    };

    showStep(0);

    wizard.addEventListener('click', event => {
      const next = event.target.closest('[data-wizard-next]');
      const back = event.target.closest('[data-wizard-back]');
      if (next) {
        const requiredFields = [...steps[currentStep].querySelectorAll('[required]')];
        const invalidField = requiredFields.find(field => !field.checkValidity());
        if (invalidField) {
          invalidField.reportValidity();
          return;
        }
        showStep(currentStep + 1, true);
      } else if (back) {
        showStep(currentStep - 1, true);
      }
    });

    wizard.addEventListener('submit', event => {
      const email = document.getElementById('cpCustomerEmail');
      const phone = document.getElementById('cpCustomerPhone');
      if (email.value && !email.checkValidity()) {
        event.preventDefault();
        email.reportValidity();
        return;
      }
      if (!email.value.trim() && !phone.value.trim()) {
        event.preventDefault();
        contactError.hidden = false;
        email.focus();
        return;
      }
    });
  }

  if (!panels.length || reduceMotion.matches || !('IntersectionObserver' in window)) return;

  document.body.classList.add('cp-scroll-effects');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const panel = entry.target;
      if (entry.isIntersecting) {
        panel.classList.add('cp-seen');
        requestAnimationFrame(() => panel.classList.add('cp-active'));
      } else if (panel.classList.contains('cp-seen')) {
        panel.classList.remove('cp-active');
      }
    });
  }, { threshold: 0.12 });

  panels.forEach(panel => observer.observe(panel));

  const progressBar = document.getElementById('cpScrollProgress');
  const art = document.querySelector('.cp-art');
  let animationFrame = 0;
  const updateScrollVisuals = () => {
    animationFrame = 0;
    const pageRange = document.documentElement.scrollHeight - window.innerHeight;
    const pageProgress = pageRange > 0 ? Math.min(1, Math.max(0, window.scrollY / pageRange)) : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${pageProgress})`;

    if (art) {
      const bounds = art.getBoundingClientRect();
      const range = window.innerHeight + bounds.height;
      const sceneProgress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / range));
      art.style.setProperty('--cp-orbit-one', `${34 + sceneProgress * 48}deg`);
      art.style.setProperty('--cp-orbit-two', `${-38 - sceneProgress * 42}deg`);
      art.style.setProperty('--cp-tile-drift', `${Math.sin(sceneProgress * Math.PI * 2) * 20}px`);
    }
  };
  const requestVisualUpdate = () => {
    if (!animationFrame) animationFrame = requestAnimationFrame(updateScrollVisuals);
  };
  window.addEventListener('scroll', requestVisualUpdate, { passive: true });
  window.addEventListener('resize', requestVisualUpdate, { passive: true });
  updateScrollVisuals();
});
