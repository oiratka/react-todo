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

  
  const fetchdata = async ()=>{
    const options = {
      method: 'GET',
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };
  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  
  try{
    const response = await fetch(url, options);
    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }
    const data = await response.json();
    const todos = data.records.map((todo)=> ({
        id: todo.id,
        title: todo.fields.Title
      }));
      setTodoList(todos);
      setIsLoading(false);
  }
  catch (error){
    console.log(error.message);
  }
  }

  useEffect(() => {
    fetchdata();
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
