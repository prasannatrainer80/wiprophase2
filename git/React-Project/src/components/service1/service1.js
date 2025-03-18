import React, {useEffect, useState} from 'react';
import axios from 'axios';
const Service1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
    };
    fetchData();
  }, []);

  return(
    <table border="3" align="center">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
      </tr>
      {data.map((item) => 
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
export default Service1;