// // import React, { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";

// // const TaskDetails = () => {
// //   const { id } = useParams();
// //   const [task, setTask] = useState(null);

// //   useEffect(() => {
// //     fetch(`http://localhost:5000/api/tasks/${id}`)
// //       .then((response) => response.json())
// //       .then((data) => setTask(data))
// //       .catch((error) => console.error("Error fetching task:", error));
// //   }, [id]);

// //   const handleDelete = () => {
// //     fetch(`http://localhost:5000/api/tasks/${id}`, {
// //       method: "DELETE",
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Failed to delete task");
// //         }
// //         // Redirect to task list after deletion (you can use useHistory for this)
// //       })
// //       .catch((error) => console.error("Error deleting task:", error));
// //   };

// //   if (!task) return <p>Loading...</p>;

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold">{task.title}</h1>
// //       <p>{task.description}</p>
// //       <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
// //       <button onClick={handleDelete}>Delete</button>
// //       <Link to={`/edit-task/${id}`} className="ml-2 bg-blue-500 text-white p-2">
// //         Edit
// //       </Link>
// //     </div>
// //   );
// // };

// // export default TaskDetails;


// // src/components/TaskDetails.js
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const TaskDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [task, setTask] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/tasks/${id}`)
//       .then((response) => response.json())
//       .then((data) => setTask(data))
//       .catch((error) => console.error("Error fetching task:", error));
//   }, [id]);

//   if (!task) return <p>Loading...</p>;

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="p-4">
//         <h1 className="text-2xl font-bold">{task.title}</h1>
//         <p>{task.description}</p>
//         <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
//         <button
//           className="bg-gray-500 text-white px-4 py-2 mt-4"
//           onClick={() => navigate("/")}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskDetails;


// src/components/TaskDetails.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error fetching task:", error));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button
        className="bg-gray-500 text-white px-4 py-2 mt-4"
        onClick={() => navigate("/")}
      >
        Close
      </button>
    </div>
  );
};

export default TaskDetails;
