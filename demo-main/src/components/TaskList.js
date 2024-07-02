// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const TaskList = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/tasks")
// //       .then((response) => response.json())
// //       .then((data) => setTasks(data))
// //       .catch((error) => console.error("Error fetching tasks:", error));
// //   }, []);

// //   const handleDelete = (taskId) => {
// //     fetch(`http://localhost:5000/api/tasks/${taskId}`, {
// //       method: "DELETE",
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Failed to delete task");
// //         }
// //         // Filter out the deleted task from the tasks state
// //         setTasks(tasks.filter((task) => task._id !== taskId));
// //       })
// //       .catch((error) => console.error("Error deleting task:", error));
// //   };

// //   const handleEdit = (taskId) => {
// //     navigate(`/edit-task/${taskId}`);
// //   };

// //   return (
// //     <div className="p-4">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-2xl font-bold">Tasks</h1>
// //         <Link to="/new-task">
// //           <button className="bg-blue-500 text-white px-4 py-2">Add Task</button>
// //         </Link>
// //       </div>
// //       <ul>
// //         {tasks.map((task) => (
// //           <li key={task._id} className="border p-2 my-2">
// //             <h2 className="text-xl">{task.title}</h2>
// //             <p>{task.description}</p>
// //             <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
// //             <button
// //               className="bg-green-500 text-white px-4 py-2 mr-2"
// //               onClick={() => handleEdit(task._id)}
// //             >
// //               Edit
// //             </button>
// //             <button
// //               className="bg-red-500 text-white px-4 py-2"
// //               onClick={() => handleDelete(task._id)}
// //             >
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TaskList;


// // src/components/TaskList.js
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:5000/api/tasks")
//       .then((response) => response.json())
//       .then((data) => setTasks(data))
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   const handleDelete = (taskId) => {
//     fetch(`http://localhost:5000/api/tasks/${taskId}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete task");
//         }
//         // Filter out the deleted task from the tasks state
//         setTasks(tasks.filter((task) => task._id !== taskId));
//       })
//       .catch((error) => console.error("Error deleting task:", error));
//   };

//   const handleEdit = (taskId) => {
//     navigate(`/edit-task/${taskId}`);
//   };

//   const truncateDescription = (description) => {
//     const maxLength = 100;
//     if (description.length > maxLength) {
//       return `${description.substring(0, maxLength)}...`;
//     }
//     return description;
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Tasks</h1>
//         <Link to="/new-task">
//           <button className="bg-blue-500 text-white px-4 py-2">Add Task</button>
//         </Link>
//       </div>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id} className="border p-2 my-2">
//             <h2 className="text-xl">{task.title}</h2>
//             <p>{truncateDescription(task.description)}</p>
//             <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
//             <button
//               className="bg-green-500 text-white px-4 py-2 mr-2"
//               onClick={() => handleEdit(task._id)}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 text-white px-4 py-2 mr-2"
//               onClick={() => handleDelete(task._id)}
//             >
//               Delete
//             </button>
//             <Link to={`/task/${task._id}`}>
//               <button className="bg-blue-500 text-white px-4 py-2">Details</button>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;


// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleDelete = (taskId) => {
    fetch(`http://localhost:3001/api/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete task");
        }
        // Filter out the deleted task from the tasks state
        setTasks(tasks.filter((task) => task._id !== taskId));
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  const handleEdit = (taskId) => {
    navigate(`/edit-task/${taskId}`);
  };

  const truncateDescription = (description) => {
    const maxLength = 100;
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  return (
    <div className="mx-4 px-8 py-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks ...</h1>
        <Link to="/new-task">
          <button className="bg-blue-500 text-white px-4 py-2">Add Task</button>
        </Link>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="mx-20 my-4 border p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl">{task.title}</h2>
              <p className="inline">{truncateDescription(task.description)}</p>
              <Link to={`/task/${task._id}`} className="ml-2 text-blue-500 underline">
                Details
              </Link>
              <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            <div>
              <button
                className="bg-green-500 text-white px-4 py-2 mr-2"
                onClick={() => handleEdit(task._id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
