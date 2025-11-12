import { filterMockRecipes, MOCK_RECIPES, type Recipe } from "../mock/recipes";

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE ||
  (import.meta as any).env?.VITE_BACKEND_URL ||
  "";

const doFetch: typeof fetch | undefined =
  typeof globalThis !== "undefined" && typeof (globalThis as any).fetch === "function"
    ? (globalThis as any).fetch
    : undefined;

// PUBLIC_INTERFACE
export async function listRecipes(query: string = ""): Promise<Recipe[]> {
  /** Returns a list of recipes from API if available, otherwise from mock data. */
  if (!API_BASE || !doFetch) {
    // Mock fallback
    return new Promise((resolve) =>
      setTimeout(() => resolve(filterMockRecipes(query)), 200)
    );
  }
  try {
    const url = new URL("/recipes", API_BASE);
    if (query) url.searchParams.set("q", query);
    const res = await doFetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data as Recipe[];
  } catch {
    return filterMockRecipes(query);
  }
}

// PUBLIC_INTERFACE
export async function getRecipe(id: string): Promise<Recipe | null> {
  /** Returns a recipe by id from API if available, otherwise from mock data. */
  if (!API_BASE || !doFetch) {
    const found = MOCK_RECIPES.find((r) => r.id === id) || null;
    return new Promise((resolve) => setTimeout(() => resolve(found), 150));
  }
  try {
    const url = new URL(`/recipes/${id}`, API_BASE);
    const res = await doFetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as Recipe;
    return data;
  } catch {
    return MOCK_RECIPES.find((r) => r.id === id) || null;
  }
}
