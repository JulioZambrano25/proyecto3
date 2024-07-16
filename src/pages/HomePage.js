import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
`;

function HomePage() {
  return (
    <Container>
      <Paragraph>Ofrecemos cursos en inglés, francés y portugués.</Paragraph>
      <Paragraph>"Descubre una nueva forma de aprender con nuestra plataforma de cursos en línea. 
        Ofrecemos una amplia variedad de cursos en inglés, francés y portugués diseñados para adaptarse a tu ritmo y
        horario. Desde principiantes hasta niveles avanzados, nuestros cursos están creados por expertos en el idioma y 
        cubren temas prácticos y relevantes. Con funcionalidades mejoradas como componentes estilizados y 
        validación de entradas, nuestra plataforma te garantiza una experiencia de aprendizaje intuitiva y 
        personalizada. Explora nuestro catálogo, 
        inscríbete hoy mismo y comienza tu viaje hacia el dominio de un nuevo idioma.</Paragraph>  
    </Container>
  );
}

export default HomePage;
