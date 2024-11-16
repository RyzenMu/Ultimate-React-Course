import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="item">
        <FriendsList />
        <AddFriends />
      </div>
      <div className="item">
        <SplitCalculatorForm />
      </div>
    </div>
  );
}

function FriendsList() {
  return (
    <div className="friends-list">
      <Friends />
      <Friends />
      <Friends />
    </div>
  );
}

function Friends() {
  return (
    <div className="friends">
      <img src="/images/clark.jpg" alt="image of clark" />
      <div>
        <h3>name</h3>
        <p>some sentences </p>
      </div>
      <div>
        <button>Select</button>
      </div>
    </div>
  );
}

function AddFriends() {
  return (
    <div className="add-friends">
      <div>
        <div>
          <label>👨‍👩‍👧‍👦 Friend Name</label>
          <input type="text" style={{ marginLeft: "5%" }} />
        </div>
        <div>
          <label>🕸️ Image URL</label>
          <input type="text" style={{ marginLeft: "5%" }} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

function SplitCalculatorForm() {
  return (
    <div className="split-calculator-form">
      <div className="expense-fields">
        <h1>SPLIT A BILL WITH CLARK</h1>
        <h3>💰 Bill value</h3>
        <input type="text" value="" />
      </div>
      <div className="expense-fields">
        <h3>🙎‍♂️ Your expense</h3>
        <input type="text" value="" />
      </div>
      <div className="expense-fields">
        <h3>🧑‍🤝‍🧑 Clark expense</h3>
        <input type="text" value="" />
      </div>
      <div className="expense-fields">
        <h3>🤔 Who is paying the bill</h3>
        <select>
          <option>You</option>
          <option>Me</option>
          <option>Split</option>
        </select>
      </div>
      <button>Split bill</button>
    </div>
  );
}
