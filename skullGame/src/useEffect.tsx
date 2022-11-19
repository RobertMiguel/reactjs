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

export 