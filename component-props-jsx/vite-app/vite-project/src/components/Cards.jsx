import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='card'style={{overflow:"hidden"}} >
      <img src="https://pbs.twimg.com/media/C2XlNefUcAAxhn4?format=jpg&name=4096x4096" alt="" width={200} height={300} style={{border:"2px solid black", borderRadius:"10px",margin:"auto"}}/>
         <h1>{props.title}</h1>
         <p>{props.des}</p>
    </div>
  )
}

export default Cards
