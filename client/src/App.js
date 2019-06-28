import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav'
import Search from './components/Search'
import Saved from './components/Saved'

class App extends Component {
  render() {

    return (
      <Router>
        <div>
        <TopNav />
        <Route exact path='/' component={Search} />
        <Route exact path='/Saved' component={Saved} />
        </div>
      </Router>
    )
  }
}

export default App