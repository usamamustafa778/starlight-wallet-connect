import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <div>
        <img
          onClick={() => setCounter(counter - 1)}
          src="/assets/minus.png"
          alt=""
        />
        <h1>{counter}</h1>
        <img
          onClick={() => setCounter(counter + 1)}
          src="/assets/add.png"
          alt=""
        />
      </div>
    </div>
  );
}
