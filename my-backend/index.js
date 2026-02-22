const express = require("express"); // common js
// import express from "express" // es module
const cors = require("cors");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5437/postgres");


const checkDbConnection = async () =>{
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

}
checkDbConnection()


const app = express();
app.use(cors()); // global middleware
app.use(express.json()); // global middleware

const port = 9001;

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.send({
    products: [{ title: "bag" }, { title: "phone" }, { title: "samsung phone" }],
  });
});

/* 
  C - create
  R  read
  U  update 
  D  delete
*/
/* 
  Request Methods
  C  POST
  R   GET
  U   PUT/PATCH
  D  DELETE

*/

/* 
  RESPONSE status codes
  2   (success)
    200
    201
    203
    205
  3 redirect
  4  (client side error)
    400
    401
    403
    404
    405
    422
  5 (server side error)
    500
    503


*/

let maxId = 4;
let dbTodos = [
  { id: 1, title: "html", status: true },
  { id: 3, title: "react", status: true },
  { id: 4, title: "express", status: false },
];

app.get("/api/todos", (req, res) => {
  console.log("heree");
  res.send({
    data: dbTodos,
  });
});

app.post("/api/todos", (req, res) => {
  dbTodos.push({
    id: ++maxId,
    title: req.body.title,
    status: false,
  });

  res.send({
    msg: "todos crated",
  });
});

app.put("/api/todos/:id", (req, res) => {
  if (!req.body.title) {
    throw new Error("bad request");
  }

  dbTodos = dbTodos.map((el) => {
    if (el.id == req.params.id) {
      return { ...el, title: req.body.title, status: req.body.status };
    } else {
      return el;
    }
  });

  res.send({
    msg: "todos updated",
  });
});

app.post("/api/todos", (req, res) => {
  dbTodos.push({
    id: ++maxId,
    title: req.body.title,
    status: false,
  });

  res.send({
    msg: "todos crated",
  });
});

app.delete("/api/todos/:id", (req, res) => {
  dbTodos = dbTodos.filter((el) => el.id != req.params.id);

  res.send({
    msg: "todos dleeted",
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

// http://localhost:3000/
// http://localhost:3000/api/products
// https://dummyjson.com/products/search?
