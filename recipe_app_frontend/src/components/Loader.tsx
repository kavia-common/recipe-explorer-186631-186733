export function Loader({ label = "Loading…" }: { label?: string }) {
  return (
    <div style={{ display: "grid", placeItems: "center", padding: "2rem" }} role="status" aria-live="polite">
      <div
        aria-hidden
        style={{
          width: 28,
          height: 28,
          borderRadius: "999px",
          border: "3px solid rgba(37,99,235,0.2)",
          borderTopColor: "rgba(37,99,235,1)",
          animation: "spin 900ms linear infinite",
        }}
      />
      <div style={{ marginTop: ".75rem", color: "#6B7280" }}>{label}</div>
      <style>
        {`@keyframes spin { to { transform: rotate(360deg); } }`}
      </style>
    </div>
  );
}
