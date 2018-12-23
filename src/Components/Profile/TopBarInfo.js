import React from 'react'
import Rating from './Rating'
import Modal from './Modal'
import ProposeForm from './ProposeForm'

const TopBarInfo = ({info}) =>{
    return (
        <div className="top-bar-info">
            <div className="company-logo">
                <img src={info.logo} alt="" />
            </div>
            <div className="company-top-bar-info">
                <div className="company-name-rating">
                    <h4>{info.name}</h4>
                    <div class="company-rating">
                        <Rating rating={info.rating}/>  
                    </div>
                </div>
                <div className="company-stat">
                    <div className="company-stat-item">
                        <span>Besoins</span>
                        <p>{info.needs}</p>
                    </div>
                    <div className="company-stat-item">
                        <span>Partenaires</span>
                        <p>{info.partner}</p>
                    </div>
                </div>
                <div className="company-btn-propose">
                    <button type="button" className="btn" data-toggle="modal" data-target="#proposeModal">
                        Proposer un Partenariat
                    </button>
                    <Modal title="Proposer un Partenariat" id="proposeModal" content={ProposeForm}/>
                </div>
            </div>
        </div>
    )
} 

export default TopBarInfo;