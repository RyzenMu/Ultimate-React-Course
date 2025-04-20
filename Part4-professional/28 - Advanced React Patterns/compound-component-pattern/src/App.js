import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div style={{backgroundColor: "lightblue", padding: "20px", borderRadius: "10px"}}>
      <h1>Compound Component Pattern - </h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount='top'
      /> */}
      <Counter>
        <Counter.Label>My Super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <div>
      <Counter>
        <Counter.Label>My Super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      </div>
    </div>
  );
}
