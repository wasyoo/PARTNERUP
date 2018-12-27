import React, {Component} from 'react'
import NeedItem from './NeedItem'

class NeedsList extends Component{
    constructor(props){
        super(props)
        this.state={
            needs : this.props.companyNeeds,
            company : this.props.company
        }
    }

    render(){
        return( 
            <div className="needs-section">
                <h2>{this.state.company.userId===localStorage.getItem("myId") ? "Notres " : "Les "}besoins</h2>
                {this.state.needs.map(el => <NeedItem key={el._id} company={this.state.company} item={el}/>)}
            </div>
            )
        }
    
}

export default NeedsList;
