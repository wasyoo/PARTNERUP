import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import Messaging from './Components/Messaging/Messaging'
//import NavBar from './Components/NavBar/NavBar'
import NavBarConnected from './Components/NavBar/NavBarConnected'
import Footer from './Components/Footer/Footer'
import SignUp from './Components/addUser'
import SignIn from './Components/Signin'
import AddCompany from './Components/addCompany'
import DetailsNeeds from './Components/Home/DetailsNeeds'
import DetailsPartnerShip from './Components/Home/DetailsPartnerShip'

import './App.css';

class App extends Component {
  render() {
    console.log(localStorage.getItem('UserToken'))
    console.log(localStorage.getItem('myId'))
    return (
        <div className="App">
            <Router>   
              <div>
                {/* <NavBar/> */}
                <NavBarConnected/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/profile/:id" component={Profile} />
                  <Route path="/Messaging" component={Messaging} />
                  <Route path="/need/:id" component={DetailsNeeds} />
                  <Route path="/partnership/:id" component={DetailsPartnerShip} />
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/signin" component={SignIn}/>
                  <Route path="/addcompany" component={AddCompany}/>
                <Footer/>
              </div>
            </Router>
        </div>
    );
  }
}

export default App;
