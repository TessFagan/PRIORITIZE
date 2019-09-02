import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';

class Signup extends Component {

    render() {
        return (
            <div>
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
                <h3>"Signup page"</h3>
            </div>
        )
    }
}


export default Signup;
