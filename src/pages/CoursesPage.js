import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #282c34;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CourseItem = styled.li`
  font-size: 1.2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 150px;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #61dafb;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #21a1f1;
  }
`;

const CourseImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
`;

function CoursesPage() {
  const [acceptedCourses, setAcceptedCourses] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
      setAcceptedCourses(user.acceptedCourses || []);
    }
  }, []);

  const handleAcceptCourse = (course) => {
    if (!acceptedCourses.includes(course.name)) {
      const updatedAcceptedCourses = [...acceptedCourses, course.name];
      setAcceptedCourses(updatedAcceptedCourses);

      // Actualizar el usuario actual en localStorage
      const updatedUser = { ...currentUser, acceptedCourses: updatedAcceptedCourses };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      // Actualizar el usuario en la lista de usuarios en localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userIndex = users.findIndex((user) => user.email === currentUser.email);
      users[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));

      setSuccessMessage(`Has aceptado el curso de ${course.name}`);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const courses = [
    { name: 'Inglés', image: '/images/english.jpg' },
    { name: 'Francés', image: '/images/french.jpg' },
    { name: 'Portugués', image: '/images/portuguese.jpg' },
  ];

  return (
    <Container>
      <Title>Lista de Cursos</Title>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <CourseList>
        {courses.map((course) => (
          <CourseItem key={course.name}>
            <CourseImage src={course.image} alt={course.name} />
            {course.name}
            <Button onClick={() => handleAcceptCourse(course)}>
              Aceptar
            </Button>
          </CourseItem>
        ))}
      </CourseList>
      <div>
        <h2>Cursos Aceptados:</h2>
        <CourseList>
          {acceptedCourses.map((course) => (
            <CourseItem key={course}>{course}</CourseItem>
          ))}
        </CourseList>
      </div>
    </Container>
  );
}

export default CoursesPage;
