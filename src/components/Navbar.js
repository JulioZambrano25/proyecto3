import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #282c34;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/courses">Cursos</NavLink>
      <NavLink to="/signup">Registrarse</NavLink>
      <NavLink to="/login">Iniciar Sesión</NavLink>
    </Nav>
  );
}

export default Navbar;
