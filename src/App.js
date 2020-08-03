import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NewProject from './components/NewProject'
import Project from './components/Project'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects/new' component={NewProject} />
        <Route path='/projects/:id' component={Project} />
      </Switch>
    </Router>
  )
}

export default App
