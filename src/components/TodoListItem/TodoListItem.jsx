
import styles from './TodoListItem.module.css';

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

export default TodoListItem;
