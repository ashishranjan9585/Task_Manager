import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch existing task details for editing
      fetch(`http://localhost:3001/api/tasks/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setTask({
            title: data.title,
            description: data.description,
            dueDate: data.dueDate,
          });
          setIsEditing(true);
        })
        .catch((error) => console.error("Error fetching task:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:3001/api/tasks/${id}`
      : "http://localhost:3001/api/tasks";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task saved:", data);
        navigate("/");
      })
      .catch((error) => console.error("Error saving task:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold">
        {isEditing ? "Edit Task" : "New Task"}
      </h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        className="border p-2 my-2"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        className="border p-2 my-2"
      />
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="border p-2 my-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
