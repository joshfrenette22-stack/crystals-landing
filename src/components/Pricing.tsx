import { Check } from "lucide-react";
import { PRICING } from "@/data";

export function Pricing() {
  return (
    <section className="section" id="pricing" style={{ background: "var(--stone-100)" }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" as const, maxWidth: 620, margin: "0 auto" }}>
          <span className="eyebrow">Simple pricing</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>Fair prices, <span className="accent-italic">no surprises</span></h2>
          <p className="section-lead" style={{ margin: "14px auto 0" }}>Pay only for what you use. Load a free laundry card in-store, or let us pick it up.</p>
        </div>
        <div className="price-grid stagger">
          {PRICING.map((p, i) => (
            <div className={`price-card reveal ${p.accent ? "accent" : ""}`} key={p.name} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="price-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <div className="price-amt">
                <span className="a">{p.price}</span>
                <span className="u">{p.unit}</span>
              </div>
              <p className="price-note">{p.note}</p>
              <ul className="price-feat">
                {p.features.map((f) => (
                  <li key={f}><Check size={17} />{f}</li>
                ))}
              </ul>
              <a className={`btn ${p.accent ? "btn-primary" : "btn-outline"}`} href="#pickup">{p.cta}</a>
            </div>
          ))}
        </div>
        <p className="price-foot reveal">Prices shown are typical starting rates. In-store machine pricing varies by size &amp; cycle — ask our staff for details.</p>
      </div>
    </section>
  );
}
