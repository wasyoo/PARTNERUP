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
    
        Axios.post("http://localhost:4000/new_user", NewUser)
        .then((res)=>{
            console.log(res.data._id)
            this.props.history.push(`/${res.data._id}`);
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }

  render() {
    return (
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
    )
  }
}

export default AddUser
