import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Mon portfolio</h1>
      <div>
        <Link to='/projects/new' className='navbar-links'>Ajouter un projet</Link>
        <Link to='/' className='navbar-links'>Accueil</Link>
      </div>
    </div>
  )
}

export default Navbar