import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import Messaging from './Components/Messaging/Messaging'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import SignUp from './Components/addUser'
import SignIn from './Components/Signin'
import AddCompany from './Components/addCompany'
import DetailsNeeds from './Components/Home/DetailsNeeds'
import DetailsPartnerShip from './Components/Home/DetailsPartnerShip'
import Index from './Components/index/index'
import Contact from './Components/ContactUs/Contact'

import './App.css';

class App extends Component {

  render() {
    console.log(localStorage.getItem('UserToken'))
    console.log(localStorage.getItem('myId'))
    return (
        <div className="App">
            <Router>   
              <div>
                {/* { !localStorage.getItem('UserToken') && <Redirect to="/" />} */}

                {/* {
                  localStorage.getItem('UserToken') && 
                  <Route path="/signin">
                    <Redirect to="/home" />
                  </Route>
                } */}
                <NavBar/>
                <Route exact path="/" component={Index}/>
                <Route path="/home" component={Home}/>
                <Route path="/profile/:id" component={Profile} />
                <Route path="/messaging" component={Messaging} />
                <Route path="/need/:id" component={DetailsNeeds} />
                <Route path="/partnership/:id" component={DetailsPartnerShip} />
                <Route path="/signup" component={SignUp}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/addcompany" component={AddCompany}/>
                <Route path="/contact" component={Contact} />
                <Footer/>
              </div>
            </Router>
        </div>
    );
  }
}

export default App;
