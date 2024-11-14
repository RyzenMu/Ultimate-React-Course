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
      <h1>SPLIT A BILL WITH CLARK</h1>
    </div>
  );
}
