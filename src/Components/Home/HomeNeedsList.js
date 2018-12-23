import React,{Component} from 'react'
import HomeNeedsItem from './HomeNeedsItem'

const AllNeeds = [
    {
    company_name:"company1",
    company_logo:"https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png",
    title:"Lorem ipsum dolor sit amet",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags:["Lorem ipsum","dolor sit","amet"],
    date:"12/11/2018"
    },
    {
        company_name:"company2",
        company_logo:"https://www.designevo.com/res/templates/thumb_small/shape-and-letter-s.png",
        title:"Lorem ipsum dolor",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tags:["dolor sit","amet"],
        date:"10/11/2018"
    },
    {
        company_name:"company3",
        company_logo:"https://www.designevo.com/images/home/3d-green-letter-o.png",
        title:"Lorem ipsum dolor",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tags:["amet"],
        date:"17/11/2018"
    }
]

export default class HomeNeedsList extends Component{
    render(){
        return(
            AllNeeds.map(el => <HomeNeedsItem info={el}/>)
        )
    }
}