import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./components/NewPage.module.css";
import AddToDoForm from "./components/AddTodoForm/AddToDoForm";
import TodoList from "./components/TodoList";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem("savedTodoList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchdata = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${
      import.meta.env.VITE_TABLE_NAME
    }?view=CTD&sort[0][field]=Title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.Title.toLowerCase();
        const titleB = objectB.fields.Title.toLowerCase();

        if (titleA < titleB) return 1;
        if (titleA === titleB) return 0;
        return -1;
      });

      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.Title,
        urgency: todo.fields.Urgency,
      }));
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = async (newTodo) => {
    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}`;

    const postRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          Title: newTodo.title,
          Urgency: newTodo.urgency,
        },
      }),
    };

    try {
      const response = await fetch(url, postRequest);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      fetchdata();
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeTodo = async (id) => {
    const updatedTodolist = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodolist);

    const url = `https://api.airtable.com/v0/${
      import.meta.env.VITE_AIRTABLE_BASE_ID
    }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    const deleteRequest = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    try {
      const response = await fetch(url, deleteRequest);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      fetchdata();
    } catch (error) {
      console.log(error.message);
      setTodoList((prev) => [...prev, todoList.find((todo) => todo.id === id)]);
    }
  };

  const updateUrgency = (id, newUrgency) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, urgency: newUrgency } : todo
    );

    setTodoList(updatedTodoList);
    localStorage.setItem("savedTodoList", JSON.stringify(updatedTodoList));
  };

  return (
    <BrowserRouter>
      <BackgroundImage />
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/new">New ToDo</Link>
        <br />
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomePage />
            </div>
          }
        />
        <Route
          path="/new"
          element={
            <div>
              <h1>Todo List</h1>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <AddToDoForm onAddTodo={addTodo} />
                  <TodoList
                    todoList={todoList}
                    onRemoveTodo={removeTodo}
                    onUpdateUrgency={updateUrgency}
                  />
                </>
              )}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
