import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Mon portfolio</h1>
      <Link to='/'>Accueil</Link>
    </div>
  )
}

export default Navbar