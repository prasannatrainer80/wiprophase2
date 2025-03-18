import React, { useState} from 'react';
// import './fc3.scss'

const Fc3 = () => {
  const[count, setCount] = useState(0)

  return(
    <div>
      <div>
        <p>Default Value {count}</p>
        <p>
          <button onClick={() => setCount(count+1)}>
            Click Me
          </button>
         
        </p>
      </div>
    </div>
  )
} 

export default Fc3;