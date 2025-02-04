import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { PORT } from "./config.js";
import formRouter from "./models/formRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/forms", formRouter);


app.get("/", (req, res) => res.send("Welcome To Form Server"));


mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
