import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// PUBLIC_INTERFACE
export function bootstrap() {
  /** Bootstraps the React application into the #app element. */
  const el = document.getElementById("app");
  if (!el) {
    throw new Error("Mount container #app not found");
  }
  const root = createRoot(el);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}

// Configure source maps from env if supported by Vite build; dev server uses inline maps.
// VITE_ENABLE_SOURCE_MAPS should be handled in vite.config if needed; here we just note its presence.
if ((import.meta as any).env?.VITE_ENABLE_SOURCE_MAPS) {
  // No-op placeholder: Vite reads this in its config/build phase.
}

bootstrap();
