import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, index, toggleComplete, editTask, deleteTask }) => (
  <div
    key={index}
    onClick={() => toggleComplete(index)} // Toggle completion when clicked
    className="flex justify-between items-center bg-gray-800 p-4 rounded-md shadow-md mb-2 cursor-pointer"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed} // Check if the task is completed
        onChange={() => toggleComplete(index)} // Toggle completion status
        className="mr-2"
      />
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {task.task} {/* Display task text */}
        </h3>
        <p className="text-gray-400">{task.date}</p> {/* Display task date */}
      </div>
    </div>
    <div className="flex space-x-2">
      {/* Edit button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          editTask(index); // Trigger edit action
        }}
        className="bg-blue-600 text-white p-2 rounded-md"
      >
        <FaEdit /> {/* Edit icon */}
      </button>
      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent event from bubbling up
          deleteTask(index); // Trigger delete action
        }}
        className="bg-red-600 text-white p-2 rounded-md"
      >
        <FaTrash /> {/* Trash icon */}
      </button>
    </div>
  </div>
);

export default TaskItem;
