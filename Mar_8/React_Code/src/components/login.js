import React, { useState} from 'react';
import AuthService from '../services/AuthService';

const Login = () => {

  localStorage.clear();
    const [data,setState] = useState({
        username : '',
        password : '',
        result : ''
    })

    const handleChange = event => {
        setState({
          ...data,[event.target.name]:event.target.value
        })   
     }

     const validate = () => {
        AuthService.login(data.username,data.password).then(response => {
            localStorage.setItem("token",JSON.stringify(response));
            alert(response);  
          alert("Result is " +response)
          })
     }

     return(   
        <div>
          <form>
            User Name : 
            <input type="text" name="username" value={data.username} 
                onChange={handleChange} /> <br/><br/>
            Password :
            <input type="password" name="password" value={data.password} 
              onChange={handleChange} /> <br/><br/>
            <input type="button" value="Login" onClick={validate} />   <br/><br/>
            {/* Full Name : {data.fullName} 
           Result :  {data.result} */}
          </form>
        </div>
      )
}
export default Login;