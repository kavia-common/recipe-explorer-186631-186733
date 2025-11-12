import type { Recipe } from "../mock/recipes";
import { RecipeCard } from "./RecipeCard";

type Props = {
  recipes: Recipe[];
  onSelect: (_id: string) => void;
};

export function RecipeGrid({ recipes, onSelect }: Props) {
  return (
    <section aria-label="Recipe results" style={{ marginTop: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        {recipes.map((r: Recipe) => (
          <RecipeCard key={r.id} recipe={r} onClick={onSelect} />
        ))}
      </div>
    </section>
  );
}
