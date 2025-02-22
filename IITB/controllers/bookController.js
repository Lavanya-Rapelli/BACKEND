const Book = require('../models/bookModel.js');

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, publishedYear, category, availableCopies } = req.body;

    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book',err:error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    Object.assign(book, req.body);
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.deleteOne();
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};

const borrowBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      const user = await User.findById(req.user.id);
  
      if (!book || !user) {
        return res.status(404).json({ message: 'Book or User not found' });
      }
  
      if (book.availableCopies < 1) {
        return res.status(400).json({ message: 'Book not available' });
      }
  
      const borrowRecord = {
        book: book._id,
        borrowedDate: new Date(),
        returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
        status: 'Borrowed'
      };
  
      user.borrowedBooks.push(borrowRecord);
      book.borrowedBy.push({ user: req.user.id, ...borrowRecord });
  
      book.availableCopies -= 1;  // Decrease available copies
  
      await user.save();
      await book.save();
  
      res.status(200).json({ message: 'Book borrowed successfully', book });
    } catch (error) {
      res.status(500).json({ message: 'Error borrowing book', err: error.message });
    }
  };
  const returnBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      const user = await User.findById(req.user.id);
  
      if (!book || !user) {
        return res.status(404).json({ message: 'Book or User not found' });
      }
  
      const borrowedRecord = user.borrowedBooks.find(b => b.book.toString() === book._id.toString() && b.status === 'Borrowed');
  
      if (!borrowedRecord) {
        return res.status(400).json({ message: 'Book was not borrowed or already returned' });
      }
  
      borrowedRecord.status = 'Returned';
      book.borrowedBy.find(b => b.user.toString() === req.user.id).status = 'Returned';
  
      book.availableCopies += 1; // Increase available copies
  
      await user.save();
      await book.save();
  
      res.status(200).json({ message: 'Book returned successfully', book });
    } catch (error) {
      res.status(500).json({ message: 'Error returning book', err: error.message });
    }
  };
  // Search books by title
const searchBooks = async (req, res) => {
    try {
      const { title } = req.query;
  
      if (!title) {
        return res.status(400).json({ message: "Please provide a title to search" });
      }
  
      const books = await Book.find({ title: { $regex: title, $options: "i" } });
  
      if (books.length === 0) {
        return res.status(404).json({ message: "No books found" });
      }
  
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Error searching books", err: error.message });
    }
  };
  
module.exports = { getBooks, getBookById, addBook, updateBook, deleteBook, borrowBook, returnBook,searchBooks};
