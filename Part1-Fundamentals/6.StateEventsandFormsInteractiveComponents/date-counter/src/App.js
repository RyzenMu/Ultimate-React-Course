import "./App.css";
import { useState } from "react";

export default function AppV3() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  return (
    <div>
      <div>TEST</div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        <button onClick={() => setStep(step - 1)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span> Count : {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}
