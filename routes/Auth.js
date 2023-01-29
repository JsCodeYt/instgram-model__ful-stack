import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      if (user.password === req.body.password) {
        try {
          res.json(user);
        } catch (err) {
          res.json(err);
        }
      } else {
        res.json({ message: "Wrong a password.." });
      }
    } else return res.json("Not found User..");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
