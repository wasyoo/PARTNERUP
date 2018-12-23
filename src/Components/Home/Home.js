import React,{Component} from 'react'
import HomeBanner from './HomeBanner'
import SearchBox from './SearchBox'
import HomeNeedsList from './HomeNeedsList'
import LastStartup from './LastStatup'

import './home.css'

export default class Home extends Component {
    render(){
        return (
            <div>
                <HomeBanner/>
                <SearchBox/>
                <main className="home-main-container">
                    <div className="row">
                        <section className="col-md-9">
                            <div className="row">
                                <HomeNeedsList/>
                            </div>
                        </section>
                        <aside className="col-md-3">
                            <LastStartup />
                        </aside>
                    </div>   
                </main>
            </div>
        )
    }
}