require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./Routes/UserRoute');
const cors = require("cors");

const app = express();

// Middlware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(`/api`, userRouter);

app.listen(3001, () => {
  console.log("Application Serving at Port 3001");
});

// Mongo DB Connection
mongoose.set('strictQuery', true);
mongoose.connect(
  // `mongodb://${process.env.Mongo_IP}/${process.env.MOngo_DB}`,
  `${process.env.Mongo_IP}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

module.exports = app;
