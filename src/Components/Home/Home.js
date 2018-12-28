import React,{Component} from 'react'
import HomeBanner from './HomeBanner'
import SearchBox from './SearchBox'
import HomeNeedsList from './HomeNeedsList'
import LastStartup from './LastStatup'
import Axios from 'axios';
import Loading from '../shared/Loading'

import './home.css'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            needs : [],
            lastCompanies : [],
            searchNeed : "" 
        }
    }
    componentWillMount(){
        Axios.get("http://localhost:4000/needs/all")
        .then(res=>{
            this.setState({
                needs : res.data.needs,
                lastCompanies : res.data.company,
            })
        })
        .catch(err=>console.log(err))
    }

    filterNeed = (needs, searchNeed) => {
        return needs.filter(
            el => el.title.toUpperCase().indexOf(searchNeed.toUpperCase().trim()) !== -1 
        );
    };

    render(){
        console.log(this.filtredNeed)
        return (
            <div>
                <HomeBanner/>
                <SearchBox getSearch={(searchContent)=>
                    this.setState({
                        searchNeed : searchContent
                    })}/>

                <main className="home-main-container">
                    <div className="row">
                        <section className="col-md-9">
                            <div className="row">
                            {this.state.needs.length <= 0 ? (
                                    <Loading/>
                            ) :(
                                <HomeNeedsList needs={this.filterNeed(this.state.needs , this.state.searchNeed)}/>
                            )} 
                            </div>
                        </section>
                        <aside className="col-md-3">
                            <LastStartup company={this.state.lastCompanies}/>
                        </aside>
                    </div>   
                </main>
            </div>
        )
    }
}