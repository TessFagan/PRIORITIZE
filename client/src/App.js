import React, { Component } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Macrocontainer from "./components/macrocontainer";
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    // this.getUser = this.getUser.bind(this)
    // this.componentDidMount = this.componentDidMount.bind(this)
    // this.updateUser = this.updateUser.bind(this)
  }

  // componentDidMount() {
  //   this.getUser()
  // }

  // updateUser(userObject) {
  //   this.setState(userObject)
  // }

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }

  render() {

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
}

export default App;
