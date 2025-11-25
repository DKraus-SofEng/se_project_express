const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const auth = require("./middlewares/auth");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to database");
  })
  .catch(console.error);

app.use(express.json());
app.use(cors());

// Public routes
app.use("/", usersRouter); // POST /handles signup and signin

// Protected routes

app.use(auth);
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
