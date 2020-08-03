import React from 'react'

import './Card.css'

const Card = ({ project }) => {
  return (
    <div className='card'>
      <h2 className='card-title'>{project.name}</h2>
      <img className='card-image' src='./julian-wild.png' />
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
  )
}

export default Card
