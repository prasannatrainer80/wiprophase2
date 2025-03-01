import { useState } from "react";

const Login = () => {

    const [data, setData] = useState({
        userName : '',
        passCode : ''
    })

    const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }

    const handleSubmit = () => {
        // alert(data.userName);
        // alert(data.passCode);
        if (data.userName=="Wipro" && data.passCode == "Wipro") {
            alert("Correct Credentials...");
        } else {
            alert("Invalid Credentials...");
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name : </label>
                    <input type="text" name="userName" onChange={handleChange}
                        value={data.userName} /> <br/><br/>
                <label>Password</label> 
                    <input type="password" name="passCode" onChange={handleChange}
                        value={data.passCode} /> <br/><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;