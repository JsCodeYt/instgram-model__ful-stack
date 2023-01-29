import mongoose from "mongoose";

async function connect() {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("mongo active..."))
    .catch(() => console.log("mongo failure"));
}
export { connect };
