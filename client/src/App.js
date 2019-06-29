import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav'
import Search from './pages/Search'
import Saved from './pages/Saved'

class App extends Component {
  state = {
    searchTerm: '',
    title: '',
    authors: '',
    description: '',
    url: '',
    image: '',
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(event.target.value)
  }

  handleSubmitSearch = event => {
    let searchTerm = this.state.searchTerm
    console.log(searchTerm)
  }
  render() {

    return (
      <Router>
        <div>
          <TopNav />
          <Route exact path='/' render={_ =>
            <Search
              searchTerm={this.state.searchTerm}
              handleInputChange={this.handleInputChange}
              handleSubmitSearch={this.handleSubmitSearch}
            />} />
          <Route exact path='/Saved' render={_ =>
            <Saved
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              url={this.state.url}
              image={this.state.image}
            />} />
        </div>
      </Router>
    )
  }
}

export default App