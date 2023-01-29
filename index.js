import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { connect } from "./functions/index.js";
import auth from "./routes/Auth.js";
import post from "./routes/Posts.js"

dotenv.config();
const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// mongo connect function
connect();

// routes
app.use("/api/auth", auth);
app.use("/api/post", post)


app.listen(process.env.PORT, () => console.log("server active"));
