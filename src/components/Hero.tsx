import { ArrowRight, Truck, MapPin, Check } from "lucide-react";
import Image from "next/image";
import { WashingMachine, Phone as PhoneIcon } from "lucide-react";

function Bubbles() {
  const specs: [number, number, string, string][] = [
    [40, 0.08, "8%", "12%"], [22, 0.4, "18%", "78%"], [64, 0.3, "72%", "8%"],
    [16, 0.55, "86%", "60%"], [30, 0.35, "50%", "90%"],
  ];
  return (
    <>
      {specs.map(([d, o, t, l], i) => (
        <span key={i} className="bubble" style={{
          width: d, height: d, top: t, left: l,
          background: `rgba(63,182,196,${o})`,
          border: `1.5px solid rgba(63,182,196,${Math.min(o + 0.2, 0.9)})`,
        }} />
      ))}
    </>
  );
}

function PhoneMock() {
  return (
    <div style={{
      position: "absolute", left: -34, bottom: 30, width: 132, height: 262,
      background: "var(--navy-900)", borderRadius: 26, border: "6px solid #1b2c3e",
      boxShadow: "var(--shadow-xl)", padding: 12,
      display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 4,
    }}>
      <div style={{ width: 38, height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 3, marginTop: 2 }} />
      <div style={{ marginTop: 10, color: "var(--gold-300)" }}><Truck size={26} /></div>
      <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 9.5, fontWeight: 700, textAlign: "center" as const, lineHeight: 1.3, padding: "0 6px" }}>Schedule a pickup</div>
      <div style={{
        width: 70, height: 70, background: "#fff", borderRadius: 8,
        display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridTemplateRows: "repeat(5,1fr)",
        padding: 5, gap: 1.5, marginTop: 2,
      }}>
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} style={{
            background: [0, 1, 2, 4, 5, 8, 10, 12, 14, 15, 18, 20, 21, 22, 24, 6, 16, 9, 13].includes(i) ? "var(--navy-900)" : "transparent",
            borderRadius: 1,
          }} />
        ))}
      </div>
      <div style={{ marginTop: "auto", marginBottom: 6, fontSize: 8, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>HappyNest</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-panel" id="top">
      <Bubbles />
      <div className="container">
        <div className="hp-grid">
          <div style={{ position: "relative" }}>
            <span className="eyebrow on-dark">Crystals · since the neighborhood needed it</span>
            <div style={{ height: 20 }} />
            <h1 style={{ color: "#fff" }}>
              Fresh laundry,<br />the <span className="accent-italic">easy way</span>.
            </h1>
            <p className="hp-sub">
              Self-service laundromats with the biggest washers in town — plus wash &amp; fold, organic dry cleaning and doorstep pickup across the Front Range.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30 }}>
              <a className="btn btn-primary btn-lg" href="#pickup"><Truck size={19} />Schedule a pickup</a>
              <a className="btn btn-ghost-light btn-lg" href="#locations"><MapPin size={18} />Find a location</a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}>
              {["80 & 100 lb washers", "All-organic dry cleaning", "Open 7 days"].map((t) => (
                <span key={t} className="chip"><Check size={15} style={{ color: "var(--gold-500)" }} />{t}</span>
              ))}
            </div>
          </div>
          <div className="hp-right">
            <div className="hp-note">drop &amp; go<ArrowRight size={18} /></div>
            <div className="hero-photo">
              <Image
                src="https://images.unsplash.com/photo-1775210727648-9456f74dee90?w=1200&q=80&auto=format&fit=crop"
                alt="Crystals laundromat interior"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <PhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}
