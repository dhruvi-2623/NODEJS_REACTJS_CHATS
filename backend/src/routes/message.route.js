import express from "express"
import { protectRoute } from "../middelware/auth.middleware.js";
import { getUserForSiderbar, getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUserForSiderbar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;