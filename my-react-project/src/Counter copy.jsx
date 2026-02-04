import React from "react";

export default function Counter() {
  let count = 100;

  const increment = () => {
    console.log("increment");
    // count = count + 1
    // count += 1
    count++;
    console.log("count", count);
  };

  const decrement = () => {
    console.log("decrement");
    count--;
    console.log("count", count);
  };

  console.log("counter- render", count);
  return (
    <>
      <button onClick={increment}>incrment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>decrement</button>
    </>
  );
}
