export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        background:
          "radial-gradient(60% 50% at 50% 0%, #18103a 0%, #05060c 70%)",
        color: "#c8f6ff",
        fontFamily: "ui-monospace, Menlo, Consolas, monospace",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* neon grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#22e3ff22 1px, transparent 1px), linear-gradient(90deg, #22e3ff22 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at 50% 40%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, #000 20%, transparent 75%)",
        }}
      />

      {/* robot */}
      <svg width="120" height="150" viewBox="0 0 120 150" fill="none" style={{ position: "relative", filter: "drop-shadow(0 0 8px #22e3ff)" }}>
        <line x1="60" y1="14" x2="60" y2="2" stroke="#22e3ff" strokeWidth="2" />
        <circle cx="60" cy="2" r="3" fill="#ff2d9b" />
        <rect x="30" y="14" width="60" height="44" rx="10" stroke="#22e3ff" strokeWidth="2" />
        <rect x="38" y="28" width="44" height="14" rx="7" fill="#040611" stroke="#22e3ff" strokeWidth="1.5" />
        <circle cx="60" cy="35" r="4" fill="#ff2d9b" />
        <rect x="24" y="66" width="72" height="56" rx="12" stroke="#a855f7" strokeWidth="2" />
        <circle cx="60" cy="94" r="11" stroke="#ff2d9b" strokeWidth="2" />
        <circle cx="60" cy="94" r="4" fill="#ff2d9b" />
        <line x1="40" y1="122" x2="40" y2="138" stroke="#22e3ff" strokeWidth="3" />
        <line x1="80" y1="122" x2="80" y2="138" stroke="#22e3ff" strokeWidth="3" />
      </svg>

      <h1
        style={{
          position: "relative",
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "0.1em",
          color: "#eafdff",
          textShadow: "0 0 18px #22e3ff",
          margin: 0,
        }}
      >
        JACK IN.
      </h1>

      <p style={{ position: "relative", color: "#ff2d9b", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "0.8rem" }}>
        ▰ system online · neon district
      </p>
    </main>
  );
}
