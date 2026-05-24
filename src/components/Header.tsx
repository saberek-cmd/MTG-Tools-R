import { ThemePicker } from "./ThemePicker";

export function Header() {
  return (
    <header className="border-b border-yellow-700/30 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center relative">
        <ThemePicker />

        <div className="mb-5 flex justify-center gap-2">
          {["W", "U", "B", "R", "G"].map((mana) => (
            <div
              key={mana}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-zinc-800 text-sm font-bold"
            >
              {mana}
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-black tracking-[.15em] text-yellow-300 uppercase">
          Draft Cost Calculator
        </h1>

        <p className="mt-3 text-zinc-400 italic">
          Plan your Magic: The Gathering draft event
        </p>
      </div>
    </header>
  );
}
