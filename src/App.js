import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import CoursesPage from './pages/CoursesPage';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={currentUser ? '/courses' : '/login'} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/courses" element={currentUser ? <CoursesPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
