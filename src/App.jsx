import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const todoList = [
  {
    id: 1,
    title: "install react",
  },
  {
    id: 2,
    title: "connect with Github",
  },
  {
  id: 3,
  title: "complete assignment",
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
          <li key = {todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App()
