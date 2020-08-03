import React, { Component } from 'react'
import Form from './Form'

import axios from 'axios'

class Home extends Component {

  componentDidMount() {
    this.getProjects()
  }

  getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/home`)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <Form />
      </div>
    )
  }
}

export default Home
