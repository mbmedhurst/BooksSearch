import axios from 'axios'

const Book = {
    // POST one new book to db
    postOne: newBook => axios.post('/books', newBook),
    // DELETE one book from db
    deleteOne: id => axios.delete(`books/${id}`),
    // GET all books from search => this is working!
    getAll: (searchTerm) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDqhm1cXIFmmptk2YxKhbX_8QWMeYFx59k&fi&fields=items/volumeInfo(title,authors,description,imageLinks(thumbnail)),items/selfLink`)
}

export default Book