import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
