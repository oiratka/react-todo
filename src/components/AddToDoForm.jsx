import React, { useState } from "react";

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
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDoForm;
