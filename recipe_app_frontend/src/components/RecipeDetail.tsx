import { useEffect } from "react";
import { theme } from "../theme";
import type { Recipe } from "../mock/recipes";

type Props = {
  recipe: Recipe | null;
  onClose: () => void;
};

export function RecipeDetail({ recipe, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const w: Window | undefined = typeof window !== "undefined" ? window : undefined;
    w?.addEventListener("keydown", onKey);
    return () => w?.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!recipe) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${recipe.title} details`}>
      <div className="modal">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
          <div style={{ position: "relative" }}>
            <img
              src={recipe.image}
              alt=""
              style={{ width: "100%", height: 260, objectFit: "cover" }}
            />
            <button
              className="btn ghost"
              onClick={onClose}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(6px)",
              }}
            >
              Close
            </button>
          </div>
          <div style={{ padding: "1.25rem" }}>
            <h2 style={{ margin: 0 }}>{recipe.title}</h2>
            <p style={{ color: theme.colors.mutedText, marginTop: ".35rem" }}>
              {recipe.description}
            </p>

            <div style={{ display: "flex", gap: 8, marginTop: ".5rem", flexWrap: "wrap" }}>
              <span className="badge">⏱ {recipe.timeMinutes} min</span>
              <span className="badge">{recipe.difficulty}</span>
              {recipe.tags.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <section>
                <h3 style={{ marginBottom: ".5rem" }}>Ingredients</h3>
                <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} style={{ marginBottom: ".25rem" }}>
                      {ing}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 style={{ marginBottom: ".5rem" }}>Instructions</h3>
                <ol style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx} style={{ marginBottom: ".4rem" }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
