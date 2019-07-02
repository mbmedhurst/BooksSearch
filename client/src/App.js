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
    volumeInfo: {},
    title: '',
    authors: '',
    description: '',
    infoLink: '',
    imageLinks: '',
    thumbnail: '',
    savedBooks: [],
    book: {
      title: '',
      description: '',
      authors: '',
      infoLink: '',
      thumbnail: ''

    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    // console.log(event.target.value)
  }

  // search google books
  // this is working!
  handleSubmitSearch = event => {
    let searchTerm = this.state.searchTerm
    let booksArr = this.state.booksArr
    // console.log(searchTerm)
    Book.getAll(searchTerm)
      .then(({ data }) => {
        data.items.forEach(({ volumeInfo }) => {
          this.setState({
            book: {
              title: volumeInfo.title,
              description: volumeInfo.description,
              authors: volumeInfo.authors,
              infoLink: volumeInfo.infoLink,
              thumbnail: volumeInfo.imageLinks.thumbnail
            }
          })
          booksArr.push(this.state.book)
          this.setState(booksArr)
        })

        console.log(booksArr)
      })
  }

  handleSaveBook = event => {
    console.log(event.target.value)
    // let savedBooks = this.state.savedBooks
    // let newBook = {
    //   title: this.state.title,
    //   authors: this.state.authors,
    //   description: this.state.description,
    //   infoLink: this.state.infoLink,
    //   thumbnail: this.state.thumbnail
    // }
    // Book.postOne(newBook)
    // this.state.savedBooks.push(newBook)
    // this.setState({ ...savedBooks })
    // console.log(newBook)
    // console.log(savedBooks)
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
              handleSaveBook={this.handleSaveBook}
              volumeInfo={this.state.volumeInfo}
              booksArr={this.state.booksArr}
              book={this.state.book}
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              infoLink={this.state.infoLink}
              imageLinks={this.state.imageLinks}
            // thumbnail={this.state.thumbnail}
            />} />
          <Route exact path='/Saved' render={_ =>
            <Saved
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              infoLink={this.state.infoLink}
              imageLinks={this.state.imageLinks}
            // thumbnail={this.state.volumeInfo.imageLinks.thumbnail}
            />} />
        </div>
      </Router>
    )
  }
}

export default App