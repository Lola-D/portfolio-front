import React from 'react'

const Card = project => {
  return (
    <div>
      <h2>{project.project.name}</h2>
      <p>{project.project.description}</p>
      <p>{project.project.github_url}</p>
      <p>{project.project.project_url}</p>
      <img src='../../public/previews/Capture d’écran 2020-08-03 à 14.41.22.png' />
    </div>
  )
}

export default Card