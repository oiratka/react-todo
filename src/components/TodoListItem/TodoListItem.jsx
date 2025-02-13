
import styles from './TodoListItem.module.css';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const { id, title, dueDate } = todo;

  const handleRemove = ()=>{
    onRemoveTodo(id);
  }
  return (
    <li className={styles.ListItem}>
      {title} {dueDate}
      <button onClick={handleRemove} className={styles.removeBtn}>Remove</button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
}
export default TodoListItem;
