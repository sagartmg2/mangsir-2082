import React, { useEffect, useState } from "react";
import axios from "axios";

function TodosCrudApi() {
  const [todos, setTodos] = useState([]);

  const fetchTodosFromApi = () => {
    axios
      .get("http://localhost:3000/api/todos")
      .then((res) => {
        console.log(res.data); // [ {},{},{}]
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTodosFromApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/todos", {
        title: e.target.title.value,
      })
      .then((res) => {
        fetchTodosFromApi();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input required placeholder="new todo" name="title" type="text" />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((el) => {
          return (
            <li>
              {el.title} ( {el.status ? "complted" : "pending"} )
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodosCrudApi;
