import http from "http";
import express from "express";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import categoryRoutes from "./routes/category.routes.js";





//creating express app instance
const app = express();

//creating http server
const server = http.createServer(app);

app.use(express.json());

// Home Route
 //app.get(path, handler);
app.get("/", (req, res) => {
    res.status(200).json({
    message:"server is up & running",
});
});

//using routes
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/category", categoryRoutes);





// Server
server.listen(8081, () => {
    console.log("Server running at http://localhost:8081");
    console.log("press ctrl+c close the server");
});