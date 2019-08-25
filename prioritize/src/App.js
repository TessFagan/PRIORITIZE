import React from 'react';
import Example from './example';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class Lifepriorities extends React.Component {

  state = {
    Lifepriorities: [
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
      {
        id: 8,
        text: 'Tess is da bomb',
      },
    ]
  }

  render() {

    return (

      <Col md={6}>md=6
            <Jumbotron>
          <h3>Life Priorities:</h3>
          <Example items={this.state.Lifepriorities} />
        </Jumbotron>
      </Col>

    )
  }

}

class Todolist extends React.Component {
  state = {
    Todolist: [
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
      {
        id: 8,
        text: 'Tess is da bomb',
      },
    ]

  }

  render() {
    return (

      <Col md={6}>md=6
            <Jumbotron>
          <h3>To Do:</h3>
          <Example items={this.state.Todolist} />
        </Jumbotron>
      </Col>
    )
  }

}

class Macrocontainer extends React.Component {

  state = {
    Currentlifepriorities: [],
    Currenttodolist: []
  }

  // define handler functions here
  // the state will be where people create their lifep + todo, and will pass it down from here
  // https://reactjs.org/docs/lifting-state-up.html READ THIS TESS!!

  render() {
    return (
      <Container>
        <Row>
          <Lifepriorities />
          <Todolist />
        </Row>
      </Container>

    )
  }
}


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
        <Macrocontainer />
      </DndProvider>
    </div >
  )
}

export default App;
