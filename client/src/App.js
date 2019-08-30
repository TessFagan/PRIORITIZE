import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Macrocontainer from "./components/macrocontainer"
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
                <a className="nav-link" href="/">List Placeholder</a>
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
