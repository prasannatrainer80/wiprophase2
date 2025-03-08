import React, { useState} from 'react';
// import AuthSerivce from '../services/auth.service'
import AuthService from '../services/AuthService';
import axios from 'axios';
const Admin = () => {
  const [message, setMessage] = useState('');
  const show = async () => {
    const token = JSON.parse(localStorage.getItem("token"))
    // const token = "abc";
    alert("Token From Admin is  " +token);

    const response = await axios.get('http://localhost:5281/api/SomeProtected', {
      headers: {
          Authorization: 'Bearer ' + token
      }
   
  });
  setMessage(response.data.message);
     }
  return(   
    <div>
        <input type="button" value="Show Protected" onClick={show} /> <br/><br/>
        {message}
    </div>
  )
}
export default Admin;