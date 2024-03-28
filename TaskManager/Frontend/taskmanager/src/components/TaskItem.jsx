import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Task.css';

const TaskItem = ({ task }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${task._id}`);
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/tasks/${task._id}`, {
        title: updatedTitle,
        description: updatedDescription
      });
      window.location.reload(); // Reload the page after update
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="task">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <button onClick={() => setIsUpdating(true)} className="task-update-button">Update</button>
      <button onClick={handleDelete} className="task-delete-button">Delete</button>
      {isUpdating && (
        <div className="task-update-form">
          <input
            type="text"
            value={updatedTitle}
            onChange={e => setUpdatedTitle(e.target.value)}
            className="task-update-input"
          />
          <textarea
            value={updatedDescription}
            onChange={e => setUpdatedDescription(e.target.value)}
            className="task-update-textarea"
          ></textarea>
          <button onClick={handleUpdate} className="task-update-submit-button">Submit</button>
          <button onClick={() => setIsUpdating(false)} className="task-update-cancel-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
