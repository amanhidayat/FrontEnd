import { useEffect, useState } from "react";
import useCounter from "../Hooks/Counter";

function Count () {
    
    const [name, setName] = useState("Aman")
    

    const [count, increment, decrement] = useCounter(0, 5);

    
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>{name}</p>
            <p>You clicked {count}</p>
            <button onClick={increment}>
                increment
            </button>
            <button onClick={decrement}>
                decrement
            </button>
        </div>
    )
}

export default Count;