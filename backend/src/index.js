import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import path from "path";

import cookiParser from "cookie-parser";
import {connectDB} from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes  from "./routes/message.route.js";
import { app,server } from "./lib/socket.js";

dotenv.config()

const PORT = process.env.PORT;
const _dirname = path.resolve();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  
}));
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(cookiParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(_dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, ()=>{
  console.log("server is running on port:" + PORT);
  connectDB()
});
