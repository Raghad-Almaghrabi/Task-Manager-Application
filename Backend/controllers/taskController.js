//@desc Get all tasks
//@route GET /api/tasks
//@access public
const getTasks = (req, res) => {
    res.status(200).json({ message: "Get all tasks" });
};

//@desc Get single task
//@route GET /api/tasks/:id
//@access public
const getTask = (req, res) => {
    res.status(200).json({ message: `Get task ${req.params.id}` });
};

//@desc Create task
//@route POST /api/tasks
//@access public
const createTask = (req, res) => {
    console.log("the request body is ", req.body);
    res.status(201).json({ message: "Create task" });
};

//@desc Update task
//@route PUT /api/tasks/:id
//@access public
const updateTask = (req, res) => {
    res.status(200).json({ message: `Update task ${req.params.id}` });
};

//@desc Delete task
//@route DELETE /api/tasks/:id
//@access public
const deleteTask = (req, res) => {
    res.status(200).json({ message: `Delete task ${req.params.id}` });
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };