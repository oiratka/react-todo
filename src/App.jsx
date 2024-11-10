import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./TodoList";
import AddToDoForm from "./AddToDoForm";

const App = () => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <AddToDoForm onAddTodo={setNewTodo} />
      <p>Completed: {newTodo}</p>
      <TodoList />
    </>
  );
};

export default App;
