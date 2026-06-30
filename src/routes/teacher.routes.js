import express from "express";

const router = express.Router();
const teachers = [];




// teacher CRUD

// Get All teachers
router.get("/", (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json({
        message: "All teachers fetched",
        success: true,
        data: teachers,
    });
});

// Get teacher By ID
router.get("/:id", (req, res) => {
   // const id = req.params.id;
   const { id } = req.params;

   const teacher = teachers.find((teacher) => teacher._id === Number(id));

   if (!teacher) {
    res.status(404).json({
        message: "teacher not found",
        success: false,
        data: null,
    });
    return;
   }

    res.status(200).json({
        message: `teacher with ID ${id} fetched`,
        success: true,
        data: teacher,
    });
});

// Create teacher
router.post("/", (req, res) => {
    const { name, subject } = req.body;

    teachers.push({
        name,
        subject,
        createdAt: new Date(Date.now()),
        _id: teachers.length + 1,
    });

    res.status(201).json({
        message: "Student created",
        success: true
        data: teachers[teachers.length - 1],
    });
});

// Update teacher
router.put("/:id", (req, res) => {
    const id = req.params.id;

    const { name, subject } = req.body;

    const index = teachers.findIndex((teacher) => teachers._id === Number());
    if (index === -1){
        res.status(404).json({
            message: "teacher not found",
            success: false,
            data: null,
        });
        return;
    }

    students[index] = {
        name,
        subject,
    };


    res.status(200).json({
        message: "teacher updated",
        success: true,
        data: teachers[index],
    });
});

// Delete teacher
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const index = teachers.findIndex((teacher) => teachers._id === Number());

    if (index === -1){
        res.status(404).json({
            message: "teacher not found",
            success: false,
            data: null,
        });
        return;
    }

    teachers.splice(index, 1);
    res.status(200).json({
        message: "teacher deleted",
        success: true,
        data: null,
    });
});

export default router;