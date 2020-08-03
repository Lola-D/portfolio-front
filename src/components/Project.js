import React, { Component } from 'react'
import Navbar from './Navbar'
import UpdateProject from './UpdateProject'

import axios from 'axios'

class Project extends Component {

  state = {
    project: []
  }

  componentDidMount() {
    this.handleProject()
  }

  handleProject = () => {
    const id = this.props.match.params.id
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/project/${id}`)
      .then(res => this.setState({ project: res.data }))
  }

  render() {
    const { project } = this.state
    return (
      <div>
        <Navbar />
        <h1>{project.name}</h1>
        <img src='' alt='' />
        <p>{project.description}</p>
        <a
          href={project.github_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Lien vers Github
        </a>
        <a
          href={project.project_url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Lien vers le Site
        </a>
        <UpdateProject project={project} />
      </div>
    )
  }
}

export default Project
