import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import Messaging from './Components/Messaging/Messaging'
//import NavBar from './Components/NavBar/NavBar'
import NavBarConnected from './Components/NavBar/NavBarConnected'
import Footer from './Components/Footer/Footer'

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>   
            <div>
              {/* <NavBar/> */}
              <NavBarConnected/>
                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile} />
                <Route path="/Messaging" component={Messaging} />
              <Footer/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
