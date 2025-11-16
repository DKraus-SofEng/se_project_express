const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT = 3001 } = process.env;
const mainRouter = require("./routes/index");

// there is an empty line after the requires - I don't know why GitHub keeps giving an error
mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    // console.log("Connected to database");
  })
  .catch(console.error);

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133", // use the test user's _id
  };
  next();
});

app.use("/", mainRouter);

app.listen(PORT, () => {
  // console.log(`Listening on ${PORT}`);
});
