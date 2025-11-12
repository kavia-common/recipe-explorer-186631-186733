import { theme } from "../theme";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="card" style={{ padding: "2rem", textAlign: "center" }}>
      <div
        aria-hidden
        style={{
          width: 64,
          height: 64,
          marginInline: "auto",
          borderRadius: 16,
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(245,158,11,.15), rgba(37,99,235,.15))",
          display: "grid",
          placeItems: "center",
          marginBottom: "1rem",
        }}
      >
        <span role="img" aria-label="spoon" style={{ fontSize: 28 }}>
          🥄
        </span>
      </div>
      <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: ".25rem" }}>
        No recipes found
      </div>
      <div style={{ color: theme.colors.mutedText }}>{message}</div>
    </div>
  );
}
