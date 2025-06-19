const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Tambah buku
router.post('/', async (req, res) => {
  const { title, author, year } = req.body;
  const newBook = new Book({ title, author, year });
  await newBook.save();
  res.json(newBook);
});

// Ambil semua buku
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Hapus buku berdasarkan ID
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Buku dihapus' });
});

module.exports = router;
