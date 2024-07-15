const { default: mongoose } = require("mongoose");

const sellPost = new mongoose.Schema(
  {
    title: { type: String, required: true },
    zilla: { type: String, required: true },
    category: { type: String, required: true },
    phone: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
    postType: { type: String, required: true, enum: ["বিক্রয়", "সমস্যা"] },
    description: { type: String, required: true },
    photo: Array,
    posted_user: { type: String, require: true },
    posted_user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "users",
    },

    like: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: new Date().toDateString(),
    },
  },
  { timestamps: true }
);

const SellPost =
  mongoose.models.sellposts || mongoose.model("sellposts", sellPost);
module.exports = SellPost;
