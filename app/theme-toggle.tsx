"use client";

import { useEffect, useState } from "react";

// Toggles the `dark` class on <html>, which swaps the semantic tokens in globals.css.
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
  }

  return (
    <button type="button" onClick={toggle} aria-pressed={dark} className="btn btn-sm btn-outline">
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
