import React, { Component } from 'react'
import Rating from '../Profile/Rating'
import Axios from 'axios'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {getJwt} from '../../helpers'

const formatter = buildFormatter(frenchStrings)

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
            <div className="col-md-4 col-xs-12 widget widget_tally_box">
                <div className="details-needs-startup">
                    <div className="details-needs-startup-top-info">
                        <img className="img-circle profile_img" src={`http://localhost:4000/${this.state.company.filename || "default-company.png"}`} alt={this.state.company.name}/>
                        <div className="details-needs-startup-name-rating">
                            <h1>{this.state.company.name}</h1>
                            <Rating rating={this.state.company.rating}/>
                        </div>
                    </div>
                    <ul className="list-inline widget_tally" style={{"fontSize": "14px", "padding": "20px"}}>
                            <li>
                                <i className="fa fa-map-marker user-profile-icon"></i> {this.state.company.address}
                            </li>
                            <li>
                                <i className="fa fa-phone user-profile-icon"></i> {this.state.company.phone}
                            </li>
                            <li>
                            <i class="fas fa-info"></i> {this.state.company.website}
                            </li>
                            <li>
                            <i class="fas fa-envelope-open"></i> {this.state.company.email}
                            </li>                            
                    </ul>
                </div>
            </div>

            <div className="col-md-8 details-needs-box">
                    <div className="details-needs-title-date">
                        <h2>A propo {this.state.company.name}</h2>
                        {/* <span><TimeAgo date={this.state.need.date} formatter={formatter}/></span> */}
                    </div>
                    <p>
                        {this.state.company.description}
                    </p>
                    {this.state.company.tags && 
                         <div className="home-need-item-tags">
                            <ul>
                                {this.state.company.tags.map(el => <li>{el}</li>)}
                            </ul>
                        </div>
                    }
            </div>

            <div className="col-md-12 box-need-info">
                <h1>{this.state.need.title}</h1>
                <p>
                    {this.state.need.content}
                </p>
                {this.state.company.tags && 
                    <div className="home-need-item-tags">
                        <ul>
                            {this.state.company.tags.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                }  
            </div>

            <div className="col-md-12">
            { this.state.need.userId === localStorage.getItem("myId") ? 
            (
                <button type="submit" className="btn btn-primary">Modifier</button>
            )
            : 
            (
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
            )}      
            </div>
        </div>
      </div>
    )
  }
}

export default DetailsNeeds
