import React, {Component} from 'react'
import NeedItem from './NeedItem'

const needs =[
    {
        company_name: "Company Name1",
        company_logo:"https://www.designevo.com/res/templates/thumb_small/symmetrical-red-and-blue-polygon-company.png",
        title : "Lorem ipsum dolor sit amet" ,
        description:"Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        tags :[ "marketing","intelligence artificielle"]
    },
    {
        company_name: "Company Name2",
        company_logo:"https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png",
        title : "Lorem ipsum dolor sit amet" ,
        description:"Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        tags :[ "Big Data"]
    },
    {
        company_name: "Company Name3",
        company_logo:"https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png",
        title : "Lorem ipsum dolor sit amet" ,
        description:"Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        tags :[ "Cyber Sécurité", "Hardware"]
    }
]

class NeedsList extends Component{
    constructor(){
        super()
        this.state={
            needs :[]
        }
    }

    componentWillMount = ()=>{
        this.setState({
            needs : needs
        })
    }

    render(){
        return(
            <div className="needs-section">
                <h2>Les besoins</h2>
                {this.state.needs.map(el => <NeedItem item={el}/>)}
            </div>
            
        )
    }
}

export default NeedsList;
