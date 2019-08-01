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
    dbBooks: [],
    book: {
      title: '',
      authors: '',
      description: '',
      imageLinks: '',
      thumbnail: '',
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  // search google books
  // this is working!
  handleSubmitSearch = event => {
    let searchTerm = this.state.searchTerm
    let booksArr = this.state.booksArr
    Book.getBooks(searchTerm)
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
      })
  }

  // save a book to the db
  // this is working!
  handleSaveBook = event => {
    console.log(event.target)
    let booksArr = this.state.booksArr
    let savedBooks = this.state.savedBooks
    let newBook = booksArr[event.target.value]
    Book.postOne(newBook)
    this.state.savedBooks.push(newBook)
    this.setState({ ...savedBooks })
    console.log(newBook)
    console.log(savedBooks)
  }

  // saved books displayed on page mount
  // this is working!
  componentDidMount() {
    let dbBooks = []
    Book.getAll()
      .then(({ data }) => {
        dbBooks.push(data)
        this.setState({ dbBooks: data })
      })
  }

  // delete a book from the database
  // this is working!
  handleDeleteBook = (event, _id) => {
    let dbBooks = this.state.dbBooks
    Book.deleteOne(event.target.value)
      .then(({ data }) => {
        this.setState({
          dbBooks: this.state.dbBooks.filter(book => book._id !== _id)
        })
      })
    Book.getAll()
      .then(({ data }) => {
        dbBooks.push(data)
        this.setState({ dbBooks: data })
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
              handleSaveBook={this.handleSaveBook}
              volumeInfo={this.state.volumeInfo}
              booksArr={this.state.booksArr}
              book={this.state.book}
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              infoLink={this.state.infoLink}
              imageLinks={this.state.imageLinks}
              thumbnail={this.state.thumbnail}
            />} />
          <Route exact path='/saved' render={_ =>
            <Saved
              componentDidMount={this.componentDidMount}
              handleDeleteBook={this.handleDeleteBook}
              dbBooks={this.state.dbBooks}
              savedBooks={this.state.savedBooks}
              title={this.state.title}
              authors={this.state.authors}
              description={this.state.description}
              infoLink={this.state.infoLink}
              imageLinks={this.state.imageLinks}
              thumbnail={this.state.thumbnail}
            />} />
        </div>
      </Router>
    )
  }
}

export default App