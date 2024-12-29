import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputCurrencyValue, setInputCurrencyValue] = useState(0);
  const [outputCurrencyValue, setOutputCurrencyValue] = useState(0);
  const [data, setData] = useState(null);
  const [inputCurrencyType, setInputCurrencyType] = useState(0);
  const [outputCurrencyType, setOutputCurrencyType] = useState(0);

  useEffect(function () {
    async function fetchCurrency() {
      try {
        const res = await fetch(`https://api.frankfurter.app/current`);
        const data = await res.json();
        setData(data.rates);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCurrency();
  }, []);

  // function convertor() {
  //   const euroInput = inputCurrencyValue / inputCurrencyType;
  //   const euroOutput = euroInput * outputCurrencyType;
  //   console.log("input currency type", inputCurrencyType);
  //   console.log("output currency type", outputCurrencyType);
  //   console.log("euro input", euroInput);
  //   console.log("euro output", euroOutput);
  //   console.log("output currency value ", outputCurrencyValue);
  //   if (inputCurrencyValue && inputCurrencyType && outputCurrencyType) {
  //     setOutputCurrencyValue(euroOutput);
  //   }
  // }

  // if (inputCurrencyValue && inputCurrencyType && outputCurrencyType) {
  //   convertor();
  // }

  useEffect(
    function () {
      const euroInput = inputCurrencyValue / inputCurrencyType;
      const euroOutput = euroInput * outputCurrencyType;
      setOutputCurrencyValue(euroOutput);
    },
    [inputCurrencyType, inputCurrencyValue, outputCurrencyType]
  );

  return (
    <div className="App">
      <h1>Currency Convertor</h1>
      <input
        type="text"
        value={inputCurrencyValue}
        placeholder="enter amount"
        onChange={(e) => setInputCurrencyValue(e.target.value)}
      />
      <select onChange={(e) => setInputCurrencyType(e.target.value)}>
        <option value="">Select currency</option>
        {data ? (
          Object.entries(data).map(([code, values]) => (
            <option key={code} value={values}>
              {code}
            </option>
          ))
        ) : (
          <>
            <option>Currency1</option>
            <option>Currency2</option>
          </>
        )}
      </select>
      <select onChange={(e) => setOutputCurrencyType(e.target.value)}>
        <option value="">Select currency</option>
        {data ? (
          Object.entries(data).map(([code, values]) => (
            <option key={code} value={values}>
              {code}
            </option>
          ))
        ) : (
          <>
            <option>Currency1</option>
            <option>Currency2</option>
          </>
        )}
      </select>
      {outputCurrencyValue ? (
        <div className="result">Your Result is {outputCurrencyValue}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
