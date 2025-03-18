import React, {Component, useState} from 'react';

const Fc8 = () => {

  const [data,setState] = useState({
    firstNo : 0,
    secondNo  : 0,
    result : 0
  })

  // const handleFirstName = event => SetFirstName(event.target.value)
  // const handleLastName = event => SetLastName(event.target.value)

  const handleChange = event => {
    setState({
      ...data,[event.target.name]:event.target.value
    })   
  }
  const sum = () => {
    let res = parseInt(data.firstNo) + parseInt(data.secondNo)
   setState({
    result : res
   })
  }
  return(   
    <div>
      <form>
        First No : 
        <input type="number" name="firstNo" value={data.firstNo} 
            onChange={handleChange} /> <br/><br/>
        Second No :
        <input type="number" name="secondNo" value={data.secondNo} 
          onChange={handleChange} /> <br/><br/>
        Result : 
        <input type="number" name="result" value={data.result} /> <br/><br/>
        <input type="button" value="Sum" onClick={sum} />
        {/* Full Name : {data.fullName}  */}
      </form>
    </div>
  )
}

export default Fc8;