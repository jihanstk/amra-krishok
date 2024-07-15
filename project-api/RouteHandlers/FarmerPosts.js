const express = require("express");
const SellPost = require("../modals/sellPost");
const mongoose = require("mongoose");
const verifyUser = require("../middleware/verifyUser");
const User = require("../modals/userSchema");

const router = express.Router();

// Get All Farmer Posts
router.get("/", async (req, res) => {
  try {
    const latestPost = await SellPost.find().sort({ _id: -1 }).limit(6);

    res.status(200).send({ latestPost, success: false });
  } catch (error) {
    res.status(500).send({ message: "data retrieve Fail", success: true });
  }
});

// Get single Farmer Post
router.get("/:email", verifyUser, async (req, res) => {
  const userEmail = req.params.email;

  try {
    const getSellPost = (
      await SellPost.find({
        posted_user: userEmail,
      })
    ).reverse();

    res.send(getSellPost);
  } catch (error) {
    res
      .status(500)
      .send({ messaage: "there is server side error", err: error.message });
  }
});

// Post A Farmer sell Posts
router.post("/", verifyUser, async (req, res) => {
  const sellData = req.body;

  try {
    const postedUser = await User.findOne({ email: req.userEmail });
    if (!postedUser) {
      return res.send({ message: "you are not able to post", success: false });
    }
    const posted_user_Id = postedUser.id;

    const sellSchema = new SellPost({ ...sellData, posted_user_Id });
    const data = await sellSchema.save();
    res.send(data);
  } catch (error) {
    res.send("something happened wrong");
  }
});
// router.get("/distinct", async (req, res) => {
//   try {
//     const data = new SellPost.distinct("category");

//     res.send(data);
//   } catch (error) {
//     res.send("something happened wrong");
//   }
// });
// Delete A Farmer sell Posts
router.delete("/:id", verifyUser, async (req, res) => {
  const id = req.params.id;

  const filter = { _id: new mongoose.Types.ObjectId(id) };

  try {
    const deleteData = await SellPost.findByIdAndDelete(filter);

    res.send({ deleteData, delete: true });
  } catch (error) {
    res.send("something happened wrong");
  }
});

module.exports = router;
