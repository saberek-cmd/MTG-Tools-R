"use client";

const THEMES = ["dimir", "izzet", "rakdos"];

export function ThemePicker() {
  function setTheme(theme: string) {
    document.body.setAttribute("data-theme", theme);
  }

  return (
    <div className="absolute right-4 top-4 flex gap-2">
      {THEMES.map((theme) => (
        <button
          key={theme}
          onClick={() => setTheme(theme)}
          className="h-5 w-5 rounded-full border border-white/20 bg-zinc-700 hover:scale-110 transition"
        />
      ))}
    </div>
  );
}
