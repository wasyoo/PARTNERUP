import React,{Component} from 'react'
import HomeNeedsItem from './HomeNeedsItem'


export default class HomeNeedsList extends Component{
    render(){
        return(
            this.props.needs.map(el => <HomeNeedsItem need={el}/>)
        )
    }
}