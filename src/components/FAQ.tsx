"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data";

export function FAQ() {
  const [open, setOpen] = useState(0);
  const half = Math.ceil(FAQS.length / 2);
  const cols = [FAQS.slice(0, half), FAQS.slice(half)];
  let gi = -1;

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" as const, maxWidth: 600, margin: "0 auto" }}>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>Good questions, straight answers</h2>
        </div>
        <div className="faq-grid">
          {cols.map((col, ci) => (
            <div className="faq-col" key={ci}>
              {col.map((f) => {
                gi += 1;
                const id = gi;
                const isOpen = open === id;
                return (
                  <div className={`faq-item ${isOpen ? "open" : ""}`} key={f.q}>
                    <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : id)} aria-expanded={isOpen}>
                      {f.q}
                      <span className="faq-ic">
                        {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                      </span>
                    </button>
                    <div className="faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
                      <div className="faq-a-inner">{f.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
