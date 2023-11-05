// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MealPlan from './MealPlan/MealPlan.jsx';
import Navbar from './Navbar.jsx';
import Confirmation from './Confirmation/Confirmation.jsx';
import ReviewPage from './ReviewPage/ReviewPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Confirmation />} />
        <Route path="/menu" element={<MealPlan />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
