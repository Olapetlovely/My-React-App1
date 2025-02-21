import React, { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const ToDoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask.trim() !== "")
      setTasks(t => [...t, newTask]);
    setNewTask("")
  };

  function deleteTask(index) {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }

  function moveTaskUp(index) {
    const updatedTask = [...tasks];
    if (index > 0) {
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
    }
    setTasks(updatedTask)
  }

  function moveTaskDown(index) {
    const updatedTask = [...tasks];
    if (index < tasks.length - 1) {
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index + 1]]
    };
    setTasks(updatedTask)
  }


  return (
    <div className='to-do-list'>
      <h1>To Do List</h1>
      <div className='input-wrapper'>
        <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}><span className='text'>{task}</span>
            <button className='move-btn' onClick={() => moveTaskUp(index)}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>

            <button className='move-btn' onClick={() => moveTaskDown(index)}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>

            <button className='delete-btn' onClick={() => deleteTask(index)}>
              {/* <i className="fa-solid fa-trash"></i> */}
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        )}
      </ol>

    </div>
  )
}

export default ToDoList