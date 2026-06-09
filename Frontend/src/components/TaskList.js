import React from "react";

function TaskList({ tasks, onEdit, onDelete }) {
  if (!tasks || !Array.isArray(tasks) || tasks.length === 0) 
    return <p className="no-tasks">No tasks found.</p>;

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="task-info">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className={`status-badge status-${task.status}`}>
              {task.status}
            </span>
          </div>
          <div className="task-actions">
            <button className="btn btn-edit" onClick={() => onEdit(task)}>Edit</button>
            <button className="btn btn-delete" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;