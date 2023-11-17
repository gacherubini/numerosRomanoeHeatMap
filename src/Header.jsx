import React from 'react'
import { Link } from "react-router-dom"
import './App.css'



const Header = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link  className = "Home" to="/">Home</Link>
      </li>
      <li>
        <Link  className = "heatmap" to="/heatmap">HeatMap </Link>
      </li>
    </ul> 
  </nav>  
  )
}

export default Header