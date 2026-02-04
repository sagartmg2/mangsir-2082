function TodoItem(props) {
  return (
    <tr className={`todo-item ${props.status ? "completed" : "pending"}`}>
      <td>{props.sn}</td>
      <td>{props.title}</td>
      <td>{props.status ? "completed" : "pending"}</td>
    </tr>
  );
}

let todos = [
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
];

export default function Todos() {
  // return fragment
  return (
    <>
      <form>
        <input placeholder="title" />
        <input type="submit" />
      </form>
      <h2>All Todos</h2>
      <table>
        <thead>
          <th>Sn</th>
          <th>Title</th>
          <th>status</th>
        </thead>
        {todos.map((el, index) => {
          return <TodoItem sn={index + 1} status={el.status} title={el.title} />;
          return (
            <tr className={`todo-item ${el.status ? "completed" : "pending"}`}>
              <td>{index + 1}</td>
              <td>{el.title}</td>
              <td>{el.status ? "completed" : "pending"}</td>
            </tr>
          );
        })}
      </table>
      <hr />

      <h2>Complted Todos</h2>
      <table>
        <thead>
          <th>Sn</th>
          <th>Title</th>
          <th>status</th>
        </thead>
        <tbody>
          {/* {todos.map((el, index) => {
          if (el.status) {
            return <TodoItem sn={index+1} status={el.status} title={el.title} />;
          }
        })} */}

          {todos
            .filter((el) => el.status)
            .map((el, index) => {
              return <TodoItem sn={index + 1} status={el.status} title={el.title} />;
            })}
        </tbody>
      </table>
      <hr />
      <h2>Incomplete Todos</h2>
      <table>
        <thead>
          <th>Sn</th>
          <th>Title</th>
          <th>status</th>
        </thead>
        <tbody>
          {/* {todos.map((el, index) => {
          // let count = 0;
          if (!el.status) {
            return <TodoItem sn={index + 1} status={el.status} title={el.title} />;
          }
        })} */}

          {todos
            .filter((el) => !el.status)
            .map((el, index) => {
              return <TodoItem sn={index + 1} status={el.status} title={el.title} />;
            })}
        </tbody>
      </table>
      <hr />
    </>
  );
}
