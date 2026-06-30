import express from "express";
import {
    create,
    getAll,
    getById,
    remove,
    update,
} from "../controllers/teacher.controller.js";

const router = express.Router();
//const teachers = [];




// teacher CRUD

// Get All teachers
router.get("/", getAll);
    

// Get teacher By ID
router.get("/:id", getById);
   

// Create teacher
router.post("/", create);
    

// Update teacher
router.put("/:id", update);

    

// Delete teacher
router.delete("/:id", remove);
    

export default router;