import { useState,useEffect } from 'react';


export function Time() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) => count+1)
        }, 1000)
    });
    return (
        <h1>Eu já cliquei {count} vezes</h1>
    )
}

export function Counter() {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(()=> {
        setCalculation(()=> count * 2)
    },[count])

return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

