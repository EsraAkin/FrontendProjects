import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0)
const handleClick=()=>{
  setValue(value+1);
};
  return (
    <>
     <button onClick={handleClick}>Kurs Ekle</button>
     <div>Kurs Sayısı:{value}</div>
    </>
  )
}

export default App
