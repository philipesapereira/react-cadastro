import React from 'react';
import Router from './Router';
import Herader from './header/Header'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Herader />

      <Container>
        <Router />
      </Container>

    </>
  );
}

export default App;
