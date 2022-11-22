import { useState, useEffect, useRef } from "react";

export function Ref() {
    const [inputValue, setInputvalue] = useState("")
    const count = useRef(0)
    const previousInputValue = useRef("")

    useEffect(()=> {
        previousInputValue.current = inputValue
    },[inputValue])

    return(
        <>
            <input 
            type="text" 
            value={inputValue} 
            onChange={(e)=> setInputvalue(e.target.value)} 
            />
            <h1>Render Count : {count.current}</h1>
            <h2>Atual valor : {inputValue}</h2>
            <h2>Valor anterior : {previousInputValue.current}</h2>
        </>
    )
    
}
