import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div class='navbar'>
      <div class='image'>
        <img src="./sqi-logo.jpg" alt="" />
      </div>
      <div class='content'>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Programmmes</a></li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">E-portal</a></li>
          <li><a href="#">SQI Scholarship</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar