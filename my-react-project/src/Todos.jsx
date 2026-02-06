import React, { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    {
      title: "node",
      status: false,
    },
    {
      title: "express",
      status: false,
    },
    ,
    {
      title: "html",
      status: true,
    },
    {
      title: "css",
      status: true,
    },
    {
      title: "reac",
      status: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target;
    console.log(e.target.title.value);

    // todos.push({
    //   title: e.target.title.value,
    //   status: false,
    // });

    // setTodos(pass the array) // the array should contain old values as well as new value

    setTodos([
      {
        title: "node",
        status: false,
      },
      {
        title: "express",
        status: false,
      },
    ]);

    console.log(todos);
  };

  return (
    <div className="white-space">
      <form onSubmit={handleSubmit}>
        <input placeholder="title" name="title" />
        <input type="submit" />
      </form>

      <h2>All Todos</h2>
      <table>
        <thead>
          <th>Sn</th>
          <th>Title</th>
          <th>status</th>
          <th>Action</th>
        </thead>
        {todos.map((el, index) => {
          return (
            <tr className={`todo-item ${el.status ? "completed" : "pending"}`}>
              <td>{index + 1}</td>
              <td>{el.title}</td>
              <td>{el.status ? "completed" : "pending"}</td>
              <td>
                <div>
                  <button>edit</button>&nbsp;
                  <button>delete</button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Todos;
