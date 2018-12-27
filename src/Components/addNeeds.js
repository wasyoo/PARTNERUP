import React, { Component } from 'react'
import Axios from 'axios'

export class addNeeds extends Component {
  AddNewUser = (e)=>{

    e.preventDefault()

    const NewNeeds = {
        name : e.target.name.value,
        email : e.target.email.value,
        password : e.target.password.value,
    }

    Axios.post("http://localhost:4000/needs/add", NewNeeds)
    .then((res)=>{
        return res.status(200).json({'success':'your need has been added'})
    })
    .catch((err)=>{
        console.log(err)
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.AddnewNeeds}>
                <div className="form-group">
                    <label htmlFor="name">Titre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Description</label>
                    <textarea name="" id="description" cols="30" rows="10">
                    </textarea>
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

export default addNeeds
