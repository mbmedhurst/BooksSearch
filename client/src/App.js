import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Book from './components/Utils/books.js'

class App extends Component {
  state = {
    searchTerm: '',
    booksArr: [],
    title: '',
    authors: '',
    description: '',
    selfLink: '',
    imageLinks: '',
    thumbnail: '',
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(event.target.value)
  }

  handleSubmitSearch = event => {
    let searchTerm = this.state.searchTerm
    let booksArr = this.state.booksArr
    console.log(searchTerm)
    Book.getAll(searchTerm)
      .then(({ data }) => {
        data.items.forEach(({ selfLink, volumeInfo }) => {
        booksArr.push({selfLink, volumeInfo})
        this.setState(booksArr)
        })
        console.log(booksArr)
      })
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
              booksArr={this.state.booksArr}
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              selfLink={this.state.selfLink}
              imageLinks={this.state.imageLinks}
              thumbnail={this.state.thumbnail}
            />} />
          <Route exact path='/Saved' render={_ =>
            <Saved
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              selfLink={this.state.selfLink}
              thumbnail={this.state.thumbnail}
            />} />
        </div>
      </Router>
    )
  }
}

export default App