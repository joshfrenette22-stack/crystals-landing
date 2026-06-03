import Image from "next/image";
import { MapPin } from "lucide-react";

const slots = [
  { cls: "g1", ph: "Storefront / exterior", img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=900&q=80&auto=format&fit=crop" },
  { cls: "g2", ph: "Rows of machines", img: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=900&q=80&auto=format&fit=crop" },
  { cls: "g3", ph: "The 100 lb washers", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=900&q=80&auto=format&fit=crop" },
  { cls: "g4", ph: "Folding & seating area", img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=900&q=80&auto=format&fit=crop" },
];

export function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="gal-head reveal">
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">Step inside</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>A clean, bright place <span className="accent-italic">to be</span></h2>
            <p className="section-lead">Spotless floors, fast wifi, flat-screen TVs and plenty of room to fold. Take a look around.</p>
          </div>
          <a className="btn btn-outline" href="#locations"><MapPin size={17} />Visit a location</a>
        </div>
        <div className="gal-grid reveal">
          {slots.map((s) => (
            <div key={s.cls} className={s.cls} style={{ position: "relative" }}>
              <Image src={s.img} alt={s.ph} fill className="gal-img" sizes="(max-width: 760px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
