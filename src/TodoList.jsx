/* Create a new functional React component (see below)
 Declare a function named TodoList
 Export TodoList function as default module
 Add a multi-line return statement to your TodoList function (this is where we will insert JSX)
hint: use parenthesis for multi-line */

const todoList = [
    {
      id: 1,
      title: "set up React",
      dueDate: "11/05/2024",
    },
    {
      id: 2,
      title: "push to Github",
      dueDate: "11/05/2024",
    },
    {
    id: 3,
    title: "complete assignment",
    dueDate: "11/05/2024",
  },
  ];
  

const TodoList = () => {
    return <ul>
{todoList.map ((todo) => (
  <li key = {todo.id}>{todo.title} by: {todo.dueDate}</li>
))}
</ul>
}

export default TodoList;