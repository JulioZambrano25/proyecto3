import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #282c34;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #61dafb;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
`;

function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setSuccessMessage('Inicio de sesión exitoso');
      onLogin(user);
    } else {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <Container>
      <Title>Iniciar Sesión</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Iniciar Sesión</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Form>
    </Container>
  );
}

export default LoginPage;
