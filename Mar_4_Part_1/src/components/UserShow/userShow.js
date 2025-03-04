import { useEffect, useState } from "react";

const UserShow = () => {
    const [users, setUserData] = useState([]);

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/users").then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            setUserData(data)
        })
    },[]);
    // alert(users.length);
    return(
        <div>
            <table border="3" align="center">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
          
                {
              users.map(user =>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
               )
            }

              </table>
        </div>
    )
}

export default UserShow;