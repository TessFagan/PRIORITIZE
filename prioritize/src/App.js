import React from 'react';
import Example from './example';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Navbar>
          <h1>PRIORITIZE</h1>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link">List Placeholder</a>
              </li>
            </ul>
          </div>
        </Navbar>
        <Container>
          <Row>
            <Col md={6}>md=6
            <Jumbotron>
                <h3>Life Priorities:</h3>
                <Example />
              </Jumbotron>
            </Col>
            <Col md={6}>md=6
            <Jumbotron>
                <h3>Life Priorities:</h3>
                <Example />
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </DndProvider>
    </div >
  )
}

export default App;
