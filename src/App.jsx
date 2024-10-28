import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const todoList = [
  {
    id: 1,
    title: "set up React",
    dueDate: "11/05/2024",
  },
  {
    id: 2,
    title: "push to Github",
    dueDate: "11/05/2024",
  },
  {
  id: 3,
  title: "complete assignment",
  dueDate: "11/05/2024",
},
];

function App() {
  return (
    <>
      <div>
      <h1>Todo List</h1>
      </div>
      <ul>
        {todoList.map ((todo) => (
          <li key = {todo.id}>{todo.title} by: {todo.dueDate}</li>
        ))}
      </ul>
    </>
  )
}

export default App
