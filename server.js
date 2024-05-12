const app = require('./app')
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(console.log("Database connection successful!"));


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
