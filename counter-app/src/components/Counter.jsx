import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const Add = () =>{
        setCount(count + 1)
    }
   return (
    <div>
        <h1>Value : {count}</h1>
        <button onClick={Add}>+</button>
        <button onClick={()=>{setCount(count - 1)}}>-</button>
    </div>
  )
}

export default Counter