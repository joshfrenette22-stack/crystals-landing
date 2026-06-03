"use client";
import { useRef, useCallback } from "react";
import { Truck, MapPin, Check } from "lucide-react";

const SPIN_START = 3.25;

function SoapSuds() {
  const suds = [
    { size: 52, x: "6%",  y: "14%",  opacity: 0.18, dur: "14s", delay: "0s",   drift: "sud-float-1" },
    { size: 28, x: "18%", y: "72%",  opacity: 0.22, dur: "11s", delay: "-3s",  drift: "sud-float-2" },
    { size: 72, x: "74%", y: "8%",   opacity: 0.12, dur: "18s", delay: "-6s",  drift: "sud-float-3" },
    { size: 20, x: "88%", y: "55%",  opacity: 0.25, dur: "10s", delay: "-1s",  drift: "sud-float-4" },
    { size: 38, x: "50%", y: "85%",  opacity: 0.15, dur: "16s", delay: "-8s",  drift: "sud-float-5" },
    { size: 16, x: "32%", y: "20%",  opacity: 0.28, dur: "9s",  delay: "-4s",  drift: "sud-float-6" },
    { size: 44, x: "92%", y: "80%",  opacity: 0.10, dur: "20s", delay: "-10s", drift: "sud-float-7" },
    { size: 24, x: "12%", y: "48%",  opacity: 0.20, dur: "12s", delay: "-2s",  drift: "sud-float-8" },
    { size: 60, x: "62%", y: "68%",  opacity: 0.08, dur: "22s", delay: "-14s", drift: "sud-float-1" },
    { size: 14, x: "42%", y: "38%",  opacity: 0.30, dur: "8s",  delay: "-5s",  drift: "sud-float-3" },
    { size: 34, x: "78%", y: "32%",  opacity: 0.14, dur: "15s", delay: "-7s",  drift: "sud-float-5" },
    { size: 18, x: "24%", y: "90%",  opacity: 0.24, dur: "13s", delay: "-9s",  drift: "sud-float-2" },
  ];

  return (
    <>
      {suds.map((s, i) => (
        <span
          key={i}
          className="soap-sud"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            opacity: s.opacity,
            animationName: s.drift,
            animationDuration: s.dur,
            animationDelay: s.delay,
          }}
        />
      ))}
    </>
  );
}

function HeroVideo({ videoRef, onEnded }: { videoRef: React.RefObject<HTMLVideoElement | null>; onEnded: () => void }) {
  return (
    <div className="hero-video-wrap" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        playsInline
        onEnded={onEnded}
      >
        <source src="/hero-washer.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = SPIN_START;
    v.play();
  }, []);

  return (
    <section className="hero-panel" id="top">
      <SoapSuds />

      {/* Desktop: video is absolutely positioned via CSS */}
      {/* Mobile: video flows in-document above the text content */}
      <HeroVideo videoRef={videoRef} onEnded={handleEnded} />

      <div className="container hp-container">
        <div className="hp-content">
          <span className="eyebrow on-dark">Crystals · since the neighborhood needed it</span>
          <div style={{ height: 20 }} />
          <h1 style={{ color: "#fff" }}>
            Fresh laundry,<br />the <span className="accent-italic">easy way</span>.
          </h1>
          <p className="hp-sub">
            Self-service laundromats with the biggest washers in town — plus wash &amp; fold, organic dry cleaning and doorstep pickup across the Front Range.
          </p>
          <div className="hp-actions">
            <a className="btn btn-primary btn-lg" href="#pickup"><Truck size={19} />Schedule a pickup</a>
            <a className="btn btn-ghost-light btn-lg" href="#locations"><MapPin size={18} />Find a location</a>
          </div>
          <div className="hp-chips">
            {["80 & 100 lb washers", "All-organic dry cleaning", "Open 7 days"].map((t) => (
              <span key={t} className="chip"><Check size={15} style={{ color: "var(--gold-500)" }} />{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
