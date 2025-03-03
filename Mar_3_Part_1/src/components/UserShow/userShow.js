import axios from "axios";
import { useEffect, useState } from "react";

const UserShow = () => {

    const [users,setUserData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://jsonplaceholder.typicode.com/users");
            setUserData(response.data)
        };
        fetchData()
    },[])

    return(
        <table border="3" align="center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
          {users.map((item) => 
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          )}
        </table>
      )
}

export default UserShow;