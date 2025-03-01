import { useState } from "react";

const Calc = () => {

    const [data, setData] = useState({
        firstNo : 0, 
        secondNo : 0,
        result : 0
    })

    const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }

    const sum = () => {
        let res = parseInt(data.firstNo) + parseInt(data.secondNo);
        setData({
            result : res 
        });        
    }

    return(
        <div>
            <label>First Number : </label>
            <input type="number" name="firstNo" 
                value={data.firstNo} onChange={handleChange} /> <br/><br/>
            <label>Second Number : </label>
            <input type="number" name="secondNo" 
                value={data.secondNo} onChange={handleChange} /> <br/><br/> 
            <label>Result </label>
            <input type="number" name="result" 
                value={data.result} /> <br/><br/> 
            <input type="button" value="Sum" onClick={sum} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Sub" /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Mult" />
        </div>
    )
}

export default Calc;