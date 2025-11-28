import React, { useState } from "react";

export default function Home() {
  const [todoTask, setTodoTask] = useState("");
  const [ongoingTask, setOngoingTask] = useState("");

  const [todoTasks, setTodoTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    if (todoTask.trim() !== "") {
      setTodoTasks([...todoTasks, todoTask]);
      setTodoTask("");
    }
  };

  const handleOngoingSubmit = (event) => {
    event.preventDefault();
    if (ongoingTask.trim() !== "") {
      setOngoingTasks([...ongoingTasks, ongoingTask]);
      setOngoingTask("");
    }
  };

  return (
    <>
      {/* TO-DO TASK FORM */}
      <form onSubmit={handleTodoSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
        />
        <button type="submit">ADD TO-DO TASK</button>
      </form>

      {/* ONGOING TASK FORM */}
      <form onSubmit={handleOngoingSubmit}>
        <input
          type="text"
          placeholder="Enter ongoing task"
          value={ongoingTask}
          onChange={(e) => setOngoingTask(e.target.value)}
        />
        <button type="submit">ADD ONGOING TASK</button>
      </form>

      <div className="task-sections">
        <div className="task-selection">
          <h2>TO-DO Tasks</h2>
          <ul>
            {todoTasks.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="task-selection">
          <h2>Ongoing Tasks</h2>
          <ul>
            {ongoingTasks.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="task-selection">
          <h2>Completed Tasks</h2>
        </div>
      </div>
    </>
  );
}
