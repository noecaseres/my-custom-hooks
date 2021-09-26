//Como estas acciones seguramente las use repetidas veces en formularios, es mejor crear un customHook


//Este hook lo que hace es renderizar el input
import { useState } from 'react'

export const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

    const reset=()=>{
        setValues( initialState );
    } //limpio el campo de input

    const handleInputChange=({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        });
  
    
    }

    return[values, handleInputChange, reset]

}
