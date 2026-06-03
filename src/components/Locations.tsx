import Image from "next/image";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { LOCATIONS, BRAND } from "@/data";

export function Locations() {
  return (
    <section className="section" id="locations" style={{ background: "var(--stone-100)" }}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: 600 }}>
          <span className="eyebrow">Visit us</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>Two convenient Colorado locations</h2>
          <p className="section-lead">Same friendly service in Wheat Ridge and Wellington — plus pickup &amp; delivery across the Front Range.</p>
        </div>
        <div className="loc-wrap">
          {LOCATIONS.map((l, i) => (
            <div className="loc-card reveal" key={l.name} style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
              <div className="loc-photo-wrap">
                <div className="loc-photo">
                  <Image src={l.image} alt={`${l.name} storefront`} fill style={{ objectFit: "cover" }} sizes="(max-width: 860px) 100vw, 50vw" />
                </div>
                <a className="loc-maplink" href={l.mapUrl} target="_blank" rel="noopener">
                  <Navigation size={15} />View map
                </a>
              </div>
              <div className="loc-body">
                <span className="loc-role">{l.role}</span>
                <h3>{l.name}</h3>
                <div className="loc-row">
                  <MapPin size={18} />
                  <span>{l.address}<br /><span style={{ color: "var(--fg-4)", fontSize: 13 }}>{l.cross}</span></span>
                </div>
                {l.hours.map((h) => (
                  <div className="loc-row" key={h}><Clock size={18} /><span>{h}</span></div>
                ))}
                <div className="loc-row">
                  <Phone size={18} />
                  <a href={BRAND.phoneHref} style={{ color: "var(--navy-900)", fontWeight: 700, textDecoration: "none" }}>{l.phone}</a>
                </div>
                <div className="loc-actions">
                  <a className="btn btn-primary btn-sm" href={l.mapUrl} target="_blank" rel="noopener">
                    <Navigation size={17} />Get directions
                  </a>
                  <a className="btn btn-outline btn-sm" href={BRAND.phoneHref}><Phone size={16} />Call</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
