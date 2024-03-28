import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import '../styles/Tasks.css';

const Home = () => {
  return (
    <div className="tasks">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
