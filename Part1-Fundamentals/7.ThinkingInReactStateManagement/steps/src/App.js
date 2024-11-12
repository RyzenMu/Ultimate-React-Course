import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in Content</p>
        <p> 🦇 </p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read the children prop</p>
        <p> 🐦 </p>
      </StepMessage>
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "jonas" });

  function handlePrevious() {
    if (step > 1) setStep((curstep) => curstep - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    }
    // step = step + 1;
    // setTest({ name: "muruga" });
  }

  return (
    <div>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <h1>Hello React!</h1>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor={"#123456"}
                bgColor={"#789012"}
                onClick={() => alert("Learn how to ")}
              >
                {" "}
                <span>👈</span> Learn
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              textColor={"#7950f2"}
              bgColor={"#ffffff"}
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              textColor={"#7950f2"}
              bgColor={"#ffffff"}
              onClick={handleNext}
            >
              next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
