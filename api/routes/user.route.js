import express from "express";
import verifyUser from "../utils/verifyUser.js";
import {
  getAllMemes,
  createMemes,
  deleteMemes,
  likeMemes,
  replyMemes,
} from "../controllers/user.controller.js";

// Define routes for all user related routes

const router = express.Router();

// Define the various user routes to match
router.get("/getmemes", getAllMemes);
router.post("/create", verifyUser, createMemes);
router.delete("/delete/:id", verifyUser, deleteMemes);
router.post("/like/:id", verifyUser, likeMemes);
router.post("/reply", verifyUser, replyMemes);

export default router;
