import express from "express";
import { protectedRoute } from "../middleware/authMiddleware.js";
import {
  createSession,
  getActiveSessions,
  getMyRecentSessions,
  getSessionById,
  joinSession,
  endSession,
} from "../controllers/sessionController.js";

const router = express.Router();

router.post("/", protectedRoute, createSession);
router.get("/active", protectedRoute, getActiveSessions);
router.get("/my-recent", protectedRoute, getMyRecentSessions);

router.get("/:id", protectedRoute, getSessionById);
router.put("/:id/join", protectedRoute, joinSession);
router.put("/:id/end", protectedRoute, endSession);

export default router;
