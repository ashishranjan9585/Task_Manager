// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/new-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
