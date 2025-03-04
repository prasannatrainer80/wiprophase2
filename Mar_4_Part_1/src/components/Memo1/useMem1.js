import { useMemo, useState } from "react";

const UseMem1 = () => {

    const[number,setNumber] = useState(0)

    const result = useMemo(() => squareNumber(number),[number])
    function squareNumber(n)  {
        return Math.pow(n, 2);
    }

    return(
        <div>
            <h1>Memo Example</h1>
            <p>Result is <b>{result}</b></p>
            <input type="number" value={number} 
                onChange={ (e) => setNumber(e.target.value)} />
        </div>
    )
}

export default UseMem1;