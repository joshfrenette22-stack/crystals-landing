"use client";
import { useState, useEffect } from "react";
import { Phone, Truck, Plus, Minus } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, BRAND } from "@/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  const onDark = !scrolled;

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""} ${onDark ? "ondark" : ""}`}>
        <div className="nav-inner">
          <a href="#top" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
            <Logo dark={onDark} />
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <div className="nav-actions">
            <a className="nav-call" href={BRAND.phoneHref}>
              <Phone size={18} /><span>{BRAND.phone}</span>
            </a>
            <a className="btn btn-primary btn-sm" href="#pickup">
              <Truck size={17} />Schedule pickup
            </a>
            <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              {open ? <Minus size={26} /> : <Plus size={26} />}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="nav-sheet">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <div style={{ paddingTop: 12 }}>
            <a className="btn btn-primary btn-lg" href={BRAND.phoneHref} onClick={() => setOpen(false)} style={{ width: "100%", justifyContent: "center" }}>
              <Phone size={18} />Call {BRAND.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
