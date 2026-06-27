import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>School Management System</h1>");
});


// STUDENT CRUD

// Get All Students
app.get("/students", (req, res) => {
    res.json({
        message: "All students fetched",
        success: true,
        data: {
            _id: 1,
            name: "Sapana Gurung",
            class: "BCA 3rd Semester",
            email: "sapana@gmail.com"
        }
    });
});

// Get Student By ID
app.get("/students/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Student with ID ${id} fetched`,
        success: true,
        data: {
            _id: id,
            name: "Sapana Gurung",
            class: "BCA 3rd Semester",
            email: "sapana@gmail.com"
        }
    });
});

// Create Student
app.post("/students", (req, res) => {
    res.json({
        message: "Student created",
        success: true
    });
});

// Update Student
app.put("/students/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Student with ID ${id} updated`,
        success: true
    });
});

// Delete Student
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Student with ID ${id} deleted`,
        success: true
    });
});


// TEACHER CRUD

// Get All Teachers
app.get("/teachers", (req, res) => {
    res.json({
        message: "All teachers fetched",
        success: true,
        data: {
            _id: 1,
            name: "Ram Sharma",
            subject: "Computer Science"
        }
    });
});

// Get Teacher By ID
app.get("/teachers/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Teacher with ID ${id} fetched`,
        success: true,
        data: {
            _id: 1,
            name: "Ram Sharma",
            subject: "Computer Science"
        },
    })
});

// Create Teacher
app.post("/teachers", (req, res) => {
    res.json({
        message: "Teacher created",
        success: true
    });
});

// Update Teacher
app.put("/teachers/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Teacher with ID ${id} updated`,
        success: true
    });
});

// Delete Teacher
app.delete("/teachers/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `Teacher with ID ${id} deleted`,
        success: true
    });
});


// Server
server.listen(8081, "localhost", () => {
    console.log("Server running at http://localhost:8081");
});