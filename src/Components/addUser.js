import React, { Component } from 'react'
import Axios from 'axios'


export class AddUser extends Component {

    AddNewUser = (e)=>{

        e.preventDefault()
    
        const NewUser = {
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value,
        }
    
        Axios.post("http://localhost:4000/user/new", NewUser)
        .then((res)=>{
            localStorage.setItem('UserToken', res.data.token);
            this.props.history.push('/addcompany')
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }

  render() {
    return (
        <div className="sign-form">
            <h1>Inscription</h1>
            <form onSubmit={this.AddNewUser}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
            </form>
        </div>
    )
  }
}

export default AddUser
