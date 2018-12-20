import React from 'react'
import NeedsList from './NeedsList'
import Partner from './Partners'
import Map  from './Here'
import TopBarInfo from './TopBarInfo'
import './Profile.css'
import Description from './Description';

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
                <main>
                    <Description description={company.description} companyName={company.name}/>
                    <NeedsList />
                </main>
                <aside>
                    <Partner />
                </aside>
            </div> 
        </div>
        
    )
}

export default Profile;