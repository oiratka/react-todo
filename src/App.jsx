import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/TodoList";

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
