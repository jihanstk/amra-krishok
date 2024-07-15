const express = require("express");
const SellPost = require("../modals/sellPost");
const mongoose = require("mongoose");
const verifyUser = require("../middleware/verifyUser");

const router = express.Router();

// Get All Farmer Posts
// router.get("/", async (req, res) => {
//   try {
//     const latestPost = (await SellPost.find().limit(6)).reverse();
//     res.status(200).send({ latestPost, success: false });
//   } catch (error) {
//     res.status(500).send({ message: "data retrieve Fail", success: true });
//   }
// });

// Get single Farmer Post
router.get("/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    const getSinglePost = await SellPost.find({
      _id: postId,
    }).populate("posted_user_Id", "name email userPhoto -_id");

    res.send(getSinglePost);
  } catch (error) {
    res
      .status(404)
      .send({ messaage: "This Post Not Found", err: error.message });
  }
});

// Post A Farmer sell Posts

module.exports = router;
