const { Book } = require("../models");

module.exports = {
  async createBook(req, res) {
    try {
      const book = await Book.create(req.body);
      res.status(201).json(book);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getBooks(req, res) {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getBookById(req, res) {
    try {
      const book = await Book.findByPk(req.params.bookId);
      if (!book) {
        res.status(404).json({ error: "Book not found" });
      } else {
        res.status(200).json(book);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async deleteBook(req, res) {
    try {
      const book = await Book.findByPk(req.params.bookId);
      if (!book) {
        res.status(404).json({ error: "Book not found" });
      } else {
        await book.destroy();
        res.status(204).send();
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
