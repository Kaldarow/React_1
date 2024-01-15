import React from "react";

const Counter = ({ state, increment, dicrement }) => {
  return (
    <div>
      <p>{state}</p>
      <button onClick={increment}>Plus +</button>
      <button onClick={dicrement}>Minus -</button>
    </div>
  );
};

export default Counter;
