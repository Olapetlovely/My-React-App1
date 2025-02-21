
import React, { useState } from 'react'

const MyComponent = () => {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false)


  const updateName = () => {
    setName("Peter");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed)
  };


  return (
    <div className='my-component'>
      <p>Name: {name}</p>
      <button className='button' onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button className='button' onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button className='button' onClick={toggleEmployedStatus}> Toggle Status</button>
    </div>
  )
}

export default MyComponent