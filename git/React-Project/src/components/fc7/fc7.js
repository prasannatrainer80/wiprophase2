import React, {Component, useState} from 'react';

const Fc7 = () => {
  
  const [firstNo, SetFirstNo] = useState(0)
  const [secondNo, SetSecondNo] =useState(0)
  const [result, SetResult] = useState(0)

  const firstNoChange = event => SetFirstNo(event.target.value)
  const secondNoChange = event => SetSecondNo(event.target.value)

  const sum = () => {
    let res = parseInt(firstNo) + parseInt(secondNo);
    SetResult(res)
  }
  return(
    <div>
      First Number : 
      <input type="number" value={firstNo} 
          onChange={firstNoChange} /> <br/><br/>
      Second Number : 
      <input type="number" value={secondNo} 
        onChange={secondNoChange}
      /> <br/><br/>
      Result : 
      <input type="number" value={result} /> <br/><br/>
      <input type="button" value="Sum" onClick={sum} />
    </div>
  )
}

export default Fc7;