import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴🤣Far Away👌💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    // guard clause if the text description is not entered
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    // initialItems.push(newItem); // Not Working
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for the 🤨🤨trip</h3>
      <select
        value={quantity}
        onChange={(event) => {
          console.log(event.target.value);
          setQuantity(Number(event.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
          console.log(event.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <div>
      <li>
        <span
          style={
            item.packed
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {item.quantity} {"  "}
          {item.description}
        </span>
        <button>❌</button>
      </li>{" "}
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        🏌️‍♂️you have X items on your list, and you and you alread packed X{"x %"}
      </em>
    </footer>
  );
}
