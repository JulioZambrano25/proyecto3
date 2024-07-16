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

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    age: '',
    idNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'El nombre es obligatorio';
    }

    if (!formData.email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = 'La fecha de nacimiento es obligatoria';
    }

    if (!formData.age) {
      errors.age = 'La edad es obligatoria';
    } else if (isNaN(formData.age) || formData.age <= 0) {
      errors.age = 'La edad no es válida';
    }

    if (!formData.idNumber) {
      errors.idNumber = 'La cédula es obligatoria';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Guardar el usuario en el almacenamiento local
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = {
        ...formData,
        acceptedCourses: []  // Inicialmente no se aceptan cursos
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setSuccessMessage('Registro exitoso');
    }
  };

  return (
    <Container>
      <Title>Registrarse</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        <Input
          type="date"
          name="dateOfBirth"
          placeholder="Fecha de Nacimiento"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        {errors.dateOfBirth && <ErrorMessage>{errors.dateOfBirth}</ErrorMessage>}
        <Input
          type="number"
          name="age"
          placeholder="Edad"
          value={formData.age}
          onChange={handleChange}
          required
        />
        {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
        <Input
          type="text"
          name="idNumber"
          placeholder="Cédula"
          value={formData.idNumber}
          onChange={handleChange}
          required
        />
        {errors.idNumber && <ErrorMessage>{errors.idNumber}</ErrorMessage>}
        <Button type="submit">Registrarse</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Form>
    </Container>
  );
}

export default SignupPage;
