const express = require("express");
const verifyUser = require("../middleware/verifyUser");
const Comment = require("../modals/commentsModal");

const router = express.Router();

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    const getPostComments = await Comment.find({ postId: postId })
      .populate({ path: "commenter", select: "name userPhoto email " })
      .populate({ path: "likes", select: "name " })
      .sort({ _id: -1 })
      .limit(3);

    const comments = getPostComments;
    res.send(comments);
  } catch (error) {
    res
      .status(500)
      .send({ messaage: "there is server side error", err: error.message });
  }
});

// Post A Farmer sell Posts
router.post("/", verifyUser, async (req, res) => {
  const commentInfo = req.body;

  try {
    const comment = new Comment(commentInfo);
    const data = await comment.save();
    res.send(data);
  } catch (error) {
    res.send("something happened wrong");
  }
});

router.patch("/:id", verifyUser, async (req, res) => {
  const commentId = req.params.id;
  const { commentContent } = req.body;
  console.log(commentId, commentContent);

  try {
    const comment = await Comment.updateOne(
      { _id: commentId },
      { comment: commentContent }
    );
    res.send(comment);
  } catch (error) {
    res
      .status(500)
      .send({ message: "something happened wrong", error: error.message });
  }
});
router.post("/likes/:id", verifyUser, async (req, res) => {
  const commentId = req.params.id;
  const { liker } = req.body;
  console.log(liker, commentId);

  try {
    const comment = await Comment.updateOne(
      { _id: commentId },
      {
        $push: {
          likes: liker,
        },
      }
    );
    res.send(comment);
  } catch (error) {
    res
      .status(500)
      .send({ message: "something happened wrong", error: error.message });
  }
});
router.patch("/likes/:id", verifyUser, async (req, res) => {
  const commentId = req.params.id;
  const { liker } = req.body;
  console.log(liker, commentId);

  try {
    const comment = await Comment.updateOne(
      { _id: commentId },
      {
        $pull: {
          likes: liker,
        },
      }
    );
    res.send(comment);
  } catch (error) {
    res
      .status(500)
      .send({ message: "something happened wrong", error: error.message });
  }
});

router.delete("/:id", verifyUser, async (req, res) => {
  const commentId = req.params.id;

  try {
    const comment = await Comment.deleteOne({ _id: commentId });
    res.send(comment);
  } catch (error) {
    res.send("something happened wrong");
  }
});

module.exports = router;
