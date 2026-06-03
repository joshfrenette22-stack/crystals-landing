export function Logo({ dark = false, size = 30 }: { dark?: boolean; size?: number }) {
  const word = dark ? "#FFFFFF" : "var(--navy-900)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FCD24E" /><stop offset="1" stopColor="#E0A30C" />
          </linearGradient>
        </defs>
        <path d="M20 2.5 33 11v18L20 37.5 7 29V11L20 2.5Z" fill="url(#cg)" />
        <path d="M20 2.5 33 11l-13 6.5L7 11 20 2.5Z" fill="#FFE188" />
        <path d="M20 17.5 33 11v18L20 37.5V17.5Z" fill="#D8980A" opacity="0.55" />
        <path d="M20 2.5 33 11v18L20 37.5 7 29V11L20 2.5Z" stroke="rgba(11,32,51,0.18)" strokeWidth="1" />
        <path d="M20 2.5v35M7 11l13 6.5L33 11" stroke="rgba(255,255,255,0.5)" strokeWidth="0.9" />
      </svg>
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em", color: word }}>Crystals</span>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 8.5, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: dark ? "rgba(255,255,255,0.55)" : "var(--gray-400)", marginTop: 3 }}>
          Dry Cleaning · Laundromat
        </span>
      </span>
    </span>
  );
}
