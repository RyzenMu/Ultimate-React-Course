import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <FriendsList />
      <AddFriends />
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
          <label>👨‍👩‍👧‍👦 Image URL</label>
          <input type="text" style={{ marginLeft: "5%" }} />
        </div>
      </div>
    </div>
  );
}
