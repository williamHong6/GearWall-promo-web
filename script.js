const copy = {
  en: {
    eyebrow: "Interactive gear wall",
    titleMain: "GearWall",
    titleSub: "A cleaner home for your gear.",
    valueLabel: "Total value",
    dropHint: "Drag gear onto the wall",
    storeButton: "App Store download"
  },
  zh: {
    eyebrow: "可交互装备墙",
    titleMain: "GearWall 洞洞板",
    titleSub: "你的线上装备库",
    valueLabel: "总价值",
    dropHint: "把装备拖到洞洞板上",
    storeButton: "Apple Store 下载"
  }
};

const rates = {
  USD: { symbol: "$", rate: 1, locale: "en-US" },
  CNY: { symbol: "¥", rate: 7.26, locale: "zh-CN" },
  CAD: { symbol: "$", rate: 1.36, locale: "en-CA" },
  EUR: { symbol: "€", rate: 0.92, locale: "de-DE" }
};

const state = {
  language: "en",
  currency: "USD",
  activeDrag: null,
  placed: new Set()
};

const boardStage = document.querySelector("[data-board-stage]");
const boardGrid = document.querySelector("[data-board-grid]");
const valueOutput = document.querySelector("[data-value-output]");
const ghostValue = document.querySelector("[data-stat-ghost]");
const gearCards = [...document.querySelectorAll(".gear-card")];
const boardTiles = [...document.querySelectorAll(".board-tile")];

const boardCells = boardTiles.map((tile) => ({
  x: Number.parseInt(tile.style.getPropertyValue("--x"), 10),
  y: Number.parseInt(tile.style.getPropertyValue("--y"), 10)
}));

function setLanguage(language) {
  state.language = language;
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[language][key];
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });
}

function setCurrency(currency) {
  state.currency = currency;
  document.querySelectorAll("[data-currency]").forEach((button) => {
    button.classList.toggle("active", button.dataset.currency === currency);
  });
  updateValue();
}

function formatCurrency(usdValue) {
  const config = rates[state.currency];
  const value = Math.round(usdValue * config.rate);
  return `${config.symbol}${new Intl.NumberFormat(config.locale, {
    maximumFractionDigits: 0
  }).format(value)}`;
}

function currentTotalUSD() {
  return gearCards.reduce((total, card) => {
    if (!state.placed.has(card.dataset.gear)) return total;
    return total + Number(card.dataset.value || 0);
  }, 0);
}

function updateValue() {
  const formatted = formatCurrency(currentTotalUSD());
  valueOutput.textContent = formatted;
  ghostValue.textContent = formatted;
}

function tileSize() {
  const firstTile = boardTiles[0];
  return firstTile ? firstTile.getBoundingClientRect().width : 80;
}

function availableCellFor(card, pointerX, pointerY) {
  const stageRect = boardStage.getBoundingClientRect();
  const size = tileSize();
  const width = Number(card.dataset.w || 1);
  const height = Number(card.dataset.h || 1);
  const occupied = occupiedCells(card.dataset.gear);
  const centerX = pointerX - stageRect.left;
  const centerY = pointerY - stageRect.top;
  const rawX = Math.round(centerX / size - width / 2);
  const rawY = Math.round(centerY / size - height / 2);

  const candidates = boardCells
    .map((cell) => ({ ...cell, score: Math.abs(cell.x - rawX) + Math.abs(cell.y - rawY) }))
    .sort((a, b) => a.score - b.score);

  return candidates.find((cell) => footprintFits(cell.x, cell.y, width, height, occupied)) ?? null;
}

function cellKey(x, y) {
  return `${x}:${y}`;
}

function occupiedCells(exceptGear) {
  const occupied = new Set();

  gearCards.forEach((card) => {
    if (!state.placed.has(card.dataset.gear) || card.dataset.gear === exceptGear) return;
    const x = Number(card.dataset.cellX);
    const y = Number(card.dataset.cellY);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;

    const width = Number(card.dataset.w || 1);
    const height = Number(card.dataset.h || 1);
    for (let cx = x; cx < x + width; cx += 1) {
      for (let cy = y; cy < y + height; cy += 1) {
        occupied.add(cellKey(cx, cy));
      }
    }
  });

  return occupied;
}

function footprintFits(x, y, width, height, occupied = new Set()) {
  for (let cx = x; cx < x + width; cx += 1) {
    for (let cy = y; cy < y + height; cy += 1) {
      if (!boardCells.some((cell) => cell.x === cx && cell.y === cy)) return false;
      if (occupied.has(cellKey(cx, cy))) return false;
    }
  }
  return true;
}

function placeGear(card, cell) {
  const stageRect = boardStage.getBoundingClientRect();
  const size = tileSize();
  const width = Number(card.dataset.w || 1);
  const height = Number(card.dataset.h || 1);
  const left = stageRect.left + (cell.x + width / 2) * size;
  const top = stageRect.top + (cell.y + height / 2) * size;

  card.classList.add("is-placed");
  state.placed.add(card.dataset.gear);
  card.dataset.cellX = String(cell.x);
  card.dataset.cellY = String(cell.y);
  document.body.appendChild(card);
  card.style.position = "fixed";
  card.style.left = `${left}px`;
  card.style.top = `${top}px`;
  card.style.transform = "translate(-50%, -50%)";
  updateValue();
}

function resetDockPosition(card) {
  card.classList.remove("is-placed");
  state.placed.delete(card.dataset.gear);
  delete card.dataset.cellX;
  delete card.dataset.cellY;
  card.removeAttribute("style");
  document.querySelector(".gear-dock").appendChild(card);
  updateValue();
}

function beginDrag(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();

  card.setPointerCapture(event.pointerId);
  card.classList.add("is-dragging");
  document.body.appendChild(card);
  card.style.position = "fixed";
  card.style.left = `${rect.left + rect.width / 2}px`;
  card.style.top = `${rect.top + rect.height / 2}px`;
  card.style.transform = "translate(-50%, -50%) scale(1.05)";

  state.activeDrag = {
    card,
    pointerId: event.pointerId,
    offsetX: event.clientX - (rect.left + rect.width / 2),
    offsetY: event.clientY - (rect.top + rect.height / 2)
  };
  boardStage.classList.add("is-active");
}

function moveDrag(event) {
  const drag = state.activeDrag;
  if (!drag || drag.pointerId !== event.pointerId) return;
  const { card, offsetX, offsetY } = drag;
  card.style.left = `${event.clientX - offsetX}px`;
  card.style.top = `${event.clientY - offsetY}px`;
}

function endDrag(event) {
  const drag = state.activeDrag;
  if (!drag || drag.pointerId !== event.pointerId) return;

  const { card } = drag;
  card.classList.remove("is-dragging");
  boardStage.classList.remove("is-active");
  state.activeDrag = null;

  const stageRect = boardStage.getBoundingClientRect();
  const isInside =
    event.clientX >= stageRect.left - 24 &&
    event.clientX <= stageRect.right + 24 &&
    event.clientY >= stageRect.top - 24 &&
    event.clientY <= stageRect.bottom + 24;

  if (isInside) {
    const cell = availableCellFor(card, event.clientX, event.clientY);
    if (cell) {
      placeGear(card, cell);
    } else {
      resetDockPosition(card);
    }
  } else {
    resetDockPosition(card);
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelectorAll("[data-currency]").forEach((button) => {
  button.addEventListener("click", () => setCurrency(button.dataset.currency));
});

gearCards.forEach((card) => {
  card.addEventListener("pointerdown", beginDrag);
  card.addEventListener("pointermove", moveDrag);
  card.addEventListener("pointerup", endDrag);
  card.addEventListener("pointercancel", endDrag);
});

window.addEventListener("resize", () => {
  gearCards.forEach((card) => {
    if (!state.placed.has(card.dataset.gear)) return;
    resetDockPosition(card);
  });
});

setLanguage(state.language);
setCurrency(state.currency);
