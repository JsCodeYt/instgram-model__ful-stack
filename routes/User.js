import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const updateUser = User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/follow/:authorId/:userId", async (req, res) => {
  try {
    const author = await User.findById(req.params.authorId);
    const user = await User.findById(req.params.userId);
    if (author.followers.includes(user._id)) {
      const updateAuthor = await User.findByIdAndUpdate(
        req.params.authorId,
        {
          $push: {
            followers: user._id,
          },
        },
        { new: true }
      );
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $push: {
            followings: author._id,
          },
        },
        { new: true }
      );
      const updateUsers = [updateAuthor, updateUser];

      res.json(updateUsers);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
