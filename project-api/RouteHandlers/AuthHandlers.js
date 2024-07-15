const express = require("express");
const User = require("../modals/userSchema");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const verifyUser = require("../middleware/verifyUser");

// Get A User for Authorization
router.get("/:email", async (req, res) => {
  const userEmail = req.params.email;

  const filter = { email: userEmail };
  const getUser = await User.find(filter).select("-savedPosts");

  if (getUser) {
    res.send(getUser);
  } else {
    res.send([{ message: "User not Found", success: false }]);
  }
});

router.get("/bookmark/posts", verifyUser, async (req, res) => {
  const filter = { email: req.userEmail };
  const getUser = await User.find(filter).populate({
    path: "savedPosts",
    populate: {
      path: "posted_user_Id",
      select: "email name userPhoto -_id",
    },
  });

  if (getUser) {
    res.send(getUser);
  } else {
    res.send([{ message: "User not Found", success: false }]);
  }
});

// Post A User for Authorization
router.post("/", async (req, res) => {
  try {
    const info = req.body;

    const existingUser = await User.find({ email: info.email });

    if (existingUser.length > 0) {
      return res.send("user Exist");
    }
    const user = new User(info);
    const insertedUser = await user.save();

    res.status(200).send({ insertedUser, success: true });
  } catch (error) {
    res.send("there was server side error.");
  }
});

// Update User bookmark data
router.put("/bookmark", verifyUser, async (req, res) => {
  try {
    const { _id } = req.body;

    const existingUser = await User.find({ email: req.userEmail });
    if (existingUser.length > 0) {
      let alreadyBookmarked = false;
      existingUser[0].savedPosts.forEach((id) => {
        if (id == _id) {
          alreadyBookmarked = true;
          return;
        }
      });

      if (alreadyBookmarked) {
        res.send({ message: "already bookmarked", success: false });
      } else {
        const updateBookmark = await User.updateOne(
          { email: req.userEmail },
          {
            $push: {
              savedPosts: _id,
            },
          }
        );
        res.send({ updateBookmark, success: true });
      }
    }
  } catch (error) {
    res.send({ err: error.message });
  }
});
router.put("/removeBookmark", verifyUser, async (req, res) => {
  try {
    const { _id } = req.body;

    const existingUser = await User.find({ email: req.userEmail });
    if (existingUser.length > 0) {
      const updateBookmark = await User.updateOne(
        { email: req.userEmail },
        {
          $pull: {
            savedPosts: _id,
          },
        }
      );
      res.send({ updateBookmark, success: true });
    }
  } catch (error) {
    res.send({ err: error.message });
  }
});

module.exports = router;
