import { Truck, Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
      <path d="M14 8.5h2V5.5h-2.2C11.5 5.5 10 7 10 9.3v1.7H8v3h2v6h3v-6h2.2l.5-3H13V9.2c0-.5.3-.7.9-.7Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS, SERVICES } from "@/data";

export function Footer() {
  return (
    <>
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="section-title">Fresh laundry is one tap away</h2>
            <p>Schedule a pickup, or stop by either location — open every day, 6am to 9pm.</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="btn btn-navy btn-lg" href="#pickup"><Truck size={19} />Schedule a pickup</a>
            <a className="btn btn-lg" href={BRAND.phoneHref} style={{ background: "#fff", color: "var(--navy-900)" }}>
              <Phone size={18} />{BRAND.phone}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-col">
              <Logo dark />
              <p className="foot-blurb">Locally owned dry cleaning and laundromats serving Wheat Ridge, Wellington and the Colorado Front Range. Clean, fast and friendly — the easy way.</p>
              <div className="foot-social">
                <a href="https://facebook.com/FluffAndFoldLaundromat" target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon size={18} /></a>
                <a href="https://instagram.com/flufffoldlaundry" target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon size={18} /></a>
              </div>
            </div>
            <div className="foot-col">
              <h5>Services</h5>
              <ul>{SERVICES.map((s) => <li key={s.name}><a href="#services">{s.name}</a></li>)}</ul>
            </div>
            <div className="foot-col">
              <h5>Explore</h5>
              <ul>
                {NAV_LINKS.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Get in touch</h5>
              <div className="foot-contact">
                <a href={BRAND.phoneHref}><Phone size={18} />{BRAND.phone}</a>
                <a href="tel:+18553359274"><Truck size={18} />855-335-9274 · pickup</a>
                <a href={`mailto:${BRAND.email}`}><Mail size={18} />{BRAND.email}</a>
                <a href="#locations"><MapPin size={18} />7180 W 44th Ave, Wheat Ridge</a>
                <a href="#locations"><MapPin size={18} />8130 6th St, Wellington</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>&copy; {new Date().getFullYear()} Crystals Dry Cleaning &amp; Laundromat · MCDS Laundry LLC. All rights reserved.</span>
            <span style={{ display: "flex", gap: 18 }}>
              <a href="#">Privacy</a><a href="#">Terms</a><a href="#locations">Accessibility</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
