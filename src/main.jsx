import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const copy = {
  en: {
    eyebrow: "Interactive gear wall",
    titleMain: "GearWall",
    titleSub: "A cleaner home for your gear.",
    valueLabel: "Total value",
    dropHint: "Drag gear onto the wall",
    storeButton: "App Store download",
    privacyEyebrow: "Your privacy",
    privacyTitle: "Know where your data goes.",
    privacyBody: "Learn how GearWall handles your gear, photos, and optional analytics.",
    privacyButton: "Read our Privacy Policy"
  },
  zh: {
    eyebrow: "可交互装备墙",
    titleMain: "GearWall 洞洞板",
    titleSub: "你的线上装备库",
    valueLabel: "总价值",
    dropHint: "把装备拖到洞洞板上",
    storeButton: "Apple Store 下载",
    privacyEyebrow: "关于你的隐私",
    privacyTitle: "你的数据如何被使用",
    privacyBody: "了解 GearWall 如何处理装备资料、照片与可选的使用分析。",
    privacyButton: "查看隐私政策"
  }
};

const rates = {
  USD: { symbol: "$", rate: 1, locale: "en-US" },
  CNY: { symbol: "¥", rate: 7.26, locale: "zh-CN" },
  CAD: { symbol: "$", rate: 1.36, locale: "en-CA" },
  EUR: { symbol: "€", rate: 0.92, locale: "de-DE" }
};

const board = {
  columns: 6,
  rows: 3
};

const publicImage = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const gear = [
  { id: "snowboard", src: publicImage("snowboard.png"), alt: "Snowboard", value: 720, w: 1, h: 3 },
  { id: "skis", src: publicImage("skis.png"), alt: "Skis", value: 940, w: 4, h: 1 },
  { id: "poles", src: publicImage("poles.png"), alt: "Ski poles", value: 160, w: 1, h: 2 },
  { id: "goggles", src: publicImage("goggles-wide.png"), alt: "Goggles", value: 220, w: 1, h: 1 },
  { id: "helmet", src: publicImage("helmet.png"), alt: "Helmet", value: 260, w: 1, h: 1 },
  { id: "binding", src: publicImage("binding.png"), alt: "Binding", value: 320, w: 1, h: 1 },
  { id: "backpack", src: publicImage("backpack.png"), alt: "Backpack", value: 240, w: 1, h: 1 },
  { id: "boot", src: publicImage("boot.png"), alt: "Boot", value: 420, w: 1, h: 1 },
  { id: "glove", src: publicImage("glove.png"), alt: "Glove", value: 120, w: 1, h: 1 },
  { id: "jacket", src: publicImage("jacket.png"), alt: "Jacket", value: 680, w: 2, h: 2 }
];

function App() {
  const stageRef = useRef(null);
  const [language, setLanguage] = useState(() => new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "zh");
  const [currency, setCurrency] = useState("USD");
  const [placed, setPlaced] = useState({});
  const [drag, setDrag] = useState(null);
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const cells = useMemo(() => {
    const result = [];
    for (let y = 0; y < board.rows; y += 1) {
      for (let x = 0; x < board.columns; x += 1) {
        result.push({ x, y });
      }
    }
    return result;
  }, []);

  const totalUSD = useMemo(
    () => Object.keys(placed).reduce((sum, id) => sum + (gear.find((item) => item.id === id)?.value ?? 0), 0),
    [placed]
  );

  const formattedValue = useMemo(() => {
    const config = rates[currency];
    const amount = Math.round(totalUSD * config.rate);
    return `${config.symbol}${new Intl.NumberFormat(config.locale, { maximumFractionDigits: 0 }).format(amount)}`;
  }, [currency, totalUSD]);

  function stageMetrics() {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return {
      rect,
      tile: rect.width / board.columns
    };
  }

  function occupiedCells(exceptId) {
    const occupied = new Set();
    Object.entries(placed).forEach(([id, cell]) => {
      if (id === exceptId) return;
      const item = gear.find((entry) => entry.id === id);
      if (!item) return;
      for (let x = cell.x; x < cell.x + item.w; x += 1) {
        for (let y = cell.y; y < cell.y + item.h; y += 1) {
          occupied.add(`${x}:${y}`);
        }
      }
    });
    return occupied;
  }

  function footprintFits(x, y, item, occupied) {
    for (let cx = x; cx < x + item.w; cx += 1) {
      for (let cy = y; cy < y + item.h; cy += 1) {
        if (cx < 0 || cy < 0 || cx >= board.columns || cy >= board.rows) return false;
        if (occupied.has(`${cx}:${cy}`)) return false;
      }
    }
    return true;
  }

  function nearestCellFor(item, pointerX, pointerY) {
    const metrics = stageMetrics();
    if (!metrics) return null;
    const { rect, tile } = metrics;
    const isInsideBoard =
      pointerX >= rect.left && pointerX <= rect.right && pointerY >= rect.top && pointerY <= rect.bottom;
    if (!isInsideBoard) return null;

    const rawX = Math.round((pointerX - rect.left) / tile - item.w / 2);
    const rawY = Math.round((pointerY - rect.top) / tile - item.h / 2);
    const occupied = occupiedCells(item.id);

    return cells
      .map((cell) => ({ ...cell, score: Math.abs(cell.x - rawX) + Math.abs(cell.y - rawY) }))
      .sort((a, b) => a.score - b.score)
      .find((cell) => footprintFits(cell.x, cell.y, item, occupied));
  }

  function beginDrag(event, item) {
    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = event.currentTarget.getBoundingClientRect();
    setDrag({
      id: item.id,
      pointerId: event.pointerId,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      offsetX: event.clientX - (rect.left + rect.width / 2),
      offsetY: event.clientY - (rect.top + rect.height / 2)
    });
  }

  function moveDrag(event) {
    if (!drag || drag.pointerId !== event.pointerId) return;
    setDrag((current) => ({
      ...current,
      x: event.clientX - current.offsetX,
      y: event.clientY - current.offsetY
    }));
  }

  function endDrag(event) {
    if (!drag || drag.pointerId !== event.pointerId) return;
    const item = gear.find((entry) => entry.id === drag.id);
    const cell = item ? nearestCellFor(item, event.clientX, event.clientY) : null;

    setDrag(null);
    if (!item || !cell) {
      setPlaced((current) => {
        const next = { ...current };
        delete next[drag.id];
        return next;
      });
      return;
    }

    setPlaced((current) => ({
      ...current,
      [item.id]: cell
    }));
  }

  function renderBoardGear(item) {
    const cell = placed[item.id];
    if (!cell) return null;
    const isDragging = drag?.id === item.id;
    return (
      <button
        key={item.id}
        className={`placed-gear placed-${item.id} ${isDragging ? "is-hidden" : ""}`}
        type="button"
        aria-label={`Move ${item.alt}`}
        style={{
          "--x": cell.x,
          "--y": cell.y,
          "--w": item.w,
          "--h": item.h
        }}
        onPointerDown={(event) => beginDrag(event, item)}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <img src={item.src} alt="" draggable="false" />
      </button>
    );
  }

  return (
    <main
      className="page-shell"
      aria-label="GearWall promotional playground"
      style={{ "--pegboard-image": `url("${publicImage("pegboard.png")}")` }}
    >
      <nav className="top-controls" aria-label="Page controls">
        <Segmented
          label="Language"
          value={language}
          options={[
            ["en", "EN"],
            ["zh", "中文"]
          ]}
          onChange={setLanguage}
        />
        <Segmented
          label="Currency"
          value={currency}
          options={[
            ["USD", "$USD"],
            ["CNY", "¥CNY"],
            ["CAD", "$CAD"],
            ["EUR", "€EUR"]
          ]}
          onChange={setCurrency}
          wide
        />
      </nav>

      <section className="hero" aria-label="Interactive GearWall demo">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>
          <span>{t.titleMain}</span>
          <span className="title-sub">{t.titleSub}</span>
        </h1>

        <div className="ghost-word ghost-price">{formattedValue}</div>
        <div className="ghost-word ghost-brand">GearWall</div>

        <div className={`board-stage ${drag ? "is-active" : ""}`} ref={stageRef}>
          <div className="board-grid" aria-label="Drop gear here">
            {cells.map((cell) => (
              <div className="board-tile" key={`${cell.x}-${cell.y}`} style={{ "--x": cell.x, "--y": cell.y }} />
            ))}
            {gear.map(renderBoardGear)}
          </div>
          <p className="drop-hint">{t.dropHint}</p>
        </div>

        <a className="store-button" href="#" aria-label="Download on the App Store">
          <span>{t.storeButton}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h13m-5-5 5 5-5 5" />
          </svg>
        </a>
      </section>

      <footer className="privacy-intro" aria-label={t.privacyEyebrow}>
        <p className="privacy-eyebrow">{t.privacyEyebrow}</p>
        <h2>{t.privacyTitle}</h2>
        <p>{t.privacyBody}</p>
        <a className="privacy-link" href={`${import.meta.env.BASE_URL}privacy/?lang=${language}`}>
          {t.privacyButton}
        </a>
      </footer>

      <section className="gear-dock" aria-label="Draggable gear">
        {gear.map((item) => (
          <GearCard
            key={item.id}
            item={item}
            hidden={Boolean(placed[item.id]) || drag?.id === item.id}
            onPointerDown={beginDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
          />
        ))}
      </section>

      {drag ? (
        <div
          className={`gear-card drag-layer gear-${drag.id}`}
          style={{ left: drag.x, top: drag.y }}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <img src={gear.find((item) => item.id === drag.id)?.src} alt="" draggable="false" />
        </div>
      ) : null}
    </main>
  );
}

function Segmented({ label, value, options, onChange, wide = false }) {
  return (
    <div className={`segmented-control ${wide ? "currency-control" : ""}`} role="group" aria-label={label}>
      {options.map(([id, text]) => (
        <button
          key={id}
          className={`segmented-option ${value === id ? "active" : ""}`}
          type="button"
          aria-pressed={value === id}
          onClick={() => onChange(id)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

function GearCard({ item, hidden, onPointerDown, onPointerMove, onPointerUp }) {
  return (
    <button
      className={`gear-card gear-${item.id} ${hidden ? "is-hidden" : ""}`}
      type="button"
      aria-label={item.alt}
      onPointerDown={(event) => onPointerDown(event, item)}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img src={item.src} alt={item.alt} draggable="false" />
    </button>
  );
}

createRoot(document.getElementById("root")).render(<App />);
