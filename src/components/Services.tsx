import { WashingMachine, Shirt, Leaf, Truck, Building2, ArrowRight, Phone } from "lucide-react";
import { SERVICES } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  WashingMachine, Shirt, Leaf, Truck, Building2,
};

export function Services() {
  return (
    <section className="section" id="services" style={{ background: "var(--stone-100)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }} className="reveal">
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">What we do</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Five services, one trusted local team</h2>
          </div>
          <a className="btn btn-navy" href="#pickup">Request a commercial quote</a>
        </div>
        <div className="svc-grid stagger">
          {SERVICES.map((s, i) => {
            const IconComp = iconMap[s.icon];
            return (
              <div className={`svc-card reveal ${i === 1 ? "feature" : ""}`} key={s.name} style={{ "--d": `${(i % 3) * 80}ms` } as React.CSSProperties}>
                <div className="svc-top">
                  {IconComp && <IconComp size={30} strokeWidth={1.5} />}
                  <span className="svc-idx">{String(i + 1).padStart(2, "0")} / 05</span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <ul className="svc-points">
                  {s.points.map((p) => (
                    <li key={p}><span className="svc-dash" />{p}</li>
                  ))}
                </ul>
                <a className="svc-link" href="#pickup">Learn more <ArrowRight size={16} /></a>
              </div>
            );
          })}
          <div className="svc-end reveal">
            <span className="eyebrow">Not sure which?</span>
            <h4>Tell us what you need.</h4>
            <p>We&rsquo;ll point you to the right service or write up a free commercial quote.</p>
            <a className="btn btn-primary btn-sm" href="tel:+13034220784"><Phone size={16} />Call 303-422-0784</a>
          </div>
        </div>
      </div>
    </section>
  );
}
