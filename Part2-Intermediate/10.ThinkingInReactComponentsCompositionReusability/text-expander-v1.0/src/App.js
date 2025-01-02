import { useState } from "react";
import "./style.css";

const zenQuotes = [
  "Sitting quietly, doing nothing, spring comes, and the grass grows by itself.",
  "The journey of a thousand miles begins with a single step.",
  "To seek is to suffer. To seek nothing is bliss.",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
  "The obstacle is the path.",
  "When walking, walk. When eating, eat.",
  "The mind is everything. What you think, you become.",
  "Let go, or be dragged.",
  "What you are looking for is already in you.",
  "Knowledge is learning something every day. Wisdom is letting go of something every day.",
];

function AppV3() {
  return (
    <div className="App">
      {zenQuotes.map((quote, index) => (
        <Card quote={quote} key={index} />
      ))}
    </div>
  );
}

function Card({ quote }) {
  const [elaborate, setElaborate] = useState(false);
  function expand() {
    setElaborate(true);
  }
  return (
    <div className="card">
      {elaborate ? quote : quote.slice(0, 15)}...
      <br></br>
      <button onClick={expand}> Read more</button>
    </div>
  );
}

export default App;
