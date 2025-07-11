import React, { useState } from 'react'

export default function useCustomHook(initialValue=0) {
    const [count,setCount]=useState(initialValue);
    const increment =()=>
    {
        setCount((c)=>c+1);
    }
    const decrement =()=>{
        setCount((c)=> c-1)
    }
    return {count,increment,decrement};
}
