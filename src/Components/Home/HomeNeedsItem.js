import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

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
                            <h5 class="home-need-item-title">{this.state.need.title}</h5>
                            <div className="home-need-item-tags">
                                <ul>
                                    {this.state.need.tags.map(el => <li>{el}</li>)}
                                </ul>
                            </div>
                            <div className="">{this.state.need.date}</div>
                        </div>
                    </div>
                    <div className="home-need-item-content">
                        <div className="home-need-item-body">
                            <p>{this.state.need.content}</p>
                        </div>
                        <div className="home-need-item-footer">
                            <Link to={`need/${this.state.need._id}`}> Voir détails ></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeNeedItem;