import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount, decrementByAmount } from "../redux/counter"

export const Counter = () => {
    const count = useSelector ((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button onClick={()=> dispatch(increment())}> increment </button>
                    
                <span> {count} </span>
                <button onClick={()=> dispatch(decrement())}> decrement </button>
                    
                <button onClick={() => dispatch(incrementByAmount(5))} >
                    increment by 5
                </button>

                <button onClick={() => dispatch(decrementByAmount(5))} >
                    decrement by 5
                </button>

            </div>
        </div>
    )
} 
