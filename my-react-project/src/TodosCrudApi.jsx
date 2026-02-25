import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function TodosCrudApi() {
  const [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState(null);

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
      }).catch(err =>{
        
      })

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
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/todos/${id}`).then((res) => {
      fetchTodosFromApi();
    });
  };

  const editTodo = (id, title, status) => {
    setEditableTodo({
      id,
      title,
      status,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // let temp = [...todos];
    // temp = temp.map((el, index) => {
    //   if (inetTodos(temp);dex == editableTodo.index) {
    //     return {
    //       title: e.target.title.value,
    //       status: e.target.status.checked,
    //     };
    //   }
    //   return el;
    // });
    // s

    axios
      .put(`${import.meta.env.VITE_SERVER_URL}/todos/${editableTodo.id}`, {
        title: e.target.title.value,
        status: e.target.status.checked,
      })
      .then((res) => {
        fetchTodosFromApi();
        setEditableTodo(null);
        toast("updated");
      })
      .catch((err) => {
        // alert("someting went wrong");
        toast.error("someting went wrong", {
          theme: "colored",
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input required placeholder="new todo" name="title" type="text" />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((el, index) => {
          return (
            <tr className={`todo-item ${el.status ? "completed" : "pending"}`}>
              <td>{index + 1}</td>
              <td>{el.title}</td>
              <td>{el.status ? "completed" : "pending"}</td>
              <td>
                <div>
                  <button
                    onClick={() => {
                      editTodo(el.id, el.title, el.status);
                    }}
                  >
                    edit
                  </button>
                  &nbsp;
                  <button
                    onClick={() => {
                      deleteTodo(el.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </ul>
      {editableTodo != null && (
        <div
          className="edit-modal"
          onClick={() => {
            setEditableTodo(null);
          }}
        >
          <form
            className="edit-form"
            onClick={(e) => {
              // e.preventDefault();
              e.stopPropagation();
            }}
            onSubmit={handleEdit}
          >
            <div>
              <label>Ttile</label>
              <br />
              <input placeholder="title" name="title" defaultValue={editableTodo.title} />
            </div>
            <br />
            <div>
              <label htmlFor="status">Status</label>
              <input id="status" type="checkbox" name="status" defaultChecked={editableTodo.status} />
            </div>
            <br />
            <input type="submit" />
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default TodosCrudApi;
