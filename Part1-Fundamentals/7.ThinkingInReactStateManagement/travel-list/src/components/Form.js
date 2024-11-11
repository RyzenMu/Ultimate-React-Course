import { useState } from "react";

export default function Form({ onAddItems }) {
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
    onAddItems(newItem);
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
