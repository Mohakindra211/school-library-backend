const express = require("express");
const app = express();
const { sequelize } = require("./models");
const booksRouter = require("./routes/books");

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes for managing books
app.use("/books", booksRouter);

module.exports = app;
