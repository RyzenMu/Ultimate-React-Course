import { useState } from "react";
import "./App.css";

function AppV3() {
  const [count, setCount] = useState(0); // Move count state to AppV3 component

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Steps />
      <Counts count={count} setCount={setCount} /> {/* Pass count and setCount as props */}
      <Message count={count} /> {/* Pass count as prop */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(0);
  return (
    <div className="center">
      <button onClick={() => setStep(step - 1)}>-</button>
      <h1>Step: {step}</h1>
      <button onClick={() => setStep(step + 1)}>+</button>
    </div>
  );
}

function Counts({ count, setCount }) { // Receive count and setCount as props
  return (
    <div className="center">
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function Message({ count }) { // Receive count as prop
  const today = new Date();
  const resultDate = new Date(today.setDate(today.getDate() + count)).toLocaleDateString();
  
  return (
    <div className="count">
      <h1>
        {count} days from today is {resultDate}
      </h1>
    </div>
  );
}

export default App;
