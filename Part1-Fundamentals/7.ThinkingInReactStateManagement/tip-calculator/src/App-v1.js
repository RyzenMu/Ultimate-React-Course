import { useState } from "react";

export default function AppV3() {
  const [amt, setAmt] = useState(0);
  const [tipM, setTipM] = useState(0);
  const [tipA, setTipA] = useState(0);

  let tip = (tipA + tipM) / 2;
  let res = amt + (amt * tip) / 100;

  return (
    <div className="App">
      <Bill amt={amt} onAmt={setAmt} />
      <Tip name="muruga" onTip={setTipM} />
      <Tip name="other" onTip={setTipA} />
      <Result res={res} />
    </div>
  );
}

function Bill({ amt, onAmt }) {
  return (
    <div>
      Your amount is{" "}
      <input
        type="number"
        value={amt}
        onChange={(e) => onAmt(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ name, onTip }) {
  return (
    <div>
      {name}
      <select onChange={(e) => onTip(Number(e.target.value))}>
        <option value={10}>10%</option>
        <option value={20}>20%</option>
      </select>
    </div>
  );
}

function Result({ res }) {
  return <div>Result is {res}</div>;
}
