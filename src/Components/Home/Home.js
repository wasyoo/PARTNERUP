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
            lastCompanies : []
        }
    }
    componentWillMount(){
        Axios.get("http://localhost:4000/needs/all")
        .then(res=>{
            this.setState({
                needs : res.data.needs,
                lastCompanies : res.data.company
            })
        })
        .catch(err=>console.log(err))
    }
    render(){
        return (
            <div>
                <HomeBanner/>
                <SearchBox/>
                <main className="home-main-container">
                    <div className="row">
                        <section className="col-md-9">
                            <div className="row">
                            {this.state.needs.length <= 0 ? (
                                    <Loading/>
                            ) :(
                                <HomeNeedsList needs={this.state.needs}/>
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