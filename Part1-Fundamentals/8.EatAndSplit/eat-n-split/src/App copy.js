import { useState } from "react";
import "./App.css";

const displayNames = ["anthony", "clark", "sarah"];
export default function App() {
  const [buttonHighlight, setButtonHighlight] = useState("lightblue");
  const [name, setName] = useState("");
  const [billValue, setBillValue] = useState(0);
  const [yourBillValue, setYourBillValue] = useState(0);
  const [who, setWho] = useState("you");
  const othersBill = billValue - yourBillValue;
  console.log(billValue);
  console.log(yourBillValue);
  console.log(othersBill);
  console.log(who);
  console.log(typeof yourBillValue);
  let finalText = "";

  function result() {
    if (who === "you") {
      finalText = ` ${name} owe you -- Rs ${Number(othersBill)}`;
    } else if (who === "other") {
      finalText = `you owe ${name} --Rs ${Number(yourBillValue)}`;
    }
  }

  function overButton(e) {
    setButtonHighlight(() => "orange");
    e.target.style.backgroundColor = "orange";
  }
  function leaveButton(e) {
    setButtonHighlight(() => "lightblue");
    e.target.style.backgroundColor = "lightblue";
  }
  return (
    <div>
      <div className="app">
        <div className="item">
          <FriendsList
            overButton={overButton}
            leaveButton={leaveButton}
            name={name}
            onSetName={setName}
          />
          <AddFriends overButton={overButton} leaveButton={leaveButton} />
        </div>
        <div className="item">
          <SplitCalculatorForm
            overButton={overButton}
            leaveButton={leaveButton}
            name={name}
            billValue={billValue}
            onSetBillValue={setBillValue}
            yourBillValue={yourBillValue}
            onSetYourBillValue={setYourBillValue}
            othersBill={othersBill}
            who={who}
            onSetWho={setWho}
            onResult={result}
          />
        </div>
      </div>
      <button onMouseOver={overButton} onMouseLeave={leaveButton}>
        Close
      </button>
      <em>{finalText}</em>
    </div>
  );
}

function FriendsList({ overButton, leaveButton, onSetName }) {
  return (
    <div className="friends-list">
      {displayNames.map((displayName) => (
        <Friends
          overButton={overButton}
          leaveButton={leaveButton}
          displayName={displayName}
          onSetName={onSetName}
        />
      ))}
    </div>
  );
}

function Friends({ overButton, leaveButton, displayName, onSetName }) {
  return (
    <div
      className="friends"
      onMouseEnter={(e) => (e.target.style.backgroundColor = "orange")}
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = "rgba(231, 226, 220, 0.863)")
      }
    >
      <img src={`/images/${displayName}.jpg`} alt={`image of ${displayName}`} />
      <div>
        <h3>{displayName}</h3>
        <p>Hiiii......... </p>
      </div>
      <div>
        <button
          onMouseOver={overButton}
          onMouseLeave={leaveButton}
          onClick={(e) => {
            onSetName(displayName);
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
}

function AddFriends({ overButton, leaveButton }) {
  return (
    <div>
      <div className="add-friends">
        <div className="add-friends-item">
          <label>👨‍👩‍👧‍👦 Friend Name</label>
          <input type="text" style={{ marginLeft: "5%" }} />
        </div>
        <div className="add-friends-item">
          <label>🕸️ Image URL</label>
          <input type="text" style={{ marginLeft: "5%" }} />
        </div>
        <div>
          <button onMouseOver={overButton} onMouseLeave={leaveButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function SplitCalculatorForm({
  overButton,
  leaveButton,
  name,
  billValue,
  onSetBillValue,
  yourBillValue,
  onSetYourBillValue,
  othersBill,
  who,
  onSetWho,
  onResult,
}) {
  return (
    <div className="split-calculator-form">
      <div className="expense-fields">
        <h1>split a bill with {name}</h1>
      </div>
      <div className="expense-fields">
        <h3>💰 Bill value</h3>
        <input
          type="number"
          value={billValue}
          onChange={(e) => onSetBillValue(e.target.value)}
        />
      </div>
      <div className="expense-fields">
        <h3>🙎‍♂️ Your expense</h3>
        <input
          type="number"
          value={yourBillValue}
          onChange={(e) => onSetYourBillValue(e.target.value)}
        />
      </div>
      <div className="expense-fields">
        <h3>🧑‍🤝‍🧑 {name} expense</h3>
        <input type="number" value={othersBill} />
      </div>
      <div className="expense-fields">
        <h3>🤔 Who is paying the bill</h3>
        <select onChange={(e) => onSetWho(e.target.value)}>
          <option value="you">You</option>
          <option value="other">{name}</option>
          <option value="split">Split</option>
        </select>
      </div>
      <button
        onMouseOver={overButton}
        onMouseLeave={leaveButton}
        onClick={() => onResult()}
      >
        Split bill
      </button>
    </div>
  );
}
