/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel";
import styles from "./AddToDoForm.module.css";
import PropTypes from "prop-types";

const AddToDoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };
  return (
    <form action="" onSubmit={handleAddTodo}>
     <InputWithLabel
     id = 'todoTitle'
     value = {todoTitle}
     onChange={handleTitleChange}>
      Title
      </InputWithLabel>
      <button type="submit" className={styles.addBtn}>Add</button>
    </form>
  );
};

AddToDoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddToDoForm;
