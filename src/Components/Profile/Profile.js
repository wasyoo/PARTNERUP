import React,{Component} from 'react'
import NeedsList from './NeedsList'
import Partner from './Partners'
import Map  from './Here'
import TopBarInfo from './TopBarInfo'
import Description from './Description';
import Loading from '../shared/Loading'
import Axios from 'axios'

import './Profile.css'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            company : null,
            needs: [],
            partner:[],
            companyId:this.props.match.params.id,
        }
    }

    componentWillMount(){
        Axios.get("http://localhost:4000/company/"+this.state.companyId)
        .then((res)=>{
            this.setState({
                company : res.data.company,
                needs : res.data.needs,
                partner : res.data.partner
            })
        })
        .catch(err=>console.log(err))    
    }
    
    render(){
        return (
                (this.state.company === null) ? (
                    <h1 style={{textAlign:"center"}}><Loading/> Chargement ...</h1>
                ) : (
                <div className="profile-content">
                    <div className="header-map">
                        <Map address={this.state.company.address}/>
                    </div>
                    <div className="">
                        <TopBarInfo company={this.state.company} 
                        needsNumber={this.state.needs.length} 
                        partnerNumber={this.state.partner.length}/>
                    </div>
                    <div className="profile-body">
                        <div className="container">
                            <div className="row">
                                <main className="col-md-9">
                                    <Description description={this.state.company.description} companyName={this.state.company.name}/>
                                    <NeedsList 
                                    companyNeeds={this.state.needs}
                                    company={this.state.company}
                                    />
                                </main>
                                <aside className="col-md-3">
                                    <Partner partner={this.state.partner}/>
                                </aside>
                            </div>
                        </div>
                    </div> 
                </div>
                )
        )
    }
}

export default Profile;