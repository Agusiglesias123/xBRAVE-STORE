import { useState } from "react"

export const useCounter = (initial = 0, min, max) => {
    const [contador, setContador] = useState(initial)
    
    const incrementar = () => {
        if (contador < max) {
            setContador(contador + 1)
        }
        console.log('incrementar')
    }
    
    const decrementar = () => {
        if (contador > min) {
            setContador(contador - 1)
        }
        console.log('decrementar')
    }
     
    return {contador, incrementar, decrementar}

}