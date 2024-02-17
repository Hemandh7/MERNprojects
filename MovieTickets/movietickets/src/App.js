// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import SeatingPlan from './Components/SeatingPlan';
import BookingForm from './Components/BookingForm';
import Success from './Components/Success';

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seating/:movieId" element={<SeatingPlan />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    
  );
};

export default App;
