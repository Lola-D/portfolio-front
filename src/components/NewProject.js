import React, { Component } from 'react'
import Navbar from './Navbar'

import axios from 'axios'

import './Form.css'

class NewProject extends Component {

  state = {
    name: '',
    description: '',
    githubUrl: '',
    projectUrl: '',
    preview: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/project`, this.state)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='form-project'>
          <h2>Ajouter un projet</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='input-project'>
              <label>Nom du projet :</label>
              <input
                onChange={this.handleChange}
                name='name'
                type='text'
                placeholder='Mon super projet'
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
                placeholder='Vraiment un super projet'
                required
              />
            </div>
            <div className='input-project'>
              <label>Lien Github :</label>
              <input
                onChange={this.handleChange}
                name='githubUrl'
                type='url'
                placeholder='https://example.com'
                required
              />
            </div>
            <div className='input-project'>
              <label>Lien du project :</label>
              <input
                onChange={this.handleChange}
                name='projectUrl'
                type='url'
                placeholder='https://example.com'
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
      </div>
    )
  }
}

export default NewProject
