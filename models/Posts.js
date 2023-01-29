import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    authorId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model("Posts", Schema);

export default postModel;
