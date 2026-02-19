import React, { useEffect, useState } from "react";
import axios from "axios";

function TodosCrudApi() {
  const [todos, setTodos] = useState([]);

  const fetchTodosFromApi = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/todos`)
      .then((res) => {
        console.log(res.data.data); // {data:[ {},{},{}]}
        setTodos(res.data.data);
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
      .post(`${import.meta.env.VITE_SERVER_URL}/todos`, {
        title: e.target.title.value,
      })
      .then((res) => {
        fetchTodosFromApi();
      });

    // axios
    //   .put(`${import.meta.env.VITE_SERVER_URL}/todos/${id}`, {
    //     title: e.target.title.value,
    //     status: e.target.title.value,
    //   })
    //   .then((res) => {
    //     fetchTodosFromApi();
    //   });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/todos/${id}`)
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
              {el.title} ( {el.status ? "complted" : "pending"} ){" "}
              <button
                onClick={() => {
                  deleteTodo(el.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodosCrudApi;
