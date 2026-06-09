const pool = require("../config/db");

//@desc Get all tasks
//@route GET /api/tasks
//@access public
const getTasks = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//@desc Get single task
//@route GET /api/tasks/:id
//@access public
const getTask = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//@desc Create task
//@route POST /api/tasks
//@access public
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const result = await pool.query(
            "INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *",
            [title, description, status || "pending"]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//@desc Update task
//@route PUT /api/tasks/:id
//@access public
const updateTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const result = await pool.query(
            "UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *",
            [title, description, status, req.params.id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//@desc Delete task
//@route DELETE /api/tasks/:id
//@access public
const deleteTask = async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };