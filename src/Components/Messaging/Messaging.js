import React , {Component} from 'react'
import MsgList from './MsgList'
import Conversation from './Conversation'

import './messaging.css'

const messages = [
    {
        name : "companyA",
        logo : "https://www.designevo.com/res/templates/thumb_small/symmetrical-red-and-blue-polygon-company.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyB",
        logo : "https://www.designevo.com/res/templates/thumb_small/black-disc-and-headphone.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyC",
        logo : "https://www.designevo.com/res/templates/thumb_small/shield-3d-letter-h-and-d.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyD",
        logo : "https://www.designevo.com/res/templates/thumb_small/blue-shield-and-banner-emblem.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisse",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyA",
        logo : "https://www.designevo.com/res/templates/thumb_small/symmetrical-red-and-blue-polygon-company.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyB",
        logo : "https://www.designevo.com/res/templates/thumb_small/black-disc-and-headphone.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyC",
        logo : "https://www.designevo.com/res/templates/thumb_small/shield-3d-letter-h-and-d.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
        date : "12/12/2018 10:10",
        readed : false
    },
    {
        name : "companyD",
        logo : "https://www.designevo.com/res/templates/thumb_small/blue-shield-and-banner-emblem.png",
        msg : "Lorem ipsum dolor sit amet, adipisci torquatos deterruisse",
        date : "12/12/2018 10:10",
        readed : false
    },
]


export default class Messaging extends Component{
    render(){
        return (
            <div className="messaging">
                <div className="row">
                    <div className="col-md-4">
                        <MsgList messages={messages}/>
                    </div>
                    <div className="col-md-8">
                           <Conversation/>
                    </div>
                </div>
            </div>
        )   
    }
}