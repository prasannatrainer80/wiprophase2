import React, {useState} from 'react';

const Fc5 = () => {
  const[message,setMessage]=useState("Welcome")
  const handleChange = event => setMessage(event.target.value)
  return(
    <div>
      Message : 
      <input type="text" value={message} onChange={handleChange} />
      <p>
        Updated {message}
      </p>
    </div>
  )
}
export default Fc5;