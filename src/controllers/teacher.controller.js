const teachers = [];




// teacher CRUD

// Get All teachers
export const getAll = (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json({
        message: "All teachers fetched",
        success: true,
        data: teachers,
    });
};

// Get teacher By ID
export const getById = (req, res, next) => {
    console.log("get all teacher");
    console.log(req.student);
   // const id = req.params.id;
   const { id } = req.params;

   const teacher = teachers.find((teacher) => teacher._id === Number(id));
   console.log(teacher);

   if (!teacher) {
    next({
        message: "teacher not found",
        statusCode: 404,
    });
    return;
   }

    res.status(200).json({
        message: `teacher with ID ${id} fetched`,
        success: true,
        data: teacher,
    });
};

// Create teacher
export const create = (req, res, next) => {
    const { name, subject } = req.body;

    teachers.push({
        name,
        subject,
        createdAt: new Date(Date.now()),
        _id: teachers.length + 1,
    });

    res.status(201).json({
        message: "Student created",
        success: true,
        data: teachers[teachers.length - 1],
    });
};

// Update teacher
export const update = (req, res) => {
    const id = req.params.id;

    const { name, subject } = req.body;

    const index = teachers.findIndex((teacher) => teachers._id === Number());
    
    if (!teacher) {
    next({
        message: "teacher updated",
        statusCode: 404,
    });
    return;
   }

    res.status(200).json({
        message: `teacher with ID ${id} fetched`,
        success: true,
        data: teacher,
    });
};

// Delete teacher
export const remove = (req, res) => {
    const id = req.params.id;

    const index = teachers.findIndex((teacher) => teachers._id === Number());

    if (!teacher) {
    next({
        message: "teacher deleted",
        statusCode: 404,
    });
    return;
   }

    res.status(200).json({
        message: `teacher with ID ${id} fetched`,
        success: true,
        data: teacher,
    });
};

    // teachers.splice(index, 1);
    // res.status(200).json({
    //     message: "teacher deleted",
    //     success: true,
    //     data: null,
    
