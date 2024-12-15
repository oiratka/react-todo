import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem("savedTodoList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};




const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id)=>{
    const updatedTodolist = todoList.filter(todo => todo.id !== id);
    
    setTodoList(updatedTodolist);
    }
  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <AddToDoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
};

export default App;
