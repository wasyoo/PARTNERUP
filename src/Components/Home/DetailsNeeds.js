import React, { Component } from 'react'
import Rating from '../Profile/Rating'
import Axios from 'axios'
import {getJwt} from '../../helpers'

export class DetailsNeeds extends Component {
    constructor(props){
        super(props)
        this.state={
            need : {},
            company : {},
            error : []
        }
    }
    componentWillMount(){
        Axios.get(`http://localhost:4000/needs/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({
                need : res.data.need,
                company: res.data.company
            })
        })
        .catch(err=>console.log(err))
    }
    apply = (e)=>{
        e.preventDefault()
        
        if(e.target.message.value){
            const partnership ={
                message     : e.target.message.value,
                needId      : this.state.need._id, 
                recipient   : this.state.need.userId
            }
            Axios.post(`http://localhost:4000/partenrship/add`, partnership, { headers: { Authorization: getJwt() } })
            .then(res=>{
                
            })
            .catch(err=>console.error(err))
        } else{
            this.setState({
                error : [
                    ...this.state.error,
                    "Veuillez fournir votre message",
                ]
            })
        }
    }
  render() {
    return (
      <div className="details-needs">
        <div className="row">
            <div className="col-md-4">
                <div className="details-needs-startup">
                    <div className="details-needs-startup-top-info">
                        <img src={`http://localhost:4000/${this.state.company.filename || "default-company.png"}`} alt={this.state.company.name}/>
                        <div className="details-needs-startup-name-rating">
                            <h1>{this.state.company.name}</h1>
                            <Rating rating={this.state.company.rating}/>
                        </div>
                    </div>
                    <p>
                    {this.state.company.description}
                    </p>
                </div>
            </div>
            
            <div className="col-md-8">
                <div className="details-needs-box">
                    <div className="details-needs-title-date">
                        <h2>{this.state.need.title}</h2>
                        <span>{this.state.need.date}</span>
                    </div>
                    <p>
                    {this.state.need.content}
                    </p>
                </div>
            </div>

            <div className="col-md-12">
                <form action="" onSubmit={this.apply}>
                    {this.state.error.length > 0 && (
                    <ul className="error-form">
                        {this.state.error.map((el,i) => <li key={i}>{el}</li>)}
                    </ul>
                    )}
                    <div className="form-group">
                        <textarea id="message" className="form-control" name="" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </div>

        </div>
      </div>
    )
  }
}

export default DetailsNeeds
