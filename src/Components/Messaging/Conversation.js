import React, { Component } from 'react'

const message = [
  {
    id : 1,
    date : "2018/12/23 12:33",
    content:"hi",
    sender: 3,
    name:"companyA",
    logo:"https://www.designevo.com/res/templates/thumb_small/symmetrical-red-and-blue-polygon-company.png",
  },
  {
    id : 2,
    date : "2018/12/23 12:43",
    content:"hi, how are you",
    sender: 5,
    name:"companyB",
    logo:"https://www.designevo.com/res/templates/thumb_small/black-disc-and-headphone.png",
  },
  {
    id : 3,
    date : "2018/12/23 12:45",
    content:"fine thank you",
    sender: 3,
    name:"companyA",
    logo:"https://www.designevo.com/res/templates/thumb_small/symmetrical-red-and-blue-polygon-company.png",
  },
  {
    id : 4,
    date : "2018/12/23 12:55",
    content:"Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no, ubique quaestio nam ex, ex impetus mandamus erroribus sea.",
    sender: 5,
    name:"companyB",
    logo:"https://www.designevo.com/res/templates/thumb_small/black-disc-and-headphone.png",
  },
  {
    id : 1,
    date : "2018/12/23 13:00",
    content:"Lorem ipsum dolor sit amet, adipisci torquatos deterruisset eam no",
    sender: 5,
    name:"companyB",
    logo:"https://www.designevo.com/res/templates/thumb_small/black-disc-and-headphone.png",
  },
] 

const id = 3;

export class Conversation extends Component {
  render() {
    return (
      <div className="conversation">

        <div className="conversation-header">
            <h3>Company B</h3>
        </div>
        <div className="conversation-body">
          {message.map(el=> 
            <div className={ el.sender === id ? "conversation-msg-item-reverse conversation-msg-item" :"conversation-msg-item"}>
              <div className="conversation-msg-item-Avatar">
                <img src={el.logo} alt={el.name} />
              </div>
              <div className="conversation-msg-item-content">
                <small> {el.date} </small>
                <p> {el.content} </p>
              </div> 
            </div>
          )}   
        </div>
        <div className="conversation-footer">
            <input type="text" placeholder="Entrez votre message" />
        </div>
      </div>
    )
  }
}

export default Conversation;
