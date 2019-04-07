import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import logo1 from './onmon-1.svg';
import logo2 from './onmon-2.svg';
import './App.css';
import {Navbar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CustomCarousel from './Components/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" className="justify-content-center navbar-custom">
          <Navbar.Brand href="/">
            <Image fluid
              alt=""
              src={logo2}
              className="d-inline-block align-top header-logo"
            />
            {''}
          </Navbar.Brand>
        </Navbar>
        <div className="carousel_custom">
          <CustomCarousel></CustomCarousel>
        </div>

        {/* <header className="App-header">
          <Image src={logo1} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <body>
         
        </body>
      </div>
    );
  }
}

export default App;
