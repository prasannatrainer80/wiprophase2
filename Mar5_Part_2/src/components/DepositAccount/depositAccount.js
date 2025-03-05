import { useState } from "react";
import axios from "axios";


const DepositAccount = () => {

     const [data, setData] = useState({
            accountNo : 0, 
            depositAmount : 0
        })
    const [result,setResult]=useState('')
    
        const handleChange = event => {
            setData({
                ...data,[event.target.name] : event.target.value  
            })
        }

        const depositAmount = () => {
            axios.post("http://localhost:5144/deposit/" +data.accountNo +"/" +data.depositAmount).then(resp => {
            //   alert(resp.data);
            setResult(resp.data);
              console.log(resp.data);
            })
          }

        return(
            <div>
                <p>{result}</p>
                <label>Account Number : </label>
                <input type="number" name="accountNo" 
                    value={data.accountNo} onChange={handleChange} /> <br/><br/> 
                <label>Deposit Amount : </label>
                <input type="number" name="depositAmount" 
                    value={data.depositAmount} onChange={handleChange} /> <br/><br/>     
              
    
                <input type="button" value="Deposit Amount" onClick={depositAmount} /> 
             </div>
        )
}

export default DepositAccount;