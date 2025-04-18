import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cookiParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes  from "./routes/message.route.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookiParser());

app.use("/api/auth", authRoutes);
app.use("/api/auth", messageRoutes);

app.listen(PORT, ()=>{
  console.log("server is running on port:" + PORT);
  connectDB()
});