import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className='card'>
        <h2 className='card-title'>{project.name}</h2>
        <img
          className='card-image'
          src='../previews/julian-wild.png'
          alt='preview of  project'
        />
        <p className='card-text'>{project.description}</p>
        <a
          href={project.github_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Lien Github
        </a>
        <a
          href={project.project_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Lien du site
        </a>
      </div>
    </Link>
  )
}

export default Card
