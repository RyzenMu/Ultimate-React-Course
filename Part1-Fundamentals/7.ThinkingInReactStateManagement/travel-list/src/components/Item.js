export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
        ></input>
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
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>{" "}
    </div>
  );
}
