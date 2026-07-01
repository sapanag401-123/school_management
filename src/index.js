import http from "http";
import express from "express";
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import categoryRoutes from "./routes/category.routes.js";





//creating express app instance
const app = express();

//creating http server
const server = http.createServer(app);

const middleware = (req, res, next) => {
   console.log("middleware 1");
   next();

};
app.use(middleware);

app.use((req, res, next)=>{
   console.log("mid 2");
   req.student = {
      name:"sapana gurung",
   };
   next();
});


//app.use(middleware);

app.use((req, res, next)=>{
   console.log("mid3");
   console.log(req.student);
   if(req.student){
      next();
   }else{
   res.status(401).json({
    message: "unauthorization. Access denied",
   });
}
   //next();
});


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

app.use((err,req,res,next)=>{ //global error handler
   console.log("err handler");
   console.log(err.message);

   res.status(err?.statusCode ?? 500).json({
    message: err?.message ?? "something went wrong ",
    success: false,
    date: null,
   });

});