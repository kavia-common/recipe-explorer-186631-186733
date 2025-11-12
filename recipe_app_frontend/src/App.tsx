import { useEffect, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { RecipeGrid } from "./components/RecipeGrid";
import { RecipeDetail } from "./components/RecipeDetail";
import { EmptyState } from "./components/EmptyState";
import { Loader } from "./components/Loader";
import { listRecipes, getRecipe } from "./services/api";
import type { Recipe } from "./mock/recipes";
import "./styles.css";

function useDebounced<T>(value: T, delay = 300): T {
  const [deb, setDeb] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDeb(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return deb;
}

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Recipe | null>(null);
  const debouncedQuery = useDebounced(query, 350);

  const load = async (q: string) => {
    setLoading(true);
    const data = await listRecipes(q);
    setRecipes(data);
    setLoading(false);
  };

  useEffect(() => {
    load(debouncedQuery);
  }, [debouncedQuery]);

  useEffect(() => {
    if (!selectedId) return setSelected(null);
    (async () => {
      const r = await getRecipe(selectedId);
      setSelected(r);
    })();
  }, [selectedId]);

  const hasResults = useMemo(() => recipes.length > 0, [recipes]);

  return (
    <div>
      <Header onLogoClick={() => { setQuery(""); }} />
      <main style={{ padding: "1.25rem 0" }}>
        <div className="container">
          <div
            className="card"
            style={{
              padding: "1.25rem",
              background:
                "linear-gradient(180deg, rgba(37,99,235,0.05), rgba(255,255,255,1))",
              marginBottom: "1rem",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Discover recipes</h1>
            <p style={{ margin: ".25rem 0 0", color: "#6B7280" }}>
              Browse curated dishes and find your next favorite meal.
            </p>
          </div>

          <SearchBar
            query={query}
            onChange={setQuery}
            onSubmit={() => load(query)}
          />

          {loading ? (
            <Loader />
          ) : hasResults ? (
            <RecipeGrid recipes={recipes} onSelect={(id) => setSelectedId(id)} />
          ) : (
            <EmptyState message="Try adjusting your search or exploring another keyword." />
          )}
        </div>
      </main>

      <footer style={{ padding: "2rem 0", color: "#6B7280", textAlign: "center" }}>
        <div className="container">© {new Date().getFullYear()} Recipe Explorer</div>
      </footer>

      <RecipeDetail recipe={selected} onClose={() => setSelectedId(null)} />
    </div>
  );
}
