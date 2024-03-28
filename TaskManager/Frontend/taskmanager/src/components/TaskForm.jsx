import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TaskForm.css';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://taskmanager-9qtl.onrender.com/tasks', { title, description });
      window.location.reload(); 
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="task-form">
      <h2 className="task-form-title">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="task-form-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="task-form-textarea"
        ></textarea>
        <button type="submit" className="task-form-button">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
