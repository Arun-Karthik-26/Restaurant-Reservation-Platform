import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Serve uploaded images
app.use("/uploads", express.static(path.join("uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
