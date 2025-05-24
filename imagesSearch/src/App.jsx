import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
     
      <SearchHeader/>
    </div>
  )
}

export default App
