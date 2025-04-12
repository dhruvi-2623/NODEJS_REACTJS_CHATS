import express from "express"
import { protectRoute } from "../middelware/auth.middleware.js";

const router = express.Router();

router.get("/user", protectRoute, getUserForSiderbar);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;