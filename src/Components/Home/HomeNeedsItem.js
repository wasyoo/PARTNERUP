import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Axios from 'axios'

const formatter = buildFormatter(frenchStrings)

class HomeNeedItem extends Component{
    constructor(props){
        super(props)
        this.state={
            need : this.props.need,
            company : {},
        }
    }
    

    componentWillMount(){
        Axios.get(`http://localhost:4000/needs/${this.state.need.userId}/company`)
        .then(res=>{
            this.setState({
                company: res.data
            })
        })
        .catch(err=>console.log(err))
    }
    render(){

        return (
            <div className="col-md-6">
                <div className="home-need-item">
                    <div className="home-need-item-header">
                        <img src={`http://localhost:4000/${this.state.company.filename || "default-company.png"}`} alt={this.state.company.name}/>
                        <div className="home-need-item-header-info">
                            <h2 class="home-need-item-title">{this.state.company.name}</h2>
                            <strong>{this.state.need.title}</strong>
                            <p>{this.state.need.content.slice(0,80)+" ..."}</p>
                            
                            <small><TimeAgo date={this.state.need.date} formatter={formatter}  /></small>
                        </div>
                    </div>
                    <div className="home-need-item-content">
                        <div className="home-need-item-tags">
                                <ul>
                                    {this.state.need.tags.map(el => <li>{el}</li>)}
                                </ul>
                            </div>
                        <div className="home-need-item-footer">
                            <Link to={`need/${this.state.need._id}`}> <button className="btn postuler">Postuler</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeNeedItem;