import express from "express";
import {
    create,
    getAll,
    getById,
    remove,
    update,
} from "../controllers/category.controller.js";

const router = express.Router();





// category CRUD

// Get All category
router.get("/", getAll);
    
// Get category By ID
router.get("/:id", getById);
   
// Create category
router.post("category", create);
    
// Update category
router.put("/:id", update);
    
// Delete category
router.delete("/:id", remove);
    

export default router;