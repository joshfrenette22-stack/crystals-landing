import { Building2, MapPin, Scale, Sparkles, Shirt, BadgeCheck, Leaf, Droplets, Clock } from "lucide-react";
import { VERTICALS } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Building2, MapPin, Scale, Sparkles, Shirt, BadgeCheck, Leaf, Droplets, Clock,
};

export function TrustBar() {
  const items = [...VERTICALS, ...VERTICALS];
  return (
    <section className="trust">
      <div className="trust-head">Trusted by Front Range households &amp; businesses</div>
      <div className="trust-marquee">
        <div className="trust-track">
          {items.map((v, i) => {
            const IconComp = iconMap[v.icon];
            return (
              <span className="trust-chip" key={i}>
                {IconComp && <IconComp size={17} />}
                {v.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
