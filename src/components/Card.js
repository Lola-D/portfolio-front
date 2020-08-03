import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({ project }) => {
  return (
    <div className='card'>
      <h2 className='card-title'>{project.name}</h2>
      <img
        className='card-image'
        src='../previews/julian-wild.png'
        alt='preview of  project'
      />
      <Link to={`/projects/${project.id}`}>Voir plus</Link>
    </div>
  )
}

export default Card
