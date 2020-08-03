import React, { Component } from 'react'
import Card from './Card'
import Navbar from './Navbar'

import axios from 'axios'

import './Home.css'

class Home extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/project`)
      .then(res => this.setState({ projects: res.data }))
  }

  render() {
    const { projects } = this.state
    return (
      <div>
        <Navbar />
        <div className='cards-container'>
          {
            projects.map(project => (
              <Card
                key={project.id}
                project={project}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default Home
