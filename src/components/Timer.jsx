function ModeToggle({
  mode,
  setMode,
}) {
  return (
    <div className="bg-[#FFF9F2] rounded-3xl p-2 flex shadow-md">

      <button
        onClick={() => setMode("focus")}
        className={`
          flex-1 py-4 rounded-2xl
          transition-all font-semibold

          ${
            mode === "focus"
              ? "bg-[#F8D8A3]"
              : ""
          }
        `}
      >
        🍅 Focus Time
      </button>

      <button
        onClick={() => setMode("break")}
        className={`
          flex-1 py-4 rounded-2xl
          transition-all font-semibold

          ${
            mode === "break"
              ? "bg-[#F8D8A3]"
              : ""
          }
        `}
      >
        ☕ Break Mode
      </button>

    </div>
  );
}

export default ModeToggle;