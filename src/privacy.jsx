import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { privacyCopy } from "./privacy-content.js";
import "./privacy.css";

function PrivacyPage() {
  const [language, setLanguage] = useState(() => new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "zh");
  const t = privacyCopy[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = `${t.title} · GearWall`;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(null, "", url);
  }, [language, t.title]);

  return (
    <div className="privacy-page">
      <a className="skip-link" href="#policy">{language === "zh" ? "跳至政策正文" : "Skip to policy"}</a>
      <header className="privacy-header">
        <a className="brand" href={`${import.meta.env.BASE_URL}?lang=${language}`} aria-label={t.back}>
          <span className="brand-mark" aria-hidden="true">G</span>
          GearWall
        </a>
        <div className="language-control" role="group" aria-label={language === "zh" ? "语言" : "Language"}>
          {[["en", "EN"], ["zh", "中文"]].map(([id, label]) => (
            <button key={id} type="button" aria-pressed={language === id} onClick={() => setLanguage(id)}>{label}</button>
          ))}
        </div>
      </header>

      <main id="policy" className="policy" tabIndex={-1}>
        <p className="eyebrow">GEARWALL / PRIVACY</p>
        <h1>{t.title}</h1>
        <p className="updated">{t.updated}</p>
        <p className="intro">{t.intro}</p>

        <aside className="policy-summary" aria-label={t.summaryTitle}>
          <h2>{t.summaryTitle}</h2>
          <ul>{t.summary.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>

        <nav className="contents" aria-label={t.contents}>
          <h2>{t.contents}</h2>
          <ol>{t.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
        </nav>

        <article>
          {t.sections.map((section, index) => (
            <section className="policy-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`}><span className="section-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.links?.length ? <ul className="policy-links">{section.links.map((link) => <li key={link.href}><a href={link.href} rel="noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a></li>)}</ul> : null}
            </section>
          ))}
        </article>
      </main>

      <footer className="privacy-footer">
        <span>© {new Date().getFullYear()} GearWall</span>
        <a href={`${import.meta.env.BASE_URL}?lang=${language}`}>{t.back}<span aria-hidden="true"> ↗</span></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<PrivacyPage />);
