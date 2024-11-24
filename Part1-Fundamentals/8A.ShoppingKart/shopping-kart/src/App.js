import { useState } from "react";
import "./App.css";

const vegetables = [
  "Cucumber",
  "Lemon",
  "Ginger",
  "Beetroot",
  "Kale",
  "Spinach",
  "Leafy Greens",
  "Cabbage",
  "Cauliflower",
  "Garlic",
  "Onion",
  "Sesame seed - ellu",
  "lady finger",
  "drum stick",
  "Tomato",
];

const fruits = [
  "Apple",
  "Banana",
  "Grapes",
  "Pomogranate",
  "Blue-berry",
  "Water-Melon",
  "Avagado",
];

const nuts = [
  "Honey",
  "Water",
  "Baja Gold Sea Salt",
  "fennel-seeds",
  "Badam",
  "Cashew",
  "Ground-Nut",
  "Lentils",
  "Popped-rice",
  "Sun Flower Seeds",
  "Water melon Seeds",
  "Athipalam",
  "Dates",
  "WalNut",
  "Flax Seeds",
  "Chia Seeds",
  "Soy Beans",
];

export default function App() {
  const [listVegetables, setListVegetables] = useState([]);
  const [listFruits, setListFruits] = useState([]);
  const [listNuts, setListNuts] = useState([]);
  return (
    <div className="app">
      <Vegetables
        listVegetables={listVegetables}
        onSetListVegetables={setListVegetables}
      />
      <Fruits listFruits={listFruits} onSetListFruits={setListFruits} />
      <Nuts listNuts={listNuts} onSetListNuts={setListNuts} />
    </div>
  );
}

function Vegetables({ listVegetables, onSetListVegetables }) {
  function view() {
    onSetListVegetables(vegetables);
    if (listVegetables.length > 0) onSetListVegetables([]);
  }

  function close(index) {
    const updatedList = listVegetables.filter((item, i) => i !== index);
    onSetListVegetables(updatedList);
  }
  return (
    <div className="vegetables">
      <h3>
        Vegetables {""}
        <span>
          <Button onClick={view}> view Vegetables </Button>
        </span>{" "}
      </h3>
      <ul>
        {listVegetables.map((item, index) => (
          <li key={index} onClick={() => close(index)}>
            {index + 1} . {item}❌
          </li>
        ))}
      </ul>
    </div>
  );
}

function Fruits({ listFruits, onSetListFruits }) {
  function close(index) {
    const updatedList = listFruits.filter((item, i) => index !== i);
    onSetListFruits(updatedList);
  }
  function view() {
    onSetListFruits(fruits);
    if (listFruits.length > 0) onSetListFruits([]);
  }
  return (
    <div className="fruits">
      <h3>
        Fruits
        <span>
          <Button onClick={view}> view Fruits </Button>
        </span>
      </h3>

      <ul>
        {listFruits.map((fruit, index) => (
          <li key={index} onClick={() => close(index)}>
            {index + 1} . {fruit}❌
          </li>
        ))}
      </ul>
    </div>
  );
}

function Nuts({ listNuts, onSetListNuts }) {
  function close(index) {
    const updatedList = listNuts.filter((tem, i) => i !== index);
    onSetListNuts(updatedList);
  }
  function view() {
    onSetListNuts(nuts);
    if (listNuts.length > 0) onSetListNuts([]);
  }
  return (
    <div className="nuts">
      <h3>
        Nuts
        <span>
          <Button onClick={view}> view Nuts </Button>
        </span>
      </h3>

      <ul>
        {listNuts.map((nut, index) => (
          <li onClick={() => close(index)} value={index + 1}>
            {index + 1} . {nut} ❌
          </li>
        ))}
      </ul>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
