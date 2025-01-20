const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()

  //res.status(200).json(books)
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
  //res.status(200).json(book)
  res.status(201).redirect('/api/books')
})

const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if(!book) {
    res.status(400)
    throw new Error('Book not found')
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})

  //res.status(200).json(updatedBook)
  res.redirect('/api/books')
})

const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if(!book) {
    res.status(400)
    throw new Error('Book not found')
  }

  await book.deleteOne()

  //res.status(200).json({id: req.params.id})
  res.redirect('/api/books')
})

module.exports = {
  getBooks,
  getBookById,
  setBook,
  updateBook,
  deleteBook,
}