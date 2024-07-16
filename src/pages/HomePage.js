import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #282c34;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;

function HomePage() {
  return (
    <Container>
      <Title>Bienvenido a los Cursos en Línea</Title>
      <Paragraph>Ofrecemos cursos en inglés, francés y portugués.</Paragraph>
    </Container>
  );
}

export default HomePage;
