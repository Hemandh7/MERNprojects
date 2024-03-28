import React, { useState } from 'react';
import '../styles/Tasks.css';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleDelete = () => {
    onDelete(task._id);
  };

  const handleUpdate = () => {
    onUpdate(task._id, { title: updatedTitle, description: updatedDescription });
    setIsUpdating(false);
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
