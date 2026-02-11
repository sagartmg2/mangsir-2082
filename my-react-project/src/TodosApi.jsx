import React from "react";
import axios from "axios";

function TodosApi() {
  // synchronous
  // asynchronous

  try {
    let number1 = 12;
    let number2 = 12;
    let sum = number1 + number2;
    throw new Error("something went wrong");
    console.log({ sum });
  } catch (err) {
    console.log({ err });
  }

  function doSomething() {
    console.log("do-something");
  }

  //   async
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("promise fulfilled: product create");
      resolve({
        data: [{ title: "react" }],
      });
      //   reject("promise rejected : unable to create product . please try again later!!");
    }, 3000);
  });

  console.log(promise); // pending

  promise
    .then((res) => {
      console.log({ res });
    })
    .catch((err) => {
      console.log({ err });
    });

  //   async
  setTimeout(() => {
    console.log("show some alerts");
  }, 0);

  console.log("start");

  [1, 2, 3, 4, 5, 6].forEach((el, index) => {
    console.log(`el is ${el} and index is ${index}`);
  });

  doSomething();

  console.log("end");

  const fetchTodosFromApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data); // [ {},{},{}]
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={fetchTodosFromApi}> fetch data from todos api </button>

      <ul>
      
      </ul>
    </div>
  );
}

export default TodosApi;
