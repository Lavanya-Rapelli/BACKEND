const express = require('express');
const { protect, librarianOnly } = require('../middlewares/authMiddleware.js');
const {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
  searchBooks,
} = require('../controllers/bookController.js');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', protect, librarianOnly, addBook); 
router.put('/:id', protect, librarianOnly, updateBook); 
router.delete('/:id', protect, librarianOnly, deleteBook); 
router.post('/borrow/:id', protect, borrowBook);  // User borrows book
router.post('/return/:id', protect, librarianOnly, returnBook, );  // Librarian verifies return
router.get('/search/:keyword', searchBooks);


module.exports = router;
