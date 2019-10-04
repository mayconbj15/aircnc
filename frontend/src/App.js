import React from 'react';
import './App.css';


import logo from './assets/logo.svg';

import Routes from './services/routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="aircnc"/>
    
      <div className="content">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
