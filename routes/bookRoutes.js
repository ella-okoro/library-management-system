const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Add a new book
router.post('/books', async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({ title, author });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
