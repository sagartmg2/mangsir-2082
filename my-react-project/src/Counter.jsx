import React, { useState } from "react";
/* 

    useState hook
    function useState(inititalValue){
        ....
        ....
        ....
        ....
        return [intitialValue, modiferFunction]
    }


*/

export default function Counter() {
  //   let count = 100;

  let [count, setCount] = useState(100); //  [ 100, () =>{} ]
  let [isLoading, setIsLoading] = useState(false); //  [ 100, () =>{} ]
  //   const [count, setCount] = [ 100, () =>{} ]  // array destructuruing

  const increment = () => {
    let [isLoading, setIsLoading] = useState(false); //  [ 100, () =>{} ]
    console.log("increment");
    // count = count + 1
    // count += 1
    // count++;
    // console.log("count", count);
    // setCount(9999999999999)  // setcount(101)
    setCount(count + 1); // setcount(101)
  };

  const decrement = () => {
    console.log("decrement");
    // count--;
    console.log("count", count);
    // setCount(0); // setcount(101)
    setCount(count - 1); // setcount(101)
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
