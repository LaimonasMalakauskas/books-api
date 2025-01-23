const express = require('express')
const router = express.Router()
const {getBooks, getBookById, setBook, updateBook, deleteBook, renderCreateBookPage} = require('../controllers/bookController')

router.route('/').get(getBooks).post(setBook)
router.route('/create').get(renderCreateBookPage)
router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook)


module.exports = router