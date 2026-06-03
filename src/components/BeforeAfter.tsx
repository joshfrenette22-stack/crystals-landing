"use client";
import { useRef, useState, useCallback, useEffect } from "react";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  }, [updatePos]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePos(e.clientX);
  }, [updatePos]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  /* keyboard a11y */
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
  }, []);

  /* animate the handle on mount to hint drag */
  const [hinted, setHinted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHinted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="ba-section">
      <div className="container">
        <div className="ba-header reveal">
          <span className="eyebrow">The Crystals difference</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            See what we mean by <span className="accent-italic">fresh</span>
          </h2>
          <p style={{ maxWidth: 440, marginTop: 12 }}>
            Drag the slider to reveal the transformation. Stains, odors, dingy whites — we handle it all.
          </p>
        </div>

        <div
          ref={containerRef}
          className={`ba-comp${hinted ? " ba-hinted" : ""}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="slider"
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {/* After (clean) — full background */}
          <div className="ba-layer ba-after">
            <img src="/clean-shirt.png" alt="Clean shirt after Crystals service" draggable={false} />
            <span className="ba-label ba-label-after">After</span>
          </div>

          {/* Before (dirty) — clipped by slider position */}
          <div className="ba-layer ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src="/dirty-shirt.png" alt="Dirty shirt before Crystals service" draggable={false} />
            <span className="ba-label ba-label-before">Before</span>
          </div>

          {/* Slider line + handle */}
          <div className="ba-slider" style={{ left: `${pos}%` }}>
            <div className="ba-line" />
            <div className="ba-handle">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="13" stroke="white" strokeWidth="2" />
                <path d="M10 10L6 14L10 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 10L22 14L18 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
