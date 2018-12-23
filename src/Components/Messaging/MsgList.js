import React from 'react'
import SearchBarMsg from './SearchBarMsg'

const MsgList = ({messages})=>{
    return (
        <div className="list-msg-section">
            <SearchBarMsg />
            <div className="list-msg">
            {messages.map(el => 
                <div class="msg-group-item">
                    <a href="/#" className="msg-item">
                        <img src={el.logo} alt ={el.name}/>
                        <div className="msg-content">
                            <div className="msg-header">
                                <h6> {el.name} </h6>
                                <small> {el.date} </small>
                            </div>
                            <p>{ el.msg.length > 80 ? el.msg.slice(0,80)+" ..." : el.msg }</p>
                        </div>
                    </a>
                </div>
            )}
            </div>
        </div>
    )
    
}

export default MsgList;