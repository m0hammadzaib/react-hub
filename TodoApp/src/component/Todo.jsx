import React from 'react'
import { useState,useEffect } from 'react'

const Todo = () => {
  const [todos, settodos] = useState([]);
  const [task, settask] = useState("");
  
  return (
    <ul>
      {todos.map((t,i)=>(
        <li key={i} >
          <input type="text" checked={t.completed} onChange={()=>toggletodo(i)} />
          <span className={t.completed? "line-through text-gray-400":""} >{t.text}</span>
          <button onClick={()=>deletetodo(i)} ></button>
        </li>
      ))}
    </ul>
  )
}

export default Todo
