import React, {Component, useState} from 'react';

const Fc2 = () => {
  const msg = useState("Welcome to UseState...")
  const count = useState(1)
  return(
    <div>
      <p>Default Message : <b> {msg} </b></p>
      <p>Default Count is : <b> {count} </b></p>
    </div>
  )
}

export default Fc2;