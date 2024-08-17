import React from "react";

const FilterButtons = ({ filter, setFilter }) => (
  <div className="flex justify-center mb-4">
    {/* Filter by All */}
    <button
      onClick={() => setFilter("All")}
      className={`pr-5 pl-5 rounded-md mr-2 ${
        filter === "All"
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-gray-300"
      }`}
    >
      All
    </button>
    {/* Filter by Pending */}
    <button
      onClick={() => setFilter("Pending")}
      className={`p-2 rounded-md mr-2 ${
        filter === "Pending"
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-gray-300"
      }`}
    >
      Pending
    </button>
    {/* Filter by Completed */}
    <button
      onClick={() => setFilter("Completed")}
      className={`p-2 rounded-md ${
        filter === "Completed"
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-gray-300"
      }`}
    >
      Completed
    </button>
  </div>
);

export default FilterButtons;
