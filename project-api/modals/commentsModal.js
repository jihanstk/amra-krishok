const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      require: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    commenter: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "users",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Comment = model("comments", commentSchema);
module.exports = Comment;
