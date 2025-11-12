import { theme } from "../theme";
import type { Recipe } from "../mock/recipes";

type Props = {
  recipe: Recipe;
  onClick: (_id: string) => void;
};

export function RecipeCard({ recipe, onClick }: Props) {
  return (
    <article
      className="card"
      style={{ overflow: "hidden", cursor: "pointer" }}
      onClick={() => onClick(recipe.id)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(recipe.id);
        }
      }}
      aria-label={`View details for ${recipe.title}`}
    >
      <div style={{ position: "relative" }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ width: "100%", height: 160, objectFit: "cover" }}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35))",
          }}
          aria-hidden
        />
        <div
          style={{
            position: "absolute",
            left: 12,
            bottom: 12,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <span className="badge" style={{ background: "rgba(255,255,255,.9)", border: "none" }}>
            ⏱ {recipe.timeMinutes} min
          </span>
          <span className="badge" style={{ background: "rgba(255,255,255,.9)", border: "none" }}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
      <div style={{ padding: "0.9rem 1rem 1.1rem" }}>
        <h3 style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.35 }}>{recipe.title}</h3>
        <p
          style={{
            margin: ".35rem 0 0",
            color: theme.colors.mutedText,
            fontSize: ".9rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {recipe.description}
        </p>
        <div style={{ marginTop: ".65rem", display: "flex", gap: 6, flexWrap: "wrap" }}>
          {recipe.tags.slice(0, 3).map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
