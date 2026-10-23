/*
  Mero Anniversary — subtle editorial motion
  Load this AFTER script.js, so the memory cards already exist in the page.
  It does not edit captions, photos, the anniversary countdown, or your letter.
*/
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Stagger only the opening copy, not the decorative elements.
  if (!reduceMotion) {
    const heroItems = document.querySelectorAll(
      ".hero .eyebrow, .hero h1, .hero .hero-copy, .hero .primary-button, .hero .hero-note"
    );

    heroItems.forEach((element, index) => {
      element.classList.add("hero-intro");
      element.style.setProperty("--intro-delay", `${index * 115}ms`);
      // Remove the animation class at the end so normal hover/focus styles work as usual.
      element.addEventListener("animationend", () => {
        element.classList.remove("hero-intro");
        element.style.removeProperty("--intro-delay");
      }, { once: true });
    });
  }

  // The CSS stays in its normal state when motion is disabled or IntersectionObserver is unavailable.
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const revealSets = [
    ["#favorite .favorite-heading", () => 0],
    ["#favorite .favorite-feature", () => 100],
    ["#favorite .favorite-footnote", () => 80],
    ["#memories .section-heading", () => 0],
    ["#photoGrid .memory-card", (index) => (index % 3) * 105],
    ["#memories .photo-tip", () => 80],
    [".letter-section .letter-card", () => 0],
    [".countdown-section > .eyebrow", () => 0],
    [".countdown-section > h2", () => 80],
    [".countdown-section > .countdown-copy", () => 130],
    ["#countdown .time-unit", (index) => index * 80],
    [".countdown-section > .countdown-footnote", () => 80],
    ["footer > p", () => 0],
    ["footer > small", () => 80],
  ];

  const revealElements = [];
  revealSets.forEach(([selector, delayFor]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${delayFor(index)}ms`);
      revealElements.push(element);
    });
  });

  document.documentElement.classList.add("motion-ready");

  // Replay a subtle motion every time an element enters the viewport.
  // Keep .is-visible after it leaves view, so content never disappears while scrolling away.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (!entry.isIntersecting) {
        element.classList.remove("scroll-replay");
        return;
      }

      element.classList.add("is-visible");
      element.classList.remove("scroll-replay");
      // Force a style refresh so the animation can restart on every entry.
      void element.offsetWidth;
      element.classList.add("scroll-replay");
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -45px 0px",
  });

  revealElements.forEach((element) => {
    element.addEventListener("animationend", (event) => {
      if (event.animationName === "premium-scroll-replay") {
        element.classList.remove("scroll-replay");
      }
    });
    observer.observe(element);
  });
})();
