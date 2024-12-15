

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { id, title, dueDate } = todo;

  const handleRemove = ()=>{
    onRemoveTodo(id);
  }
  return (
    <li>
      {title} {dueDate}
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoListItem;
