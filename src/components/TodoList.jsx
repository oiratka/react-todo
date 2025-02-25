import TodoListItem from "./TodoListItem/TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo, onUpdateUrgency }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo = {onRemoveTodo} onUpdateUrgency={onUpdateUrgency}/>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateUrgency: PropTypes.func.isRequired,
}
export default TodoList;
