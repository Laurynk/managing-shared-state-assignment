import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function Playlist() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const updatedTasks = [...tasks, task];

    setTasks(updatedTasks);
  }

  function removeTask(track) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== track.id;
    });

    setSongs(updatedSongs);
  }

  function toggleCompleted(track) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === track.id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            remove={removeTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
}
