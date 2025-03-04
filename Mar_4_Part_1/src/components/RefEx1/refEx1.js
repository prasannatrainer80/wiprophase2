import { useEffect, useRef, useState } from "react";

const RefEx1 = () => {

    const[count,setCount] = useState(0) 
    const prevCountRef = useRef()

    useEffect(() => {
        prevCountRef.current = count;
    }, [count])

    return(
        <div>
            <p>Previous Count Value : {prevCountRef.current}</p>
            <p>Current Count  {count} </p>
            <button onClick={() => setCount(count + 1)}>Increment</button> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setCount(count - 1)}>Decrement</button> 

        </div>
    )
}

export default RefEx1;