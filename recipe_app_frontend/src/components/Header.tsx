import { theme } from "../theme";

type HeaderProps = {
  onLogoClick?: () => void;
};

export function Header({ onLogoClick }: HeaderProps) {
  return (
    <header
      style={{
        background: theme.gradient,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div className="container" style={{ padding: "1.25rem 0" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={onLogoClick}
            aria-label="Go to home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <div
              aria-hidden
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background:
                  "conic-gradient(from 180deg at 50% 50%, rgba(37,99,235,.2), rgba(37,99,235,.6))",
                boxShadow: theme.shadows.md,
                display: "grid",
                placeItems: "center",
              }}
            >
              <span style={{ fontWeight: 800, color: theme.colors.primary }}>
                R
              </span>
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  color: theme.colors.text,
                  letterSpacing: 0.3,
                }}
              >
                Recipe Explorer
              </div>
              <div style={{ fontSize: ".85rem", color: theme.colors.mutedText }}>
                Ocean Professional
              </div>
            </div>
          </button>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <a
              href="#"
              className="btn ghost"
              aria-label="View favorites (placeholder)"
              onClick={(e) => e.preventDefault()}
            >
              Favorites
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
