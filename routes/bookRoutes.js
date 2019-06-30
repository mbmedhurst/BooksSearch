const Book = require('../models/Book.js')

module.exports = app => {
    // GET books from google books based on search input
    // this is working if I put it into a google chrome url
    // not working in postman
    // api key: AIzaSyDqhm1cXIFmmptk2YxKhbX_8QWMeYFx59k
    // secure api key code: key=API_KEY
    // &fields=items/selfLink,items/volumeInfo(title,description,%20authors,imageLinks/thumbnail
    app.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDqhm1cXIFmmptk2YxKhbX_8QWMeYFx59k&fields=items/volumeInfo(title,authors,description,imageLinks(thumbnail)),items/selfLink`), (req, res) => Book.find((e, docs) => e ? console.log(e) : res.json(docs))

    // POST a book to the db
    // this is working!
    app.post('/books', (req, res) => Book.create(req.body, e => e ? console.log(e) : res.sendStatus(200)))

    // DELETE an book from the db
    // this is working!
    app.delete('/books/:_id', (req, res) => Book.remove({ _id: req.params._id }, e => e ? console.log(e) : res.sendStatus(200)))
}