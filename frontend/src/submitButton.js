import React from 'react'
import './signUp.css'

const SubmitButton = (props) => {
  const { onClick } = props
  return (
    <button id="submitButton" onClick={onClick} >Just click here when you're done</button>
  )
}

export default SubmitButton;