
const reducedMotion = false;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function setupTiltSurfaces(root = document) {
  if (!finePointer || reducedMotion) return;
  root.querySelectorAll(".tilt-surface").forEach(surface => {
    if (surface.dataset.tiltReady) return;
    surface.dataset.tiltReady = "true";
    const strength = Number(surface.dataset.tiltStrength || 4);
    surface.addEventListener("pointermove", event => {
      const rect = surface.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      surface.style.setProperty("--ry", `${(px - .5) * strength * 2}deg`);
      surface.style.setProperty("--rx", `${(.5 - py) * strength * 2}deg`);
    });
    surface.addEventListener("pointerleave", () => {
      surface.style.setProperty("--rx", "0deg");
      surface.style.setProperty("--ry", "0deg");
    });
  });
}

function setupHeroTilt() {
  if (!finePointer || reducedMotion) return;
  const hero = document.querySelector(".hero");
  const stage = document.querySelector("[data-hero-tilt]");
  if (!hero || !stage) return;
  hero.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    stage.style.setProperty("--hero-ry", `${(px - .5) * 10}deg`);
    stage.style.setProperty("--hero-rx", `${(.5 - py) * 8}deg`);
  });
  hero.addEventListener("pointerleave", () => {
    stage.style.setProperty("--hero-rx", "0deg");
    stage.style.setProperty("--hero-ry", "0deg");
  });
}

function setupCardTilt() {
  if (!finePointer || reducedMotion) return;
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      card.style.setProperty("--ry", `${(px - .5) * 8}deg`);
      card.style.setProperty("--rx", `${(.5 - py) * 7}deg`);
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

function setupMagneticElements() {
  if (!finePointer || reducedMotion) return;
  document.addEventListener("pointermove", event => {
    const target = event.target.closest?.(".magnetic");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * .12}px, ${(event.clientY - rect.top - rect.height / 2) * .12}px)`;
  });
  document.addEventListener("pointerout", event => {
    const target = event.target.closest?.(".magnetic");
    if (target) target.style.transform = "";
  });
}

function setupCursorLight() {
  if (!finePointer || reducedMotion) return;
  const light = document.querySelector(".cursor-light");
  if (!light) return;
  light.style.opacity = "1";
  window.addEventListener("pointermove", event => {
    light.style.left = `${event.clientX}px`;
    light.style.top = `${event.clientY}px`;
  }, {passive:true});
  document.documentElement.addEventListener("mouseleave", () => light.style.opacity = "0");
  document.documentElement.addEventListener("mouseenter", () => light.style.opacity = "1");
}

function setupNavigation() {
  const menu = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");
  if (!menu || !nav) return;
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("mobile-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
    menu.setAttribute("aria-expanded", "false");
  }));
}

function setupReveals() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(node => node.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), {threshold:.08});
  nodes.forEach(node => observer.observe(node));
}

document.querySelectorAll("#year").forEach(year => year.textContent = new Date().getFullYear());
setupNavigation();
setupReveals();
setupTiltSurfaces();
setupCardTilt();
setupHeroTilt();
setupMagneticElements();
setupCursorLight();
