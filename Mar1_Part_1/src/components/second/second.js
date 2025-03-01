import { useState } from "react";

const Second = () => {

    const [message, setMessage] = useState('Welcome')
    const handleChange = event => {
        setMessage(event.target.value)
    } 
    return(
        <div>
            <label>
                Message is : </label>
                <input type="text" name="message" value={message}
                    onChange={handleChange}
                /> 
            <br/>
            Message is : <b>{message}</b>
        </div>
    )
}

export default Second;