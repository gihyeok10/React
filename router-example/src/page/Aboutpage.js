import React from 'react'
import { useNavigate } from 'react-router-dom'
//navigate //link
const Aboutpage = () => {
    
    const navigate = useNavigate()
    const goToHompage = () => {

        navigate("/")
    }
  return (
    <div>
        <h1>aboutPage</h1>
        <button onClick={goToHompage}>Go to Homepage</button>
    </div>
  )
}

export default Aboutpage