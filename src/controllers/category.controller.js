
const category = [];




// category CRUD

// Get All category
export const getAll = (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json({
        message: "All category fetched",
        success: true,
        data: category,
    });
};

// Get category By ID
export const getById = (req, res) => {
   // const id = req.params.id;
   const { id } = req.params;

   const category = category.find((category) => category._id === Number(id));

   if (!category) {
    res.status(404).json({
        message: "category not found",
        success: false,
        data: null,
    });
    return;
   }

    res.status(200).json({
        message: `category with ID ${id} fetched`,
        success: true,
        data: category,
    });
};

// Create category
export const create = (req, res) => {
    const { categoryName, description } = req.body;

    category.push({
        categoryName,
        description,
        createdAt: new Date(Date.now()),
        _id: category.length + 1,
    });

    res.status(201).json({
        message: "category created",
        success: true,
        data: category[category.length - 1],
    });
};

// Update category
export const update = (req, res) => {
    const id = req.params.id;

    const { caategoryName, description } = req.body;

    const index = category.findIndex((category) => category._id === Number());
    if (index === -1){
        res.status(404).json({
            message: "category not found",
            success: false,
            data: null,
        });
        return;
    }

    students[index] = {
        categoryName,
        description,
    };


    res.status(200).json({
        message: "category updated",
        success: true,
        data: category[index],
    });
};

// Delete category
export const remove = (req, res) => {
    const id = req.params.id;

    const index = category.findIndex((category) => category._id === Number());

    if (index === -1){
        res.status(404).json({
            message: "category not found",
            success: false,
            data: null,
        });
        return;
    }

    category.splice(index, 1);
    res.status(200).json({
        message: "category deleted",
        success: true,
        data: null,
    });
};

