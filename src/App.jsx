import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Learning Animals in Spanish!</h1>
      <h2>How well do you know your animals in Spanish? Test it here!</h2>
      <h3>Number of Cards: </h3>
    </div>
  )
}

export default App
