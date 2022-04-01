import React from 'react'
import { FaTimes } from "react-icons/fa";

const Gorev = ({osman}) => {
  return (
    <div>
        <p>{osman.text}  <FaTimes/></p>
        <p>{osman.day}</p>
    </div>
  )
}

export default Gorev