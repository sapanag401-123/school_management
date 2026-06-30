import express from "express";
const router = express.Router();
const students = [];




// STUDENT CRUD

// Get All Students
router.get("/", (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json({
        message: "All students fetched",
        success: true,
        data: students,
    });
});

// Get Student By ID
router.get("/:id", (req, res) => {
   // const id = req.params.id;
   const { id } = req.params;

   const student = students.find((student) => student._id === Number(id));

   if (!student) {
    res.status(404).json({
        message: "student not found",
        success: false,
        data: null,
    });
    return;
   }

    res.status(200).json({
        message: `Student with ID ${id} fetched`,
        success: true,
        data: student,
    });
});

// Create Student
router.post("/", (req, res) => {
    const { name, email, password } = req.body;

    students.push({
        name,
        email,
        password,
        createdAt: new Date(Date.now()),
        _id: students.length + 1,
    });

    res.status(201).json({
        message: "Student created",
        success: true
        data: students[students.length - 1],
    });
});

// Update Student
router.put("/:id", (req, res) => {
    const id = req.params.id;

    const { name, email, password } = req.body;

    const index = students.findIndex((student) => students._id === Number());
    if (index === -1){
        res.status(404).json({
            message: "student not found",
            success: false,
            data: null,
        });
        return;
    }

    students[index] = {
        name,
        email,
        password,
    };


    res.status(200).json({
        message: "Student updated",
        success: true,
        data: students[index],
    });
});

// Delete Student
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const index = students.findIndex((student) => students._id === Number());

    if (index === -1){
        res.status(404).json({
            message: "student not found",
            success: false,
            data: null,
        });
        return;
    }

    students.splice(index, 1);
    res.status(200).json({
        message: "Student deleted",
        success: true,
        data: null,
    });
});

export default router;