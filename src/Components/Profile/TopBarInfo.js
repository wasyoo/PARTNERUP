import React from 'react'
import Rating from './Rating'
import Modal from './Modal'
import ProposeForm from './ProposeForm'
import AddNeeds from './addNeeds'

const TopBarInfo = ({company,needsNumber,partnerNumber}) =>{
    return (
        <div className="top-bar-info">
            <div className="company-logo">
                <img src={`http://localhost:4000/${company.filename}`} alt="" />
            </div>
            <div className="company-top-bar-info">
                <div className="company-name-rating">
                    <h4>{company.name}</h4>
                    <div className="company-rating">
                        <Rating rating={company.rating}/>  
                    </div>
                </div>
                <div className="company-stat">
                    <div className="company-stat-item">
                        <span>Besoins</span>
                        <p>{needsNumber}</p>
                    </div>
                    <div className="company-stat-item">
                        <span>Partenaires</span>
                        <p>{partnerNumber}</p>
                    </div>
                </div>
                <div className="company-btn-propose">
                    <button type="button" className="btn" data-toggle="modal" data-target="#ModalForm">
                       {localStorage.getItem("myId") === company.userId ? (
                            "Ajouter un besoin"
                       ):(
                            "Proposer un Partenariat"
                       )} 
                    </button>
                    <Modal title={localStorage.getItem("myId") === company.userId ? "Ajouter un besoin"  : "Proposer un Partenariat"}id="ModalForm" 
                    content={localStorage.getItem("myId") === company.userId ? AddNeeds : ProposeForm}/>
                </div>
            </div>
        </div>
    )
} 

export default TopBarInfo;