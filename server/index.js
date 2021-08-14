const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catagoryRoute = require("./routes/catagories");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/server/auth", authRoute);
  app.use("/server/users", userRoute);
  app.use("/server/posts", postRoute);
  app.use("/server/catagories", catagoryRoute);
app.listen("5000", () => {
  console.log("Backend is running...");
});
