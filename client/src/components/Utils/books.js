import axios from 'axios'

const Book = {
    // GET all saved books from the db
    getAll: _ => axios.get('/books'),  
    // POST one new book to db => this is working!
    postOne: newBook => axios.post('/books', newBook),
    // DELETE one book from db
    deleteOne: id => axios.delete(`books/${id}`),
    // GET all books from google search => this is working!
    getBooks: (searchTerm) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDqhm1cXIFmmptk2YxKhbX_8QWMeYFx59k&fi&fields=items/volumeInfo(title,authors,description,imageLinks(thumbnail),infoLink)`)
}

export default Book