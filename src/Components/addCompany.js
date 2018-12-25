import React, { Component } from 'react'

export class AddCompany extends Component {
  render() {
    return (
    <form onSubmit={e => {
            e.preventDefault()
        }}>
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

export default AddCompany