import React from "react";

export default function Counter() {
  const [counter, setcounter] = React.useState(1);
  return (
    <div>
      <h1>Welcome to this page!</h1>
      <div id="counter-val">{counter}</div>
      <button id="increase-one-btn" onClick={() => setcounter(counter + 1)}>
        Increase By One
      </button>
      <button id="double-btn" onClick={() => setcounter(counter * 2)}>
        Double the counter
      </button>
    </div>
  );
}
