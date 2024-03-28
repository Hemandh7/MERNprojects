import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="task-list">
      <h2 className="task-list-title">Tasks</h2>
      <div className="task-grid">
        {tasks.map(task => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
      
    </div>
  );
};

export default TaskList;
