const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')

const renderHomePage = asyncHandler(async (req, res) => {
  res.render('index');
})

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()

  res.render('books', {title: 'Books', books})
})

const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(404);
    throw new Error('Book not found')
  }

  res.render('book', { book })
})

const renderCreateBookPage = asyncHandler(async (req, res) => {
  res.render('createBook')
})

const setBook = asyncHandler(async (req, res) => {
  const { name, author, title, price } = req.body
  if(!name || !author || !title || !price) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const book = await Book.create({
    name,
    author,
    title,
    price
  })

  res.status(201).redirect('/api/books')
})

const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if(!book) {
    res.status(400)
    throw new Error('Book not found')
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.redirect('/api/books')
})

const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if(!book) {
    res.status(400)
    throw new Error('Book not found')
  }

  await book.deleteOne()

  res.redirect('/api/books')
})

module.exports = {
  renderHomePage,
  getBooks,
  getBookById,
  renderCreateBookPage,
  setBook,
  updateBook,
  deleteBook,
}