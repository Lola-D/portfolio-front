import React, { Component } from 'react'

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
      </div>
    )

  }
}

export default Project
