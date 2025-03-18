import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';

const Service2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8282/employ/showEmploy");
      setData(response.data);
    };
    fetchData();
  }, []);

  return(
    <table border="3" align="center">
      <tr>
        <th>Employ No</th>
        <th>Employ Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Designation</th>
        <th>Basic</th>
      </tr>
      {data.map((item) => 
        <tr>
          <td>{item.empno}</td>
          <td>{item.name}</td>
          <td>{item.gender}</td>
          <td>{item.dept}</td>
          <td>{item.desig}</td>
          <td>{item.basic}</td>
        </tr>
      )}
    </table>
  )
}
export default Service2;