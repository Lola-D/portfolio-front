import React, { Component } from 'react'

import axios from 'axios'

import './Form.css'

class UpdateProject extends Component {

  constructor(props) {
    super(props)
    const { project } = this.props
    this.state = {
      name: project.name,
      description: project.description,
      githubUrl: project.github_url,
      projectUrl: project.project_url,
      preview: project.preview
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id } = this.props.project.id
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/project/${id}`, this.state)
      .then(res => console.log(res))
  }

  render() {
    const { name, description, github_url, project_url } = this.props.project
    return (
      <div className='form-project'>
        <h2>Modifier le projet</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='input-project'>
            <label>Nom du projet :</label>
            <input
              onChange={this.handleChange}
              name='name'
              type='text'
              value={name}
              required
            />
          </div>
          <div className='input-project'>
            <label>Description :</label>
            <textarea
              onChange={this.handleChange}
              name='description'
              rows='5'
              cols='33'
              value={description}
              required
            />
          </div>
          <div className='input-project'>
            <label>Lien Github :</label>
            <input
              onChange={this.handleChange}
              name='githubUrl'
              type='url'
              value={github_url}
              required
            />
          </div>
          <div className='input-project'>
            <label>Lien du project :</label>
            <input
              onChange={this.handleChange}
              name='projectUrl'
              type='url'
              value={project_url}
              required
            />
          </div>
          <div className='input-project'>
            <label>Apercu :</label>
            <input
              onChange={this.handleChange}
              name='preview'
              type='file'
              accept='image/jpeg'
              required
            />
          </div>
          <button
            className='input-project btn-form'
            type='submit'
          >
            Valider
          </button>
        </form>
      </div>
    )
  }
}

export default UpdateProject
