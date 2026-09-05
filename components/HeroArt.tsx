export default function HeroArt() {
  return (
    <svg
      className="hero-art-svg"
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Curiosity and craft come together in a product that creates impact"
    >
      <defs>
        <linearGradient id="productLandscape" x1="120" y1="116" x2="220" y2="174" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--studio-orange)" stopOpacity="0.25" />
          <stop offset="1" stopColor="var(--studio-art)" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Construction bracket corners around the whole composition */}
      <g className="hero-brackets" stroke="var(--studio-line)" strokeWidth="1">
        <path d="M20 45 V20 H45" />
        <path d="M295 20 H320 V45" />
        <path d="M20 275 V300 H45" />
        <path d="M295 300 H320 V275" />
      </g>

      {/* Central product window under construction */}
      <g className="construct-product">
        <rect className="product-frame" x="106" y="78" width="128" height="168" rx="12" fill="hsl(var(--background))" stroke="var(--studio-orange)" strokeOpacity="0.65" strokeWidth="1.5" />
        {/* Window chrome */}
        <path d="M106 103 H234" stroke="var(--studio-line)" />
        <circle cx="120" cy="91" r="2.5" fill="var(--studio-art)" />
        <circle cx="130" cy="91" r="2.5" fill="var(--studio-line)" />
        <circle cx="140" cy="91" r="2.5" fill="var(--studio-line)" />
        <path d="M204 91 H220" stroke="var(--studio-line)" strokeLinecap="round" />

        {/* UI placeholders */}
        <rect x="120" y="116" width="100" height="58" rx="5" fill="url(#productLandscape)" />
        <circle cx="196" cy="132" r="7" fill="var(--studio-orange)" fillOpacity="0.8" />
        <path d="M125 168 L151 137 L172 158 L183 148 L215 168" stroke="var(--studio-orange)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M121 188 H190" stroke="hsl(var(--foreground))" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
        <path d="M121 198 H211 M121 205 H181" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
        <rect x="120" y="218" width="66" height="16" rx="4" fill="var(--studio-orange)" />
        <path d="M130 226 H160 M168 223 L171 226 L168 229" stroke="hsl(var(--background))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Impact core */}
      <g stroke="var(--studio-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="212" cy="226" r="7" strokeOpacity="0.4" />
        <path d="M209 226 L211 228 L215 224" />
      </g>

      {/* Curiosity node */}
      <g className="hero-node node-curiosity">
        <circle cx="52" cy="110" r="20" stroke="var(--studio-line)" strokeWidth="1.5" fill="hsl(var(--background))" />
        <g className="hero-node-icon" stroke="var(--studio-orange)" strokeWidth="2" strokeLinecap="round">
          <circle cx="50" cy="108" r="6" />
          <path d="M55 113 L61 119" />
        </g>
        <text x="52" y="146" textAnchor="middle" fontSize="9" letterSpacing="0.05em">curiosity</text>
      </g>

      {/* Craft node */}
      <g className="hero-node node-craft">
        <rect x="32" y="210" width="40" height="40" rx="8" stroke="var(--studio-line)" strokeWidth="1.5" fill="hsl(var(--background))" />
        <g className="hero-node-icon" stroke="var(--studio-orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M45 225 L40 230 L45 235 M59 225 L64 230 L59 235 M55 223 L49 237" />
        </g>
        <text x="52" y="266" textAnchor="middle" fontSize="9" letterSpacing="0.05em">craft</text>
      </g>

      {/* Impact node */}
      <g className="hero-node node-impact">
        <circle cx="286" cy="160" r="20" stroke="var(--studio-orange)" strokeWidth="1.5" fill="hsl(var(--background))" />
        <g className="hero-node-icon" stroke="var(--studio-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M276 164 L282 158 L287 162 L296 153 M289 153 H296 V160" />
        </g>
        <text x="286" y="196" textAnchor="middle" fontSize="9" letterSpacing="0.05em">impact</text>
      </g>

      {/* Connecting paths */}
      <g className="hero-connections" stroke="var(--studio-orange)" strokeWidth="1.5" fill="none">
        <path className="hero-connection path-curiosity" d="M72 110 C90 110 88 130 106 130" pathLength="100" />
        <path className="hero-connection path-craft" d="M72 230 C92 230 86 208 106 208" pathLength="100" />
        <path className="hero-connection path-impact" d="M234 160 H266" pathLength="100" />
        <path className="hero-signal path-curiosity" d="M72 110 C90 110 88 130 106 130" pathLength="100" />
        <path className="hero-signal path-craft" d="M72 230 C92 230 86 208 106 208" pathLength="100" />
        <path className="hero-signal path-impact" d="M234 160 H266" pathLength="100" />
      </g>
    </svg>
  );
}
