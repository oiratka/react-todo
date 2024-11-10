

const TodoListItem = (props) => {
  const { title, dueDate } = props.todo;

  return (
    <li>
      {title} by: {dueDate}
    </li>
  );
};

export default TodoListItem;
