import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, index, toggleComplete, editTask, deleteTask }) => (
  <div
    key={index}
    onClick={() => toggleComplete(index)}
    className="flex justify-between items-center bg-gray-800 p-4 rounded-md shadow-md mb-2 cursor-pointer"
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(index)}
        className="mr-2"
      />
      <div>
        <h3
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {task.task}
        </h3>
        <p className="text-gray-400">{task.date}</p>
      </div>
    </div>
    <div className="flex space-x-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          editTask(index);
        }}
        className="bg-blue-600 text-white p-2 rounded-md"
      >
        <FaEdit />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(index);
        }}
        className="bg-red-600 text-white p-2 rounded-md"
      >
        <FaTrash />
      </button>
    </div>
  </div>
);

export default TaskItem;
