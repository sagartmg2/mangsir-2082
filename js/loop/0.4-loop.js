let todos = [
  {
    userId: 1,
    id: 1,
    title: "task one",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "task two",
    completed: "false",
  },
  {
    userId: 1,
    id: 3,
    title: "task three",
    completed: true,
  },
];


/* 
  falsy values
    - false
    - 0 
     - null
     - undefined
     - ''
     - NaN

*/
// console.log(`${todos[0].title} is ${todos[0].completed}`);
// console.log(`${todos[1].title} is ${todos[1].completed}`);
// console.log(`${todos[2].title} is ${todos[2].completed}`);

for (let index = 0; index < todos.length; index++) {
  if (todos[index].completed) {
    console.log(`${todos[index].title} is completed`);
  } else {
    console.log(`${todos[index].title} is incomplete`);
  }
}

// ternary operator.

// task one is false
// task two is false
// task three is true

/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:

    Expected-output:
    
    task one is incomplete
    task two is incomplete
    task three is completed

*/
