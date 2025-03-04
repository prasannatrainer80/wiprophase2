import { useMemo, useState } from "react";

const UseMemo3 = () => {

    const [days,setDays] = useState(0) 
    const daySal = 8000 

    // const lc = useMemo(() => lowerCase(name),[name]);
    const actualAmount = useMemo(() => payment(days),[days]);
    const cashOnHand = useMemo(() => takeHome(days),[days]);

    function payment(days) {
        return daySal * days;
    }

    function takeHome(days) {
        return payment(days) - ( payment(days) / 10);
    }
    return(
        <div>
            <label>Enter No.of Working Days </label>
            <input type="number" value={days} 
                onChange={ (e) => setDays(e.target.value)} /> 
            <p>Actual Amount to Be Paid : <b>{actualAmount}</b></p>
            <p>Amount to be Paid after Tax : <b>{cashOnHand}</b></p>
        </div>
    )
}

export default UseMemo3;