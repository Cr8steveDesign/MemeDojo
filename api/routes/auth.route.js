import express from "express";
import { signUp, signOut, signIn } from "../controllers/auth.controllers.js";

//Instantiate a router that will be called when a path that matches a certain url is called
// This one is for the authentication urls /api/auth/****

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

export default router;
