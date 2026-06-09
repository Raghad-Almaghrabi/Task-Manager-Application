import React, { useState, useEffect } from "react";

function TaskForm({ selectedTask, onCreate, onUpdate, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setStatus(selectedTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("pending");
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, status };
    if (selectedTask) {
      onUpdate(selectedTask.id, task);
    } else {
      onCreate(task);
    }
  };

  return (
    <div className="form-container">
      <h2>{selectedTask ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {selectedTask ? "Update Task" : "Add Task"}
        </button>
        {selectedTask && (
          <button type="button" className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default TaskForm;