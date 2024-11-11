import TodoListItem from "./TodoListItem";

const List = [
  {
    id: 1,
    title: "Read the book",
    dueDate: "11/19/2024",
  },
  {
    id: 2,
    title: "Watch the videos",
    dueDate: "11/19/2024",
  },
  {
    id: 3,
    title: "Attend sessions",
    dueDate: "11/19/2024",
  },
];

const TodoList = () => {
  return (
    <ul>
      {List.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
