import React, { Component } from 'react'
import Card from './Card'
import Form from './Form'

import axios from 'axios'

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
        <p>Hello</p>
        {
          projects.map(project => (
            <Card
              key={project.id}
              project={project}
            />
          ))
        }
        <Form />
      </div>
    )
  }
}

export default Home
