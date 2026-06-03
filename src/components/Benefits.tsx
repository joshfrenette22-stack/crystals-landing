import { Scale, Leaf, CreditCard, Truck, Wifi, Clock, Sparkles, BadgeCheck } from "lucide-react";
import { BENEFITS } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Scale, Leaf, CreditCard, Truck, Wifi, Clock, Sparkles, BadgeCheck,
};

export function Benefits() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="why-head reveal">
          <span className="eyebrow">Why Crystals</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            Everything your laundry needs, <span className="accent-italic">in one place</span>
          </h2>
          <p className="section-lead">Big machines, fair prices and friendly people — whether you do it yourself or hand it to us.</p>
        </div>
        <div className="why-grid stagger">
          {BENEFITS.map((b, i) => {
            const IconComp = iconMap[b.icon];
            return (
              <div className="why-card reveal" key={b.title} style={{ "--d": `${(i % 4) * 60}ms` } as React.CSSProperties}>
                <div className="why-top">
                  {IconComp && <IconComp size={26} strokeWidth={1.5} />}
                  <span className="why-idx">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
