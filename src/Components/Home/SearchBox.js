import React,{Component} from 'react'

export default class SearchBox extends Component {
    handleSearcheBar=(e)=>{
        this.props.getSearch(e.target.value)
    }
    render(){
        return (
            <div className="home-search-box">
                    <input type="text" className="form-control form-control-lg input-search" placeholder="Rechercher (Startup, mot-clés)" onChange={this.handleSearcheBar} /> 
            </div>
        )
    }
} 