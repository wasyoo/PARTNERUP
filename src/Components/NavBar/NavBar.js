import React,{Component} from 'react'
// import Modal from "../Profile/Modal"
import {  Modal } from 'reactstrap';
import {Link} from 'react-router-dom'
import UserMenu from './UserMenu'
import AddNeeds from '../Profile/addNeeds'
import NotificationMenu from './NotificationMenu'
import MsgMenu from './MsgMenu'
import './navbar.css'
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/#">
                    <strong>PARTNER<br/>  UP</strong>
                </a>               
                <img width="50px" className="logo" src="https://i.ibb.co/QJwr2VT/logo.png" alt="PartnerUp"/>               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                { localStorage.getItem('UserToken') ? (
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">   
                            <li className="nav-item">
                                <button className="btn add-need-btn"href="/#"  onClick={this.toggle}>Ajouter un besoin</button>
                            </li>       
                            {/* <Modal title="Ajouter un besoin" id="AddNeedForm" content={AddNeeds} /> */}
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <AddNeeds close={()=>{
                                    this.setState({
                                        modal : false
                                    })
                                }}/>
                            </Modal>
                            <NotificationMenu/>
                            <MsgMenu/>
                            <UserMenu/>
                    </ul>
                </div>
                ) : (
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to="/contact">Contact</Link>
                        </li>     
                    </ul>
                    <div className="navbar-nav ml-auto">   
                        <Link className="btn login-buttons"  to="/signin" >Se connecter</Link>
                        <Link  className="btn login-buttons" to="/signup" >S'inscrire</Link>
                    </div>     
                </div>
                ) }
            </nav>
        )
    }
}

export default NavBar;
