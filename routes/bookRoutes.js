const Book = require('../models/Book.js')

module.exports = app => {
    // POST a book to the db
    // this is working!
    app.post('/books', (req, res) => Book.create(req.body, e => e ? console.log(e) : res.sendStatus(200)))

    // UPDATE a book in the db
    // this is working!
    app.put('/books/:_id', (req, res) => Book.update({ _id: req.params._id }, { $set: req.body }, e => e ? console.log(e) : res.sendStatus(200)))

    // GET all books from the db
    // this is working!
    app.get('/books', (req, res) => Book.find((e, docs) => e ? console.log(e) : res.json(docs)))

    // DELETE an book from the db
    // this is working!
    app.delete('/books/:_id', (req, res) => Book.remove({ _id: req.params._id }, e => e ? console.log(e) : res.sendStatus(200)))
}