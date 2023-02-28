const app = require("./app");
const { sequelize } = require("./models");

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
