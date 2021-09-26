import { useState } from "react"


export const useCounter = ( initialState = 10) => {
   
    const [counter, setCounter] = useState(initialState); 

    //const increment = ( factor = 1): inicializo un factor como parametro si es que quiero que la funcion en mi js cuente en un valor distinto a 1.
    const increment = () => {
        setCounter(counter + 1); //setCounter(counter + factor)
    }
    const decrement = ()=>{
        setCounter(counter - 1);
    }
    const reset = ()=>{
        setCounter(initialState);
    }

    return{
        counter,
        increment,
        reset,
        decrement,
    };
}
