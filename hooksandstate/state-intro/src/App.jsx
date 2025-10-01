import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>{count}</h1>
       <button onClick={()=> {setCount(c=> c+1)}}>Count</button>
      </div>
    </>
  )
}

export default App
