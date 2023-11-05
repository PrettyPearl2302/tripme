// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MealPlan from './MealPlan/MealPlan.jsx';
import Navbar from './Navbar.jsx';
import Confirmation from './Confirmation/Confirmation.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Confirmation />} />
        <Route path="/menu" element={<MealPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
