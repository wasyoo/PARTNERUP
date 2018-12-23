import React from 'react'

const UserMenu = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle user" id="dropdown-user-menu" data-toggle="dropdown" href="/#">
                <img className="img-thumbnail rounded-circle" src="https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png" alt=""/>
                <h6>Company Name</h6>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdown-user-menu">
                <a className="dropdown-item" href="/#">Voir profil</a>
                <a className="dropdown-item" href="/#">Modifier</a>
                <a className="dropdown-item" href="/#">Ajouter un besoin</a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="/#">Déconnexion</a>
            </div>
        </li>
    )
}

export default UserMenu;