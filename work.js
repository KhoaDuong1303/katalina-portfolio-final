const FIGMA_URL = "https://embed.figma.com/proto/IUTWwmmM94OQU4pk7OhFbT/Starcrew-Website--Desktop-version?node-id=1-3&starting-point-node-id=1%3A3&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&embed-host=share";
const FIGMA_OPEN_URL = "https://www.figma.com/proto/IUTWwmmM94OQU4pk7OhFbT/Starcrew-Website--Desktop-version?node-id=1-3&t=1rHVzawGKWNoWwVf-1&starting-point-node-id=1%3A3&scaling=scale-down-width&content-scaling=fixed";

const projects = [
  {
    id: "starcrew",
    number: "01",
    title: "STARCREW",
    category: "Brand Identity • UI/UX • Website Design",
    description: "A youthful student-event identity and interactive website designed to make campus communities easier to discover.",
    cover: "images/starcrew-logo.png",
    cardType: "logo",
    cardBackground: "#f8eff2",
    logoWidth: "58%",
    caseLogoWidth: "64%",
    tags: ["Brand Identity", "UI / UX", "Website", "Digital"],
    summary: "STARCREW is a visual identity and desktop website for a student event platform. The system feels playful and welcoming while making events, clubs and campus communities easy to explore.",
    sections: [
      {
        title: "Project Overview",
        text: "The goal was to help students discover campus activities through a brand that feels youthful, inclusive and energetic. A flexible identity system connects the website, social content and printed applications.",
        images: ["images/sc-01-brand-cover.jpg"],
        layout: "single"
      },
      {
        title: "Identity System",
        text: "The logo combines a stylized S with spark shapes to represent creativity and students shining together. Daily Bubble gives headlines a playful personality, while lavender, pink and deep purple create a recognizable and friendly colour system. Clear-space and usage rules keep the identity consistent without showing every guideline page here."
      },
      {
        title: "Digital Experience",
        text: "The website uses clear navigation, expressive headings and consistent iconography to guide students through events, clubs and merchandise. Social media content extends the same visual language into promotional campaigns.",
        images: ["images/sc-08-social-media.jpg"],
        layout: "single"
      },
      {
        title: "Selected Applications",
        text: "The visual system was tested across merchandise, stationery and packaging. These selected applications show how the identity stays cohesive beyond the screen.",
        images: ["images/sc-14-mockup-mug-tshirt.jpg", "images/sc-16-mockup-bag.jpg"]
      },
      {
        title: "Interactive Prototype",
        text: "Explore the desktop experience directly through the embedded Figma prototype.",
        figma: true
      }
    ]
  },
  {
    id: "choochew",
    number: "02",
    title: "CHOO-CHEW",
    category: "Brand Identity • Packaging • Marketing",
    description: "A playful hot-dog brand inspired by steam trains, family moments and retro diner nostalgia.",
    cover: "images/cc-01-brand-cover.jpg",
    cardType: "logo",
    cardBackground: "#921f13",
    logoWidth: "76%",
    caseLogoWidth: "88%",
    tags: ["Brand Identity", "Mascot", "Packaging", "Advertising"],
    summary: "CHOO-CHEW is a playful identity for a nostalgic hot-dog restaurant. A cheerful train-and-hot-dog mascot creates a memorable experience for families, children and customers who enjoy retro diner culture.",
    sections: [
      {
        title: "Brand Concept",
        text: "The name is inspired by the sound of a steam locomotive. Warm red, cream and golden tones, rounded typography and a friendly mascot communicate comfort, humour and shared family moments.",
        images: ["images/cc-02-brand-overview.jpg"],
        layout: "single"
      },
      {
        title: "Identity System",
        text: "The system includes primary, inverse, horizontal and simplified marks for different sizes and formats. Minimum-size, clear-space and colour rules protect recognition, while the mascot remains the central character across every touchpoint.",
        images: ["images/cc-06-logo-primary.jpg"],
        layout: "single"
      },
      {
        title: "Real-World Applications",
        text: "The identity was produced as a physical brand display with menus, posters, takeaway packaging, coasters, stickers and patterned materials. These photographs show the final work as it appeared in print rather than relying only on digital mockups.",
        images: [
          "images/choochew-real-menu.jpg",
          "images/choochew-real-pattern.jpg",
          "images/choochew-real-materials.jpg",
          "images/choochew-real-display.jpg",
          "images/choochew-real-poster.jpg"
        ],
        captions: [
          "Printed menu system",
          "Mascot pattern and coasters",
          "Coordinated brand materials",
          "Complete physical presentation",
          "Promotional poster and packaging"
        ],
        layout: "real-world"
      },
      {
        title: "Final Outcome",
        text: "The finished project connects mascot design, packaging, menus and advertising in one consistent identity. The physical applications demonstrate that the system remains clear, playful and recognizable at different scales."
      }
    ]
  },
  {
    id: "vietnam",
    number: "03",
    title: "WHISPERS OF VIETNAM",
    category: "Editorial Design • Publication • Typography",
    description: "An editorial magazine exploring the quiet beauty of Vietnam through photography, typography and layered composition.",
    cover: "images/vietnam-waterfall.jpg",
    cardType: "image",
    cardBackground: "#d9e2dc",
    coverPosition: "center 47%",
    casePosition: "center",
    tags: ["Editorial", "Magazine", "Typography", "Print"],
    summary: "WHISPERS OF VIETNAM is an editorial publication about calm landscapes, slow living and the relationship between people and nature. Deep green, soft cream and elegant serif typography create a reflective reading experience.",
    sections: [
      {
        title: "Editorial Direction",
        text: "The magazine presents Vietnam through misty mountains, limestone landscapes, river life and lotus-filled waterways. Instead of a busy tourism style, the layouts use generous space, restrained colour and quiet photography to encourage slower observation."
      },
      {
        title: "Interactive Magazine",
        text: "Open the digital book below and turn through the selected pages. The interaction keeps the magazine together as one publication instead of displaying every page as a separate image.",
        book: {
          cover: "images/vm-01-cover.jpg",
          back: "images/vm-02-back-cover.jpg",
          spreads: [
            ["images/vm-03-feature-opener.jpg", "images/vm-04-table-of-contents.jpg"],
            ["images/vm-05-article-quiet-beauty.jpg", "images/vm-06-editorial-spread.jpg"],
            ["images/vm-07-whispers-vietnam.jpg", "images/vm-08-ha-giang.jpg"]
          ]
        }
      },
      {
        title: "Design System",
        text: "A refined serif type system, deep green and warm cream create the visual foundation. Drop caps, multi-column grids, page numbers and image captions support long-form reading while giving each spread a distinct rhythm."
      },
      {
        title: "Final Outcome",
        text: "The publication demonstrates editorial hierarchy, grid systems, typography and image-led storytelling. It presents Vietnam through a personal and atmospheric perspective rather than a conventional travel brochure."
      }
    ]
  },
  {
    id: "lunion",
    number: "04",
    title: "LUNION",
    category: "Digital Advertising • Campaign • Product Design",
    description: "A futuristic skincare campaign combining space-inspired visuals, product compositing and bold promotional typography.",
    cover: "images/lu-01-logo.jpg",
    cardType: "logo",
    cardBackground: "#efefef",
    logoWidth: "72%",
    caseLogoWidth: "78%",
    tags: ["Campaign", "Advertising", "Compositing", "Social Media"],
    summary: "LUNION is a digital advertising campaign for the PROXIMA DERMA skincare line. Space-inspired environments and dramatic product staging position the formulas as modern, advanced and memorable.",
    sections: [
      {
        title: "Campaign Concept",
        text: "The campaign needed to present three skincare formulas clearly while standing out in crowded digital feeds. A science-fiction direction connects the product line to ideas of discovery, precision and innovation."
      },
      {
        title: "Identity & Structure",
        text: "The geometric LUNION wordmark includes an astronaut-inspired symbol. A simple clear-space system protects the mark when it appears near product information, headlines and promotional imagery.",
        images: ["images/lu-01-logo.jpg", "images/lu-02-clear-space.jpg"]
      },
      {
        title: "Campaign Variations",
        text: "Three visual environments were created: a clean white product stage, a glowing galaxy composition and a moon-surface scene. Each version keeps the formulas easy to compare while changing the campaign mood.",
        images: ["images/lu-03-mockup-white.jpg", "images/lu-04-mockup-galaxy.jpg", "images/lu-05-mockup-moon.jpg"],
        layout: "campaign-three"
      }
    ]
  },
  {
    id: "spirited",
    number: "05",
    title: "SPIRITED AWAY",
    category: "Poster Design • Illustration • Visual Storytelling",
    description: "A minimalist reinterpretation of the film's train scene, using atmosphere, reflection and negative space to communicate emotion.",
    cover: "images/sa-01-poster.jpg",
    cardType: "image",
    cardBackground: "#a796b2",
    coverPosition: "center 47%",
    caseFit: "contain",
    tags: ["Poster", "Illustration", "Typography", "Composition"],
    summary: "This poster reinterprets the quiet train sequence from SPIRITED AWAY through a minimalist visual approach focused on atmosphere, symbolism and emotional scale.",
    sections: [
      {
        title: "Concept & Composition",
        text: "The train forms a long horizontal anchor, while Chihiro and No-Face become small focal points within a large dreamlike environment. Soft lavender, pink and peach gradients create a quiet sunset atmosphere, and the reflection suggests transition and personal growth."
      },
      {
        title: "Final Poster",
        text: "The complete artwork is shown uncropped so the negative space, title hierarchy and reflected scene can be viewed as one composition.",
        images: ["images/sa-01-poster.jpg"],
        layout: "poster-single"
      }
    ]
  },
  {
    id: "paris",
    number: "06",
    title: "PARIS, FOLDED",
    category: "Editorial Illustration • Vector Art • Poster Design",
    description: "A playful editorial poster where a croissant becomes a miniature Parisian landscape.",
    cover: "images/paris-poster.png",
    cardType: "image",
    cardBackground: "#ecd2a8",
    coverPosition: "center 53%",
    caseFit: "contain",
    tags: ["Illustration", "Poster", "Vector Art", "Editorial"],
    summary: "PARIS, FOLDED combines French pastry and architecture in one playful editorial illustration. A croissant becomes the foundation of a miniature Parisian landscape.",
    sections: [
      {
        title: "Concept & Visual Language",
        text: "The phrase “Where Butter Becomes Architecture” guided the project. Warm pastry tones contrast with cool blue rooftops, green landscape shapes and the Eiffel Tower. The reflected city extends the composition and makes the croissant feel like a complete imagined world."
      },
      {
        title: "Final Poster",
        text: "The full artwork is displayed uncropped to preserve the title, illustration, reflection and closing tagline.",
        images: ["images/paris-poster.png"],
        layout: "poster-single"
      }
    ]
  }
];

const grid = document.getElementById("projectGrid");
const view = document.getElementById("projectView");
const content = document.getElementById("projectContent");
const closeBtn = document.getElementById("projectClose");
const progress = document.getElementById("projectProgress");
const projectContactLink = document.getElementById("projectContactLink");
const reducedMotion = false; // Motion is intentionally enabled for this interactive portfolio.
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
let lastFocusedElement = null;

function renderProjects() {
  grid.innerHTML = projects.map((project, index) => `
    <div class="project-wrap reveal">
      <article
        class="project-card ${project.cardType === "logo" ? "logo-card" : ""}"
        data-index="${index}"
        tabindex="0"
        role="button"
        aria-label="Open ${project.title} project"
        style="--thumb-bg:${project.cardBackground};--cover-position:${project.coverPosition || "center"};--cover-fit:${project.coverFit || "cover"};--logo-width:${project.logoWidth || "58%"};--logo-height:${project.logoHeight || "58%"}">
        <div class="project-thumb"><img src="${project.cover}" alt="${project.title} project thumbnail"></div>
        <div class="project-meta">
          <span class="project-number">${project.number}</span>
          <h3>${project.title}</h3>
          <p class="project-category">${project.category}</p>
          <p class="project-description">${project.description}</p>
          <div class="view-label"><span>View Project</span><span>↗</span></div>
        </div>
      </article>
    </div>`).join("");
}

function bookHTML(book) {
  const encoded = encodeURIComponent(JSON.stringify(book));
  return `
    <div class="book-experience" data-book data-book-config="${encoded}" data-book-state="-1">
      <div class="book-guide" aria-live="polite">
        <strong>Click the cover to open</strong>
        <span>Click the right page to turn forward and the left page to go back.</span>
      </div>
      <div class="book-stage">
        <div class="book-object is-closed" tabindex="0" role="button" aria-label="Open Whispers of Vietnam magazine">
          <div class="book-cover book-front-cover"><img src="${book.cover}" alt="Whispers of Vietnam front cover"></div>
          <div class="book-spread" aria-hidden="true">
            <figure class="book-page book-page-left"><img alt="Left magazine page"></figure>
            <figure class="book-page book-page-right"><img alt="Right magazine page"></figure>
            <span class="book-spine" aria-hidden="true"></span>
            <div class="book-flip-sheet" aria-hidden="true">
              <div class="book-flip-face book-flip-front"><img alt="Current page"></div>
              <div class="book-flip-face book-flip-back"><img alt="Next page"></div>
            </div>
          </div>
          <div class="book-cover book-back-cover"><img src="${book.back}" alt="Whispers of Vietnam back cover"></div>
        </div>
      </div>
      <div class="book-controls">
        <button type="button" data-book-action="prev">← Previous</button>
        <span class="book-status">Front cover</span>
        <button type="button" data-book-action="next">Open book →</button>
      </div>
    </div>`;
}

function galleryHTML(section) {
  if (section.figma) {
    return `<div class="figma-wrap">
      <div class="monitor">
        <iframe src="${FIGMA_URL}" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="STARCREW interactive desktop prototype"></iframe>
      </div>
      <div class="monitor-stand"></div><div class="monitor-base"></div>
      <p class="figma-note">Prototype not loading? <a href="${FIGMA_OPEN_URL}" target="_blank" rel="noopener">Open it directly in Figma ↗</a></p>
    </div>`;
  }
  if (section.book) return bookHTML(section.book);
  if (!section.images?.length) return "";
  const layout = section.layout || (section.images.length === 1 ? "single" : "");
  return `<div class="case-gallery ${layout}">${section.images.map((src, imageIndex) => `
    <figure class="case-image tilt-surface" data-tilt-strength="3">
      <img src="${src}" alt="${section.title} — image ${imageIndex + 1}" loading="lazy">
      ${section.captions?.[imageIndex] ? `<figcaption>${section.captions[imageIndex]}</figcaption>` : ""}
    </figure>`).join("")}</div>`;
}

function openProject(index) {
  const project = projects[index];
  const nextIndex = (index + 1) % projects.length;
  const next = projects[nextIndex];
  lastFocusedElement = document.activeElement;
  const logoClass = project.cardType === "logo" ? "logo-cover" : "";

  content.innerHTML = `
    <section class="case-hero case-enter">
      <div>
        <p class="case-kicker">${project.number} — ${project.category}</p>
        <h1 class="case-title">${project.title}</h1>
        <p class="case-summary">${project.summary}</p>
        <div class="case-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
      <div class="case-cover ${logoClass}" data-case-tilt style="background:${project.cardBackground};--case-fit:${project.caseFit || (project.cardType === "logo" ? "contain" : "cover")};--case-position:${project.casePosition || project.coverPosition || "center"};--case-logo-width:${project.caseLogoWidth || "62%"};--case-logo-height:${project.caseLogoHeight || "62%"}">
        <img src="${project.cover}" alt="${project.title} cover">
      </div>
    </section>
    ${project.sections.map(section => `
      <section class="case-section case-enter ${section.book ? "book-section" : ""}">
        <div class="case-section-head">
          <h3>${section.title}</h3>
          <p>${section.text}</p>
        </div>
        ${galleryHTML(section)}
      </section>`).join("")}
    <section class="next-project case-enter">
      <div><p>Next Project</p><h3>${next.title}</h3></div>
      <button type="button" data-next-project="${nextIndex}">Open next project ↗</button>
    </section>`;

  view.classList.add("open");
  view.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  view.scrollTop = 0;
  progress.style.width = "0%";
  closeBtn.focus({preventScroll:true});
  requestAnimationFrame(() => animateCaseEntries());
  setupTiltSurfaces(view);
  setupCaseCoverTilt();
  initializeBooks(view);
}

function initializeBooks(root) {
  root.querySelectorAll("[data-book]").forEach(bookElement => {
    if (bookElement.dataset.ready) return;
    bookElement.dataset.ready = "true";
    bookElement._config = JSON.parse(decodeURIComponent(bookElement.dataset.bookConfig));
    bookElement._state = -1;
    bookElement._busy = false;
    updateBook(bookElement);

    bookElement.querySelectorAll("[data-book-action]").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        turnBook(bookElement, button.dataset.bookAction === "next" ? 1 : -1);
      });
    });

    const object = bookElement.querySelector(".book-object");
    object.addEventListener("click", event => {
      const rect = object.getBoundingClientRect();
      const direction = event.clientX < rect.left + rect.width / 2 ? -1 : 1;
      turnBook(bookElement, bookElement._state === -1 ? 1 : direction);
    });
    object.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        turnBook(bookElement, 1);
      } else if (event.key === "ArrowRight") {
        turnBook(bookElement, 1);
      } else if (event.key === "ArrowLeft") {
        turnBook(bookElement, -1);
      }
    });
  });
}

function updateBook(bookElement) {
  const data = bookElement._config;
  const spreadCount = data.spreads.length;
  const state = bookElement._state;
  const object = bookElement.querySelector(".book-object");
  const spread = bookElement.querySelector(".book-spread");
  const guide = bookElement.querySelector(".book-guide");
  const status = bookElement.querySelector(".book-status");
  const prev = bookElement.querySelector('[data-book-action="prev"]');
  const next = bookElement.querySelector('[data-book-action="next"]');

  bookElement.dataset.bookState = String(state);
  object.classList.toggle("is-closed", state === -1);
  object.classList.toggle("is-open", state >= 0 && state < spreadCount);
  object.classList.toggle("is-back", state === spreadCount);
  spread.setAttribute("aria-hidden", state >= 0 && state < spreadCount ? "false" : "true");

  if (state === -1) {
    guide.innerHTML = "<strong>Click the cover to open</strong><span>Click the right page to turn forward and the left page to go back.</span>";
    status.textContent = "Front cover";
    object.setAttribute("aria-label", "Open Whispers of Vietnam magazine");
    prev.disabled = true;
    next.disabled = false;
    next.textContent = "Open book →";
  } else if (state === spreadCount) {
    guide.innerHTML = "<strong>End of magazine</strong><span>Click the left side or Previous to return to the last spread.</span>";
    status.textContent = "Back cover";
    object.setAttribute("aria-label", "Whispers of Vietnam back cover. Click the left side to go back");
    prev.disabled = false;
    next.disabled = true;
    next.textContent = "End";
  } else {
    const [left, right] = data.spreads[state];
    const leftImage = bookElement.querySelector(".book-page-left img");
    const rightImage = bookElement.querySelector(".book-page-right img");
    leftImage.src = left;
    rightImage.src = right;
    leftImage.alt = `Magazine spread ${state + 1}, left page`;
    rightImage.alt = `Magazine spread ${state + 1}, right page`;
    guide.innerHTML = "<strong>Turn the page</strong><span>Right page = next spread • Left page = previous spread</span>";
    status.textContent = `Spread ${state + 1} of ${spreadCount}`;
    object.setAttribute("aria-label", `Whispers of Vietnam spread ${state + 1} of ${spreadCount}. Click right for next or left for previous`);
    prev.disabled = false;
    next.disabled = false;
    next.textContent = state === spreadCount - 1 ? "Close book →" : "Next →";
  }
}

function turnBook(bookElement, direction) {
  if (bookElement._busy) return;
  const data = bookElement._config;
  const spreadCount = data.spreads.length;
  const current = bookElement._state;
  const target = Math.max(-1, Math.min(spreadCount, current + direction));
  if (target === current) return;

  const object = bookElement.querySelector(".book-object");
  bookElement._busy = true;

  if (reducedMotion) {
    bookElement._state = target;
    updateBook(bookElement);
    bookElement._busy = false;
    return;
  }

  if (current === -1 && target === 0) {
    object.classList.add("book-opening");
    setTimeout(() => {
      object.classList.remove("book-opening");
      bookElement._state = target;
      updateBook(bookElement);
      bookElement._busy = false;
    }, 1050);
    return;
  }

  if (current === 0 && target === -1) {
    object.classList.add("book-closing");
    setTimeout(() => {
      object.classList.remove("book-closing");
      bookElement._state = target;
      updateBook(bookElement);
      bookElement._busy = false;
    }, 950);
    return;
  }

  if (current === spreadCount - 1 && target === spreadCount) {
    object.classList.add("book-closing-back");
    setTimeout(() => {
      object.classList.remove("book-closing-back");
      bookElement._state = target;
      updateBook(bookElement);
      bookElement._busy = false;
    }, 900);
    return;
  }

  if (current === spreadCount && target === spreadCount - 1) {
    object.classList.add("book-opening-back");
    setTimeout(() => {
      object.classList.remove("book-opening-back");
      bookElement._state = target;
      updateBook(bookElement);
      bookElement._busy = false;
    }, 900);
    return;
  }

  const flip = bookElement.querySelector(".book-flip-sheet");
  const front = flip.querySelector(".book-flip-front img");
  const back = flip.querySelector(".book-flip-back img");

  if (direction > 0) {
    front.src = data.spreads[current][1];
    back.src = data.spreads[target][0];
    flip.style.left = "50%";
    flip.style.transformOrigin = "left center";
    flip.classList.add("active", "flipping-next");
  } else {
    front.src = data.spreads[current][0];
    back.src = data.spreads[target][1];
    flip.style.left = "0";
    flip.style.transformOrigin = "right center";
    flip.classList.add("active", "flipping-prev");
  }

  setTimeout(() => {
    flip.className = "book-flip-sheet";
    flip.removeAttribute("style");
    bookElement._state = target;
    updateBook(bookElement);
    bookElement._busy = false;
  }, 1100);
}

function animateCaseEntries() {
  const entries = [...view.querySelectorAll(".case-enter")];
  if (reducedMotion) {
    entries.forEach(entry => entry.classList.add("in"));
    return;
  }
  entries.slice(0, 2).forEach((entry, i) => setTimeout(() => entry.classList.add("in"), 90 + i * 120));
  const caseObserver = new IntersectionObserver(items => {
    items.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add("in");
        caseObserver.unobserve(item.target);
      }
    });
  }, {root:view, threshold:.08});
  entries.slice(2).forEach(entry => caseObserver.observe(entry));
}

function closeProject() {
  view.classList.remove("open");
  view.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  progress.style.width = "0%";
  if (lastFocusedElement) lastFocusedElement.focus({preventScroll:true});
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

function setupCaseCoverTilt() {
  if (!finePointer || reducedMotion) return;
  const cover = view.querySelector("[data-case-tilt]");
  if (!cover) return;
  cover.addEventListener("pointermove", event => {
    const rect = cover.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    cover.style.setProperty("--case-ry", `${(px - .5) * 8}deg`);
    cover.style.setProperty("--case-rx", `${(.5 - py) * 7}deg`);
  });
  cover.addEventListener("pointerleave", () => {
    cover.style.setProperty("--case-rx", "0deg");
    cover.style.setProperty("--case-ry", "0deg");
  });
}

function setupMagneticElements() {
  if (!finePointer || reducedMotion) return;
  document.addEventListener("pointermove", event => {
    const target = event.target.closest(".magnetic");
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    target.style.transform = `translate(${x * .12}px,${y * .12}px)`;
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

renderProjects();
const requestedProject = new URLSearchParams(window.location.search).get("project");
if (requestedProject) {
  const requestedIndex = projects.findIndex(project => project.id === requestedProject);
  if (requestedIndex >= 0) setTimeout(() => openProject(requestedIndex), 120);
}
setupCardTilt();
setupTiltSurfaces();
setupHeroTilt();
setupMagneticElements();
setupCursorLight();

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.1});
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const menu = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("mobile-open", !open);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("mobile-open");
  menu.setAttribute("aria-expanded", "false");
}));

grid.addEventListener("click", event => {
  const card = event.target.closest(".project-card");
  if (card) openProject(Number(card.dataset.index));
});
grid.addEventListener("keydown", event => {
  const card = event.target.closest(".project-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProject(Number(card.dataset.index));
  }
});
closeBtn.addEventListener("click", closeProject);
projectContactLink.addEventListener("click", closeProject);
content.addEventListener("click", event => {
  const nextButton = event.target.closest("[data-next-project]");
  if (nextButton) openProject(Number(nextButton.dataset.nextProject));
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && view.classList.contains("open")) closeProject();
});
view.addEventListener("scroll", () => {
  const max = view.scrollHeight - view.clientHeight;
  progress.style.width = `${max > 0 ? (view.scrollTop / max) * 100 : 0}%`;
}, {passive:true});

document.getElementById("year").textContent = new Date().getFullYear();
