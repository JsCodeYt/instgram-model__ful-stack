import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    followers: {
      type: Array,
      required: false,
      default: [],
    },
    followings: {
      type: Array,
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", Schema);

export default userModel;
