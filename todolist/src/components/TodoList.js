import React, { useState, useEffect, useRef } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["wake up at 7", "sleep at 21:00 hrs"]);
  const [newtask, setNewTask] = useState([]);

  function handleInput(ev) {
    setNewTask(ev.target.value);
  }

  function addTask() {
    if (newtask.trim() != "") {
      setTasks((prev) => [...prev, newtask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    console.log("hi....");
    const updatedList = tasks.filter((element, i) => index !== i);
    setTasks(updatedList);
  }

  function moveup(index) {
    console.log("hi....");
    const updatedList = [...tasks];

    [updatedList[index], updatedList[index - 1]] = [
      updatedList[index - 1],
      updatedList[index],
    ];

    setTasks(updatedList);
  }

  return (
    <>
      <div className="to-do-list">
        <h1>Todo List aa gyi oyeee</h1>
        <input
          type="text"
          className="task-name"
          value={newtask}
          onChange={handleInput}
          placeholder="Enter new task name"
        />
        <button
          className="add"
          onClick={() => {
            addTask();
          }}
        >
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li className="row" key={index}>
            <span className="row-name">{task}</span>
            <button className="delete" onClick={() => removeTask(index)}>
              Delete task
            </button>
            <button className="moveup" onClick={() => moveup(index)}>
              Move up
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ToDoList;
