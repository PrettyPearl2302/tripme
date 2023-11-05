import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Confirmation from './Confirmation/Confirmation';
import PopUp from './PopUp/PopUp.jsx';

function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="content-container">
        <Confirmation />
      </div>
      <PopUp />
    </>
  );
}

export default App;