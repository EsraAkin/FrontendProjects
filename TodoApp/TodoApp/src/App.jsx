import { useState } from 'react'
import './App.css'
import { TodoApp } from './components/TodoApp'
import { NoteForm } from './components/NoteForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoApp></TodoApp>
    </>
  )
}

export default App
