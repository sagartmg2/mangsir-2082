import React, { useState } from "react";

function TodosCrud() {
  const [todos, setTodos] = useState([
    {
      title: "node",
      status: false,
    },
    {
      title: "express",
      status: false,
    },
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

  const [editableTodo, setEditableTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target; //<form>
    // console.log(e.target.title.value);

    // todos.push({
    //   title: e.target.title.value,
    // });
    //  ERROR: cannot change sate variable directly

    // let temp =  todos  // XX error: casuse temp will point to todos original location. && todos is a state && state cant be changed directly.

    let temp = [...todos]; // spread operator // copy previous todos

    if (!e.target.title.value.trim()) {
      alert("please fill title");
      return;
    }

    temp.push({
      title: e.target.title.value,
      status: false,
    });

    setTodos(temp);
  };

  const deleteTodo = (index) => {
    let temp = [...todos];
    // ...delete partiruclar index from temp todos
    /* 
    const [todos, setTodos] = useState([
    {
      title: "node",
      status: false,
    },
    {
      title: "express",
      status: false,
    },
    {
      title: "html",
      status: true,
    },
    
    */

    // let filteredTodos = temp.filter((el, idx) => {
    //   if (index == idx) {
    //     return false;
    //   }
    //   return true;
    // });
    // setTodos(filteredTodos);

    temp.splice(index, 1);
    setTodos(temp);
  };

  const editTodo = (index, title, status) => {
    setEditableTodo({
      index,
      title,
      status,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    let temp = [...todos];

    temp = temp.map((el, index) => {
      if (index == editableTodo.index) {
        return {
          title: e.target.title.value,
          status: e.target.status.checked,
        };
      }
      return el;
    });

    setTodos(temp);
    setEditableTodo(null);
  };

  console.log({ todos });

  // re-render
  return (
    <div className="white-space">
      <form onSubmit={handleSubmit}>
        <input placeholder="title" name="title" required />
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
        <tbody>
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
                        editTodo(index, el.title, el.status);
                      }}
                    >
                      edit
                    </button>
                    &nbsp;
                    <button
                      onClick={() => {
                        deleteTodo(index);
                      }}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/*   modal */}
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
    </div>
  );
}

export default TodosCrud;
