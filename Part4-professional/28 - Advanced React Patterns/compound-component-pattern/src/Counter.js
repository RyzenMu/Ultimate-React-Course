import { createContext, useContext, useState } from "react";

//1. Create a context
const CounterContext = createContext();

//2. create a parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  
  return (
    <div style={{backgroundColor: "lightgrey", padding: "20px", borderRadius: "10px"}}>
      <CounterContext.Provider value={{ count, increase, decrease }}>
        {children}
      </CounterContext.Provider>
    </div>
  );
}

//3. Create child components that will help implementing the common task
function Count() {
  const { count } = useContext(CounterContext);
  return <span style={{fontSize: "20px", fontWeight: "bold"}}>{count}</span>;
}

function Label({ children }) {
  return <span style={{fontSize: "20px", fontWeight: "bold"}}>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase} style={{fontSize: "20px", fontWeight: "bold"}}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease} style={{fontSize: "20px", fontWeight: "bold"}}>{icon}</button>;
}

//4. Add child components properties to parent component
Counter.Label = Label;
Counter.Count = Count;  
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
  