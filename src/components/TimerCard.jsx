function TimerCard({ timeLeft, mode }) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-[#FFF9F2] rounded-3xl p-6 text-center shadow-md">
      <h2 className="text-7xl font-black text-[#5C3D2E]">
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h2>

      <p className="text-[#7A4B3A] font-semibold mt-2">
        {mode === "focus"
          ? "Focus Time 🍅"
          : "Break Time ☕"}
      </p>
    </div>
  );
}

export default TimerCard;