import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { getTasks, createTask, updateTask, deleteTask } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (task) => {
    try {
      await createTask(task);
      fetchTasks();
    } catch (err) {
      setError("Failed to create task");
    }
  };

  const handleUpdate = async (id, task) => {
    try {
      await updateTask(id, task);
      setSelectedTask(null);
      fetchTasks();
    } catch (err) {
      setError("Failed to update task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      {error && <p className="error">{error}</p>}
      <TaskForm
        selectedTask={selectedTask}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onCancel={() => setSelectedTask(null)}
      />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <TaskList
          tasks={tasks}
          onEdit={setSelectedTask}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default App;