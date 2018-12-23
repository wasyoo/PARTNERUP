import React from 'react'
import NeedsList from './NeedsList'
import Partner from './Partners'
import Map  from './Here'
import TopBarInfo from './TopBarInfo'
import Description from './Description';

import './Profile.css'

const company = {
        name:"Company name",
        logo:"https://www.designevo.com/res/templates/thumb_small/3d-shape-regular-letter-g-and-m.png",
        description:"Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        rating : 3,
        partner : 10,
        needs : 4
    }


const Profile = ()=>{
    return (
        <div className="profile-content">
            <div className="header-map">
                <Map />
            </div>
            <div className="">
                <TopBarInfo info={company}/>
            </div>
            <div className="profile-body">
                <div className="row">
                    <main className="col-md-9">
                        <Description description={company.description} companyName={company.name}/>
                        <NeedsList />
                    </main>
                    <aside className="col-md-3">
                        <Partner />
                    </aside>
                </div>
            </div> 
        </div>
        
    )
}

export default Profile;