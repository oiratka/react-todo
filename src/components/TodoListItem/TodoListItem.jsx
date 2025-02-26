import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo, onUpdateUrgency }) => {
  const { id, title, dueDate, urgency } = todo;

  const handleRemove = () => {
    onRemoveTodo(id);
  };

  const handleUrgencyChange = (event) => {
    onUpdateUrgency(id, event.target.value);
  };
  const urgencyClass = `urgency-${urgency}`;

  return (
    <li className={`${styles.ListItem} ${styles[urgencyClass]}`}>
      {title} {dueDate}
      <select
        id={`urgency-${todo.id}`}
        value={urgency}
        onChange={handleUrgencyChange}
        className={styles.selectUrgency}
      >
        <option value="">Select urgency</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleRemove} className={styles.removeBtn}>
        Remove
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    urgency: PropTypes.string,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateUrgency: PropTypes.func.isRequired,
};
export default TodoListItem;
