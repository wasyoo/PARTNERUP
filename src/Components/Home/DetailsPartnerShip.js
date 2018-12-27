import React, { Component } from 'react'
import Rating from '../Profile/Rating'
import Axios from 'axios'

export class DetailsPartnerShip extends Component {
    constructor(props){
        super(props)
        this.state={
            partnership : {},
            company : {},
        }
    }
    componentWillMount(){
        Axios.get(`http://localhost:4000/partenrship/${this.props.match.params.id}`)
        .then(res=>{console.log(res.data)
            this.setState({
                partnership : res.data.partnership,
                company : res.data.company
            })
        })
        .catch(err=>console.error(err))
    }
    acceptPartnerShip=()=>{
        Axios.put(`http://localhost:4000/partenrship/${this.props.match.params.id}`, {state:true} )
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>console.error(err))
    }
    
    refusePartnerShip=()=>{
        Axios.put(`http://localhost:4000/partenrship/${this.props.match.params.id}`, {state:false} )
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>console.error(err))
    }
    render() {
        return (
            <div className="details-partnership">
            <div className="row">
                <div className="col-md-4">
                    <div className="details-partnership-startup">
                        <div className="details-partnership-startup-top-info">
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
                            <h2>A propo {this.state.company.name}</h2>
                        </div>
                        <p>
                        {this.state.company.description}
                        </p>
                    </div>
                </div>

                <div className="col-md-12">
                    <p>{this.state.partnership.message}</p>
                    <span>{this.state.partnership.date}</span>
                </div>
                <div className="col-md-12">
                    <button className="btn btn-success" onClick={this.acceptPartnerShip} >Accepter</button>
                    <button className="btn btn-danger" onClick={this.refusePartnerShip} >Refuser</button>
                </div>
            </div>
        </div>
        )
    }
}

export default DetailsPartnerShip
