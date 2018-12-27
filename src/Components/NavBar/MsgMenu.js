import React,{Component} from 'react'

const message = [
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

class MsgMenu extends Component {
    constructor(){
        super()
        this.state={
            message : message
        }
    }

    render (){
        return (
            <li className="nav-item dropdown">
                <a className="nav-link  badge-notification" href="/#" id="dropdown-msg-menu" data-toggle="dropdown" data-badge={message.filter(el => !el.readed).length}><i className="fas fa-envelope"></i></a>
                <div className="dropdown-menu dropdown-msg-menu dropdown-menu-right" aria-labelledby="dropdown-msg-menu">
                    <ul className="msg-menu-group">
                        <li className="show-all-msg"><a href="/#">Voir tous les messages</a></li>
                        { this.state.message.map((el,i) =>     
                            <li key={i} className="msg-menu-group-item">
                                <a href="/#" className="msg-menu-item">
                                    <img src={el.logo} alt ={el.name}/>
                                    <div className="msg-menu-content">
                                        <div className="msg-menu-header">
                                            <h6> {el.name} </h6>
                                            <small> {el.date} </small>
                                        </div>
                                        <p>{ el.msg.length > 100 ? el.msg.slice(0,100)+" ..." : el.msg }</p>
                                    </div>
                                </a>
                            </li>
                        ) }
                    </ul>
                </div>
            </li>
        )
    }
}

export default MsgMenu;