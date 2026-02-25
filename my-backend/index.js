const express = require("express"); // common js
// import express from "express" // es module
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5437/postgres", {
  logging: false,
  // logging: true,
});

const checkDbConnection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    // await sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDbConnection();

const app = express();
app.use(cors()); // global middleware
app.use(express.json()); // global middleware
const port = 9001;

const Todo = sequelize.define(
  "Todo",
  {
    title: {
      type: DataTypes.STRING, // this will create varchar 255 in database
      allowNull: false, //
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "todos",
    timestamps: true,
  },
);

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
  { id: 3, name: "react", complted: true },
  { id: 3, name: "react", complted: 1 },
  { id: 4, title: "express", status: "false" },
  { id: 4, title: "express", status: "no", user: 1 },
];

dbTodos = [
  { id: 1, title: "html", status: true },
  { id: 3, title: "react", status: true },
  { id: 3, title: "react", status: false },
  { id: 4, title: "express", status: false },
];

app.get("/api/todos", async (req, res) => {

  let todos = await Todo.findAll();

  res.send({
    data: todos,
  });

});

app.post("/api/todos", async (req, res) => {
  // dbTodos.push({
  //   id: ++maxId,
  //   title: req.body.title,
  //   status: false,
  // });

  await Todo.create({
    title: req.body.title,
  });

  res.send({
    msg: "todos crated",
  });
});

app.put("/api/todos/:id", async (req, res) => {
  if (!req.body.title) {
    throw new Error("bad request");
  }

  // dbTodos = dbTodos.map((el) => {
  //   if (el.id == req.params.id) {
  //     return { ...el, title: req.body.title, status: req.body.status };
  //   } else {
  //     return el;
  //   }
  // });

  let todo = await Todo.findByPk(req.params.id);
  todo.update({
    title: req.body.title,
    status: req.body.status,
  });

  res.send({
    msg: "todos updated",
  });
});

app.delete("/api/todos/:id", async (req, res) => {
  // dbTodos = dbTodos.filter((el) => el.id != req.params.id);

  let todo = await Todo.findByPk(req.params.id);

  if (todo) {
    todo.destroy(); // <---------------------

    return res.send({
      msg: "todos dleeted",
    });
  }

  return res.status(404).send({
    msg: "resource not found",
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

// http://localhost:3000/
// http://localhost:3000/api/products
// https://dummyjson.com/products/search?
