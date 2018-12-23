import React,{Component} from 'react'

export default class SearchBox extends Component {
    render(){
        return (
            <div className="home-search-box">
                    <input type="text" className="form-control form-control-lg input-search" placeholder="Rechercher (Startup, mot-clés)" /> 
            </div>
        )
    }
} 