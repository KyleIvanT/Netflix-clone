import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen"


import './App.css';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<HomeScreen />} />
        </Routes>
      
        
      </BrowserRouter>

    </div>
  );
}

export default App;
