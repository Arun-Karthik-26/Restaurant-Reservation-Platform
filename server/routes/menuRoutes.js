import express from "express";
import upload from "../middleware/uploadMiddleware.js"; 
import { createMenu, getAllMenu, updateMenu ,deleteMenu} from "../controllers/menuController.js";

const router = express.Router();

router.post("/add", upload.single("image"), createMenu);  // Upload image while adding menu
router.get("/all", getAllMenu);                           // Get all menu items
router.put("/update/:id", upload.single("image"), updateMenu); // Update menu with image
router.delete("/delete/:id",deleteMenu);
export default router;
