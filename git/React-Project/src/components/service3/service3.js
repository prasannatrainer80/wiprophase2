import React, {Component, useState} from 'react';
import axios from 'axios';

const Service3 = () => {
  // let employResult = {}

  var [employResult, SetResult] = useState({})
  const [emp,setState] = useState({
    empno : 0,
  })
  const handleChange = event => {
    setState({
      ...emp,[event.target.name]:event.target.value
    })   
  }

  const show = () => {
    let eno = parseInt(emp.empno);
    axios.get("http://localhost:8282/employ/searchEmploy/"+eno).then(
      (response) => {
        SetResult(response.data)
      }  
    )
  }
  

  // if (!employ) return null;

  return (
    <div>
      <form>
        Employ no : 
            <input type="number" name="empno" value={emp.empno} 
                  onChange={handleChange} /> <br/><br/>
            <input type="button" value="Search" onClick={show} />
        <p>Welcome to Search Employ</p>
            <p>Employ No : {employResult.empno}</p>
            <p>Employ Name : {employResult.name}</p>
            <p>Gender : {employResult.gender}</p>
            <p>Employ Name : {employResult.dept}</p>
            <p>Employ Name : {employResult.desig}</p>
            <p>Employ Name : {employResult.basic}</p>
      </form>
      
    </div>
  );
  }
 
export default Service3;