import TodoListItem from "./TodoListItem/TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo = {onRemoveTodo}/>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
}
export default TodoList;
