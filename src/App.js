import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import DisplayPage from './pages/DisplayPage';
import InputPage from './pages/InputPage';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // To store user information

  return (
    <div className="app">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
        <Route path="/dashboard" element={isAuthenticated && user?.username === 'admin1@scitome' ? <Dashboard user={user} /> : <Navigate to="/auth" />} />
        <Route path="/display" element={<DisplayPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
