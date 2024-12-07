

const TodoListItem = ({ todo }) => {
  const { title, dueDate } = todo;
  return (
    <li>
      {title} {dueDate}
    </li>
  );
};

export default TodoListItem;
