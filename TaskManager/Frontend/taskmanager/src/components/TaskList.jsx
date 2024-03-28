import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import '../styles/TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://taskmanager-9qtl.onrender.com/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`https://taskmanager-9qtl.onrender.com/tasks/${taskId}`);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async (taskId, updatedTaskData) => {
    try {
      await axios.put(`https://taskmanager-9qtl.onrender.com/tasks/${taskId}`, updatedTaskData);
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task._id === taskId ? { ...task, ...updatedTaskData } : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  return (
    <div className="task-list">
      <div className="task-form-container">
        <TaskForm onAddTask={handleAddTask} />
      </div>
      <div className="task-items-container">
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
