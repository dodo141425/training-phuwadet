import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="bg-blue-300 p-10 flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src="https://www.nc.ac.th/img/logo.png" height={10} width={50}/>

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">NVC Training Center</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/" className="text-white hover:text-fuchsia-400 font-bold">Home</NavLink></li>
        <li><NavLink to="/About" className="text-white hover:text-fuchsia-400 font-bold">Course</NavLink></li>
        <li><NavLink to="/Contact" className="text-white hover:text-fuchsia-400 font-bold">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar