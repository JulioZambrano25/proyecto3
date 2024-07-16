import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar'; 
import SignupPage from './pages/SignupPage'; 
import LoginPage from './pages/LoginPage'; 
import CoursesPage from './pages/CoursesPage';
import HomePage from './pages/HomePage';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #282c34;
`;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Title>Bienvenido a tu aplicación de cursos en línea</Title>
          <Routes>
            <Route path="/src/pages/HomePage.js" element={<HomePage />} />
            <Route path="/src/pages/CoursesPage.js" element={<CoursesPage />} />
            <Route path="/src/pages/SignupPage.js" element={<SignupPage />} />
            <Route path="/src/pages/LoginPage.js" element={<LoginPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
