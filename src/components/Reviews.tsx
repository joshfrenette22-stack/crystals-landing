"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import { REVIEWS } from "@/data";

export function Reviews() {
  const [idx, setIdx] = useState(0);
  const n = REVIEWS.length;
  const go = (d: number) => setIdx((i) => (i + d + n) % n);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 6500);
    return () => clearInterval(t);
  }, [n]);

  return (
    <section className="section" id="reviews" style={{ background: "var(--navy-900)" }}>
      <div className="container">
        <div className="rev-head reveal">
          <div>
            <span className="eyebrow on-dark">Reviews</span>
            <h2 className="section-title" style={{ marginTop: 14, color: "#fff" }}>Neighbors who keep coming back</h2>
          </div>
          <div className="rev-ctrl">
            <button className="rev-btn" onClick={() => go(-1)} aria-label="Previous" style={{ transform: "scaleX(-1)" }}>
              <ArrowRight size={20} />
            </button>
            <button className="rev-btn" onClick={() => go(1)} aria-label="Next">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="rev-stage reveal">
          <div className="rev-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {REVIEWS.map((r, i) => (
              <div className="rev-slide" key={i}>
                <div className="rev-card">
                  <div className="rev-quotemark"><Quote size={40} /></div>
                  <div className="rev-stars">
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} size={18} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <div className="rev-text">{r.quote}</div>
                  <div className="rev-by">
                    <span className="rev-av">{r.name[0]}</span>
                    <span>
                      <div className="rev-name">{r.name}</div>
                      <div className="rev-meta">{r.meta}</div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rev-dots">
            {REVIEWS.map((_, i) => (
              <button key={i} className={`rev-dot ${i === idx ? "on" : ""}`} onClick={() => setIdx(i)} aria-label={`Review ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
