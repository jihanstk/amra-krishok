const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");
const cp = require("child_process");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const port = process.env.PORT || 3002;
const AuthHandler = require("./RouteHandlers/AuthHandlers");
const FarmerHandler = require("./RouteHandlers/FarmerPosts");
const PostHandler = require("./RouteHandlers/PostHandler");
const CommentHandler = require("./RouteHandlers/commentsHandler");
const verifyUser = require("./middleware/verifyUser");
const SellPost = require("./modals/sellPost");

// Middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.h6deoil.mongodb.net/amraKrishok?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("mongodb is connected to server");
  })
  .catch((err) => console.log(err.message));

app.get("/", async (req, res) => {
  res.send("SERVER IS RUNNING");
});
app.use("/user", AuthHandler);
app.use("/farmer", FarmerHandler);
app.use("/posts", PostHandler);
app.use("/comments", CommentHandler);

app.post("/jwt", (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "10h",
    });
    res.send({ token });
  } catch (error) {
    res.send({ message: "auth error", success: false });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
