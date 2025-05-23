import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookiParser from "cookie-parser";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes  from "./routes/message.route.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  
}));
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(cookiParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, ()=>{
  console.log("server is running on port:" + PORT);
  connectDB()
});
