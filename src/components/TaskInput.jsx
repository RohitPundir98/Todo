import { FaPlus } from "react-icons/fa";

const TaskInput = ({ task, setTask, addTask, inputRef, handleKeyPress }) => (
  <div className="flex justify-center mb-4">
    {/* Input field for task */}
    <input
      type="text"
      ref={inputRef}
      onChange={(e) => setTask(e.target.value)}
      value={task}
      placeholder="Enter your task"
      className="border outline-none p-2 rounded-md w-full max-w-xlg mr-2 bg-gray-800 text-white border-gray-600"
      onKeyPress={handleKeyPress}
    />
    {/* Button to add task */}
    <button
      onClick={addTask}
      className="bg-green-600 text-white pl-4 pr-4 rounded-md"
    >
      <FaPlus /> {/* Plus icon */}
    </button>
  </div>
);

export default TaskInput;
