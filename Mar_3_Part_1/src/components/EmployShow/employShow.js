import { useEffect, useState } from "react"
import axios from "axios";

const EmployShow = () => {

    const[employs,setEmployData] = useState([]) 

  
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:1113/showEmploy");
            setEmployData(response.data)
        };
        fetchData()
    },[])
    return(
        <div>
             <table border="3" align="center">
          <tr>
            <th>Employ No</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
          {employs.map((item) => 
            <tr>
              <td>{item.empno}</td>
              <td>{item.name}</td>
              <td>{item.basic}</td>
            </tr>
          )}
        </table>
        </div>
    )
}

export default EmployShow;