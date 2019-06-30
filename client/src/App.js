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
    thumbnail: '',
    book: {},
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
    let title = this.state.title
    let authors = this.state.authors
    let description = this.state.description
    let thumbnail = this.state.thumbnail
    let book = {}
    console.log(searchTerm)
    Book.getAll(searchTerm)
      .then(({ data }) => {
        data.items.forEach(({ volumeInfo }) => {
        booksArr.push(volumeInfo)
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
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              selfLink={this.state.selfLink}
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