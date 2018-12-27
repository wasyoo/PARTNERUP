import React, { Component } from 'react'
import Axios from 'axios'

export class Signin extends Component {

    signin = (e) => {
        e.preventDefault()

        const login = {
            email: e.target.email.value,
            password : e.target.password.value,
        }

        Axios.post("http://localhost:4000/user/sign_in", login)
        .then(res =>{
            localStorage.setItem('UserToken', res.data.token);
            localStorage.setItem('myId', res.data.userId);
            this.props.history.push('/')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
        <div>
            <form action="" onSubmit={this.signin}>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Mot de passe</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Se connecter
                </button>
            </form>
        </div>
        )
    }
}

export default Signin
