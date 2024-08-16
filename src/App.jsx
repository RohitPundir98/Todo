import React, { useState, useRef, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import FilterButtons from "./components/FilterButtons";
import TaskItem from "./components/TaskItem";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("taskData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("All");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editIndex]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty.");
      return;
    }

    const newData = [...data];
    const currentDate =
      new Date().toLocaleDateString("en-GB") +
      " " +
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    if (editIndex !== null) {
      newData[editIndex] = {
        ...newData[editIndex],
        task,
        date: currentDate,
      };
      setEditIndex(null);
    } else {
      newData.push({ task, date: currentDate, completed: false });
    }

    setData(newData);
    localStorage.setItem("taskData", JSON.stringify(newData));
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem("taskData", JSON.stringify(updatedData));
  };

  const editTask = (index) => {
    const { task } = data[index];
    setTask(task);
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const newData = [...data];
    newData[index].completed = !newData[index].completed;
    setData(newData);
    localStorage.setItem("taskData", JSON.stringify(newData));
  };

  const filteredData = data.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="container mx-auto p-4" style={{ width: "70%" }}>
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Todo App
      </h1>
      <TaskInput
        task={task}
        setTask={setTask}
        addTask={addTask}
        inputRef={inputRef}
        handleKeyPress={handleKeyPress}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      {filteredData.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
