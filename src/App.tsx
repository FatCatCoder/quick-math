import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// components
import Circle from './components/circle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Circle />
    </div>
  )
}

export default App
