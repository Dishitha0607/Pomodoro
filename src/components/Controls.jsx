function Controls({
  onStart,
  onPause,
  onReset,
}) {
  return (
    <div className="flex justify-between">

      <img
        src="/start.png"
        alt="start"
        onClick={onStart}
        className="
          w-24 cursor-pointer
          active:translate-y-1
          transition-all
        "
      />

      <img
        src="/pause.png"
        alt="pause"
        onClick={onPause}
        className="
          w-24 cursor-pointer
          active:translate-y-1
          transition-all
        "
      />

      <img
        src="/reset.png"
        alt="reset"
        onClick={onReset}
        className="
          w-24 cursor-pointer
          active:translate-y-1
          transition-all
        "
      />

    </div>
  );
}

export default Controls;