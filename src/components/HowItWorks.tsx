import { Phone, WashingMachine, Truck } from "lucide-react";
import { STEPS } from "@/data";

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container" id="pickup">
        <div className="reveal" style={{ marginBottom: 44, maxWidth: 600 }}>
          <span className="eyebrow">Pickup &amp; delivery</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            We&rsquo;ll do the laundry. <span className="accent-italic">You do you.</span>
          </h2>
          <p className="section-lead">Door-to-door wash &amp; fold powered by HappyNest — fresh laundry without leaving home.</p>
        </div>
        <div className="how-wrap">
          <div className="how-steps stagger">
            {STEPS.map((s, i) => (
              <div className="how-step reveal" key={s.title} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <div className="how-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="how-cta reveal">
            <div className="how-cta-inner">
              <h3>Ready when you are</h3>
              <p>Set up a one-time or recurring pickup in under a minute. We&rsquo;ll take it from there.</p>
              <div className="how-phones">
                <a href="tel:+18553359274">
                  <span className="pl"><Phone size={18} /></span>
                  <span><small>Pickup &amp; delivery</small>855-335-9274</span>
                </a>
                <a href="tel:+13034220784">
                  <span className="pl"><WashingMachine size={18} /></span>
                  <span><small>Laundromat &amp; dry cleaning</small>303-422-0784</span>
                </a>
              </div>
              <a className="btn btn-primary btn-lg" href="https://www.happynest.com" target="_blank" rel="noopener">
                <Truck size={19} />Schedule with HappyNest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
