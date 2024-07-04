import { useState } from "react"

export const useCounter = ( intitialValue = 10 ) => {

    const [counter, setCounter] = useState( intitialValue )

    const increment = ( value = 1) => {
        setCounter( counter + value);
    }

    const reset = () => {
        setCounter( intitialValue )
    }

    const decrement = ( value = 1 ) => {
        if ( counter === 0 ) return;

        setCounter( counter - value)
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}


