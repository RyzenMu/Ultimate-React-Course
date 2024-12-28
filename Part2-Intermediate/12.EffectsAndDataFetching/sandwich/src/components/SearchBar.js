export default function SearchBar({ query, onSetQuery }) {
  return (
    <div className="SearchBar">
      <h1>Sandwich 🥪</h1>
      <input
        type="text"
        placeholder="search"
        className="input"
        value={query}
        onChange={(e) => {
          onSetQuery(e.target.value);
        }}
      />
    </div>
  );
}
