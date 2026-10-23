// script.js — підключається в <head> з атрибутом defer, тому DOM уже готовий

/* =========================================================
   1. ТЕМА (світла / темна)
   ========================================================= */
const THEME_KEY = "theme";
const themeBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

function getInitialTheme() {
  const hash = location.hash.replace("#", "");
  if (hash === "light" || hash === "dark") return hash;
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

applyTheme(getInitialTheme());

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    // прибираємо #light / #dark з адреси, щоб не заважали
    history.replaceState(null, "", location.pathname + location.search);
  });
}

// Посилання «Light» / «Dark» в меню
window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  if (hash === "light" || hash === "dark") applyTheme(hash);
});

/* =========================================================
   2. КАРУСЕЛІ
   ========================================================= */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initCarousel(container, slideSelector, options = {}) {
  if (!container) return;
  const slides = Array.from(container.querySelectorAll(slideSelector));
  if (slides.length === 0) return;

  const { autoplay = true, interval = 3000 } = options;
  const wrap = container.parentElement; // .posters або .poster2
  const behavior = reduceMotion ? "auto" : "smooth";

  let index = 0;
  let timer = null;
  let hovered = false;
  let touching = false;
  let visible = true;
  let scrollTimer = null;

  /* ---------- допоміжні ---------- */
  const slideLeft = (i) => slides[i].offsetLeft - container.offsetLeft;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    container.scrollTo({ left: slideLeft(index), behavior });
    updateDots();
  }

  /* ---------- кнопки і крапки (поверх каруселі) ---------- */
  const prev = document.createElement("button");
  const next = document.createElement("button");
  prev.textContent = "‹";
  next.textContent = "›";
  prev.className = "carousel-btn prev";
  next.className = "carousel-btn next";
  prev.setAttribute("aria-label", "Попередній слайд");
  next.setAttribute("aria-label", "Наступний слайд");

  const dotsWrap = document.createElement("div");
  dotsWrap.className = "carousel-dots";
  const dots = slides.map((_, n) => {
    const d = document.createElement("span");
    d.className = "dot";
    d.addEventListener("click", () => goTo(n));
    dotsWrap.appendChild(d);
    return d;
  });

  wrap.append(prev, next, dotsWrap);

  function updateDots() {
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }

  prev.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));

  /* ---------- синхронізація при ручному гортанні ---------- */
  container.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((_, i) => {
        const dist = Math.abs(slideLeft(i) - container.scrollLeft);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      index = best;
      updateDots();
    }, 80);
  }, { passive: true });

  window.addEventListener("resize", () => {
    container.scrollTo({ left: slideLeft(index), behavior: "auto" });
  });

  /* ---------- автоперемикання ---------- */
  function refresh() {
    clearInterval(timer);
    timer = null;
    const canRun = autoplay && visible && !hovered && !touching && !document.hidden;
    if (canRun) timer = setInterval(() => goTo(index + 1), interval);
  }

  // пауза при наведенні мишкою
  wrap.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") { hovered = true; refresh(); }
  });
  wrap.addEventListener("pointerleave", (e) => {
    if (e.pointerType === "mouse") { hovered = false; refresh(); }
  });

  // пауза, поки торкаєшся пальцем
  wrap.addEventListener("touchstart", () => { touching = true; refresh(); }, { passive: true });
  wrap.addEventListener("touchend", () => {
    touching = false;
    setTimeout(refresh, 1500); // трохи зачекати після свайпу
  });

  // не крутити, поки вкладка неактивна
  document.addEventListener("visibilitychange", refresh);

  // не крутити, поки карусель не видно на екрані
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      refresh();
    }, { threshold: 0.3 }).observe(wrap);
  }

  // стрілки на клавіатурі, коли курсор над каруселлю
  document.addEventListener("keydown", (e) => {
    if (!hovered) return;
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  });

  updateDots();
  refresh();
}

// Постери — кожні 3 с
initCarousel(document.querySelector(".carousel"), ".slide", {
  autoplay: true,
  interval: 3000,
});

// Персонажі — кожні 8 с (там багато тексту)
initCarousel(document.querySelector(".carousel2"), ".slide2", {
  autoplay: true,
  interval: 8000,
});