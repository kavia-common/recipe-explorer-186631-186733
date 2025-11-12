import { useEffect, useRef } from "react";
import { theme } from "../theme";

type SearchBarProps = {
  query: string;
  onChange: (_q: string) => void;
  onSubmit: () => void;
};

export function SearchBar({ query, onChange, onSubmit }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!query && inputRef.current) {
      inputRef.current.focus();
    }
  }, [query]);

  return (
    <form
      role="search"
      aria-label="Recipe search"
      className="card"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      style={{
        padding: "1rem",
        background: theme.colors.surface,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: ".75rem",
          alignItems: "center",
        }}
      >
        <label htmlFor="search" className="sr-only">
          Search recipes
        </label>
        <input
          id="search"
          ref={inputRef}
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search recipes (e.g., salmon, pasta, tacos)"
          className="input"
          aria-describedby="search-help"
        />
        <button className="btn" type="submit" aria-label="Search">
          Search
        </button>
      </div>
      <div id="search-help" style={{ marginTop: ".5rem", color: theme.colors.mutedText, fontSize: ".85rem" }}>
        Tip: Try keywords or tags like “vegetarian”, “chicken”, “healthy”.
      </div>
    </form>
  );
}
