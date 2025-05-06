import React from 'react'
import useCustomHook from './CustomHook';
export default function Counter() {
    const {count,increment,decrement}=useCustomHook(10);
    return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
