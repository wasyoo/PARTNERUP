import React from 'react'
import UserMenu from './UserMenu'
import NotificationMenu from './NotificationMenu'
import MsgMenu from './MsgMenu'

import './navbar.css'

const NavBarConnected = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="/">
                <img src="/assets/img/Logo-partnerUp.png" alt="logo partnerup"/>
                <span>ParterUp</span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">                  
                        <NotificationMenu/>
                        <MsgMenu/>
                        <UserMenu/>
                </ul>
            </div>
        </nav>
    )
}

export default NavBarConnected;