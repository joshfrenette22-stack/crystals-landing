"use client";

export function FoldShowcase() {
  return (
    <section className="fold-section">
      <div className="container">
        <div className="fold-layout">
          <div className="fold-video-wrap">
            <video
              className="fold-video"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Clothes being carefully folded"
            >
              <source src="/fold.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="fold-text reveal">
            <span className="eyebrow">Handled with care</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Every piece, <span className="accent-italic">treated right</span>
            </h2>
            <p className="fold-body">
              From delicate blouses to heavy comforters, your clothes are sorted, washed at the right temperature, and folded with precision. No shortcuts, no cutting corners — just laundry done the way it should be.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
