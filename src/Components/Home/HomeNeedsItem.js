import React from 'react'
import DetailsNeeds from './DetailsNeeds'
import Modal from '../Profile/Modal'

const HomeNeedItem = ({info})=>{
    return (
        <div className="col-md-6">
            <div className="home-need-item">
                <div className="home-need-item-header">
                    <img src={info.company_logo} alt={info.company_name}/>
                    <div className="home-need-item-header-info">
                        <h5 class="home-need-item-title">{info.title}</h5>
                        <div className="home-need-item-tags">
                            <ul>
                                {info.tags.map(el => <li>{el}</li>)}
                            </ul>
                        </div>
                        <div className="">{info.date}</div>
                    </div>
                </div>
                <div className="home-need-item-content">
                    <div className="home-need-item-body">
                        <p>{info.description}</p>
                    </div>
                    <div className="home-need-item-footer">
                        <a href="/#" data-toggle="modal" data-target="#DetailsNeedsModal">Voir détails ></a>
                        <Modal title="" id="DetailsNeedsModal" content={DetailsNeeds}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNeedItem;