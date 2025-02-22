// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     publishedYear: { type: Number, required: true },
//     category: { type: String, required: true },
//     availableCopies: { type: Number, required: true, default: 1 },
//   },
//   { timestamps: true }
// );

// const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

// module.exports = Book;

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: Number,
  category: String,
  availableCopies: { type: Number, required: true, min: 0 },
  borrowedBy: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      borrowedDate: Date,
      returnDate: Date,
      status: { type: String, enum: ['Borrowed', 'Returned'], default: 'Borrowed' }
    }
  ]
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

