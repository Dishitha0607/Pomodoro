import { useState } from "react";

import Timer from "./components/Timer";
import TimerCard from "./components/TimerCard";
import Controls from "./components/Controls";
import ModeToggle from "./components/ModeToggle";

function App() {
  const [mode, setMode] = useState("focus");
  const [isRunning, setIsRunning] = useState(false);

  return (
    <Timer mode={mode} isRunning={isRunning} setIsRunning={setIsRunning}>
      {({ timeLeft, handleReset }) => (
        <main className="min-h-screen bg-[#FDF6EC] flex items-center justify-center p-6">
          <div className="bg-[#ECE3D1] rounded-[40px] p-10 shadow-lg w-[380px]">
            <img
              src={isRunning ? "/oven2.png" : "/oven1.png"}
              alt="oven"
              className="w-[240px] h-[240px] object-contain"
            />

            <TimerCard timeLeft={timeLeft} mode={mode} />

            <div className="mt-8">
              <Controls
                onStart={() => setIsRunning(true)}
                onPause={() => setIsRunning(false)}
                onReset={handleReset}
              />
            </div>

            <div className="mt-8">
              <ModeToggle mode={mode} setMode={setMode} />
            </div>
          </div>
        </main>
      )}
    </Timer>
  );
}

export default App;
