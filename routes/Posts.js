import express from "express";
import Posts from "../models/Posts.js";

const router = express.Router();

// get all post
router.get("/", async (req, res) => {
  try {
    const allPosts = await Posts.find();
    res.json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create post
router.post("/", async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get one post

router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update one post
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Posts.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatePost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  try {
    await Posts.findByIdAndDelete(req.params.id)
      .then(() => res.json({ message: "post deleted..." }))
      .catch((err) => res.json(err));
  } catch (error) {
    res.status(500).json(error);
  }
});

// like
router.put("/like/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    const updatePost = await Posts.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          likes: post.likes + 1,
        },
      },
      { new: true }
    );
    res.status(201).json(updatePost);
  } catch (error) {
    res.json(error);
  }
});

export default router;
