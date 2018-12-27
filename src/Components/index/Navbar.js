import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="/">
                <img src="https://www.clipartmax.com/png/middle/115-1150788_unique-partnership-schemes-business-handshake-logo.png" alt="logo partnerup" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">A propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Contact</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/#" data-toggle="modal" data-target="#register">Inscription</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Connexion</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;