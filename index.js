const express = require("express");
const app = express();
const { sequelize } = require("./models");
const booksRouter = require("./routes/books");

// Middleware for parsing JSON request bodies
app.use(express.json());

// Routes for managing books
app.use("/books", booksRouter);

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    app.listen(8000, () => {
      console.log("Server started on http://localhost:8000");
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
