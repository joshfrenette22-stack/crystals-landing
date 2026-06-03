import { Truck, MapPin, Check } from "lucide-react";

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

export function Hero() {
  return (
    <section className="hero-panel" id="top">
      <Bubbles />

      {/* Video background — right side, blended into navy */}
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          <source src="/hero-washer.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
          {/* Right column is now the video — no photo/phone mock needed */}
          <div className="hp-right-spacer" />
        </div>
      </div>
    </section>
  );
}
