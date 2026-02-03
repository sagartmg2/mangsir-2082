todos = [
    {
        title: "css",
        status: false,
    },
    {
        title: "react",
        status: false,
    },
    {
      title: "html",
      status: true,
    },
];

todos.filter((el)=> {
    if(el.status){
        return true
    }
})

todos.filter((el)=> el.status)

todos = [
  {
    title: "html",
    status: true,
  },
];


todos = [
  <tr class="todo-item pending">
    <td>{index + 1}</td>
    <td>{el.title}</td>
    <td>{el.status ? "completed" : "pending"}</td>
  </tr>,
  undefined,
];
