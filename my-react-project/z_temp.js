// // todos = [
// //   {
// //     title: "css",
// //     status: false,
// //   },
// //   {
// //     title: "react",
// //     status: false,
// //   },
// //   {
// //     title: "html",
// //     status: true,
// //   },
// // ];

// // todos.filter((el) => {
// //   if (el.status) {
// //     return true;
// //   }
// // });

// // todos.filter((el) => el.status);

// // todos = [
// //   {
// //     title: "html",
// //     status: true,
// //   },
// // ];

// // todos = [
// //   <tr class="todo-item pending">
// //     <td>{index + 1}</td>
// //     <td>{el.title}</td>
// //     <td>{el.status ? "completed" : "pending"}</td>
// //   </tr>,
// //   undefined,
// // ];

// let fullName = "ram";
// let user = fullName;
// user = "hari";

// console.log({ user });
// console.log({ fullName });

// let person = {
//   name: "ram",
//   age: 12,
//   address: "kathmandu",
// };

// let person2 = person;
// person2.name = "hari";

// let person3 = { ...person };
// person3.name = "sita kumari";

// console.log({ person3 });
// console.log({ person2 });
// console.log({ person });

// let todos = ["html", "css", "mongodbd"];

// let temp = todos;
// temp.push("react");

// let tempArr = [...todos];
// tempArr.push("database");

// console.log({ tempArr });
// console.log({ temp });
// console.log({ todos });

let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "css",
    status: true,
  },
  {
    title: "express",
    status: false,
  },
];


// todos.forEach(el =>{})
// let modifiedTodos = todos.map((el) =>{ return {title:el.title,status:el.status?"completed":"income"} }) 
// console.log(modifiedTodos);

let filteredTodos = todos.find(el =>{
  if(el.status){
    return true
  }
  return false
  // return false
})
console.log(filteredTodos);