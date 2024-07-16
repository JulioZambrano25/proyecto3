import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const NavLink = styled(Link)`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/src/pages/HomePage.js">Inicio</NavLink>
      <NavLink to="/src/pages/SignupPage.js">Registrarse</NavLink>
      <NavLink to="/src/pages/LoginPage.js">Iniciar Sesión</NavLink>
      <NavLink to="/src/pages/CoursesPage.js">Cursos</NavLink>
    </Container>
  );
};

export default Navbar;
