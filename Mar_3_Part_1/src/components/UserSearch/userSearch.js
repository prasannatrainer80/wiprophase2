import axios from "axios";
import { useEffect, useState } from "react";

const UserSearch = () => {

    const[userResult, SetUserResult] = useState({})
    const[userId,SetUserId] = useState(0) 

    const handleChange = event => {
        SetUserId(event.target.value)
        // alert(empno);
    }

    const show = () => {
        // alert(userId)
        let uid = parseInt(userId);
        axios.get("http://jsonplaceholder.typicode.com/users/"+uid).then(
            (response) => {
                SetUserResult(response.data)
            }  
          )
      
    }
    return(
        <div>
            <label>
                User Id : </label>
            <input type="number" name="userId" 
                value={userId} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            User Id : <b>{userResult.id}</b> <br/>
            Name : <b>{userResult.name}</b> <br/>
            User Name : <b>{userResult.username}</b> <br/>
            Email : <b>{userResult.email}</b>
        </div>
    )


}

export default UserSearch;