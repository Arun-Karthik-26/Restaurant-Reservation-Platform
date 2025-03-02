import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); // Register route
router.post("/login", loginUser); // Login route

export default router;
