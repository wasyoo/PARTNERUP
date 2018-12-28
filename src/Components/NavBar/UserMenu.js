import React,{Component} from 'react'
import Axios from 'axios'
import { withRouter, Link } from 'react-router-dom';
import {getJwt} from '../../helpers'

class UserMenu extends Component {
    constructor(){
        super()
        this.state = {
            user: "chargement ...",
            company : {}
        }
    }
    componentWillMount(){
        Axios.get('http://localhost:4000/user/me', { headers: { Authorization: getJwt() } })
        .then(res =>{
            console.log(res.data)
            this.setState({
                user: res.data.user,
                company : res.data.company
            })
        })
        .catch()
    }

    logout=()=>{
        localStorage.removeItem("UserToken");
        localStorage.removeItem("myId");
        this.props.history.push('/')
    }

    render(){
        console.log(this.state.user.name)
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle user" id="dropdown-user-menu" data-toggle="dropdown" href="/#">
                    <img className="img-thumbnail rounded-circle" src="https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png" alt=""/>
                    <h6>{this.state.user.name}</h6>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-user-menu">
                    <Link className="dropdown-item" to={`/profile/${this.state.company._id}`}>Voir profil</Link>
                    <a className="dropdown-item" href="/#">Modifier</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#" onClick={this.logout}>Déconnexion</a>
                </div>
            </li>
        )
    }
}

export default withRouter(UserMenu)
