import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem("savedTodoList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: [] } });
      }, 2000);
    });
    myPromise.then((response) => {
      setTodoList(response.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id) => {
    const updatedTodolist = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodolist);
  };
  return (
    <>
      <div>
        <h1>Todo List</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <AddToDoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
