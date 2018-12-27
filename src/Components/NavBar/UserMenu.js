import React,{Component} from 'react'
import Axios from 'axios'
import {getJwt} from '../../helpers'

export default class UserMenu extends Component {
    constructor(){
        super()
        this.state = {
            user:"chargement ..."
        }
    }
    componentWillMount(){
        Axios.get('http://localhost:4000/user/me', { headers: { Authorization: getJwt() } })
        .then(res =>{
            this.setState({
                user:res.data
            })
        })
        .catch()
    }
    render(){
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle user" id="dropdown-user-menu" data-toggle="dropdown" href="/#">
                    <img className="img-thumbnail rounded-circle" src="https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png" alt=""/>
                    <h6>{this.state.user.name}</h6>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-user-menu">
                    <a className="dropdown-item" href="/#">Voir profil</a>
                    <a className="dropdown-item" href="/#">Modifier</a>
                    <a className="dropdown-item" href="/#">Ajouter un besoin</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#">Déconnexion</a>
                </div>
            </li>
        )
    }
}