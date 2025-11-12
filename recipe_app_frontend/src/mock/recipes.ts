export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  timeMinutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  ingredients: string[];
  instructions: string[];
};

export const MOCK_RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Lemon Herb Grilled Salmon",
    description: "Citrus-kissed salmon with fresh herbs and a light glaze.",
    image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800&auto=format&fit=crop",
    timeMinutes: 25,
    difficulty: "Easy",
    tags: ["Seafood", "Healthy"],
    ingredients: [
      "4 salmon fillets",
      "2 lemons (zest + juice)",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "Fresh dill & parsley",
      "Salt & pepper",
    ],
    instructions: [
      "Preheat grill to medium-high and oil grates.",
      "Whisk lemon juice, zest, olive oil, garlic, salt and pepper.",
      "Brush salmon with mixture and grill 4–5 minutes per side.",
      "Garnish with chopped dill and parsley, serve with lemon wedges.",
    ],
  },
  {
    id: "2",
    title: "Creamy Mushroom Pasta",
    description: "Silky pasta with a rich mushroom and parmesan sauce.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
    timeMinutes: 30,
    difficulty: "Medium",
    tags: ["Vegetarian", "Comfort"],
    ingredients: [
      "300g pasta",
      "300g mixed mushrooms, sliced",
      "2 tbsp butter",
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "200ml cream",
      "50g parmesan, grated",
      "Salt, pepper, parsley",
    ],
    instructions: [
      "Cook pasta in salted water until al dente; reserve 1/2 cup pasta water.",
      "Sauté mushrooms in butter and oil until browned.",
      "Add garlic, then cream; simmer gently.",
      "Stir in parmesan and adjust with pasta water.",
      "Toss pasta in sauce, season, and garnish with parsley.",
    ],
  },
  {
    id: "3",
    title: "Crispy Chicken Tacos",
    description: "Spiced crispy chicken with fresh toppings in warm tortillas.",
    image: "https://images.unsplash.com/photo-1601050690597-9fd6767f2383?q=80&w=800&auto=format&fit=crop",
    timeMinutes: 35,
    difficulty: "Easy",
    tags: ["Chicken", "Mexican"],
    ingredients: [
      "500g chicken thighs, sliced",
      "2 tsp chili powder",
      "1 tsp cumin",
      "Salt & pepper",
      "Corn tortillas",
      "Shredded lettuce, tomatoes, avocado",
      "Sour cream or crema",
    ],
    instructions: [
      "Season chicken with spices, salt, and pepper.",
      "Pan-fry on medium-high until crispy and cooked through.",
      "Warm tortillas and assemble with toppings.",
      "Drizzle with crema and serve with lime.",
    ],
  },
];

export function filterMockRecipes(query: string): Recipe[] {
  if (!query.trim()) return MOCK_RECIPES;
  const q = query.toLowerCase();
  return MOCK_RECIPES.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q))
  );
}
