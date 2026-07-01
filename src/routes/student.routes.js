import express from "express";
import {
    create,
    getAll,
    getById,
    remove,
    update,
} from "../controllers/student.controller.js";

const router = express.Router();
const mid = (req,res, next)=>{
   console.log("get all students mid");
   next();
}
// STUDENT CRUD

// Get All Students
router.get("/",mid, mid, getAll);
    

// Get Student By ID
router.get("/:id", getById);
   
// Create Student
router.post("students", create);
    
// Update Student
router.put("/:id",mid, mid, update);
    

// Delete Student
router.delete("/:id",mid, mid,remove);
    

export default router;