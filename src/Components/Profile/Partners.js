import React, {Component} from 'react'

class Parnter extends Component{
    render(){
        console.log(this.props.partner.length)
        return (
            <div className="partner-content">
                <h6>Les partenaires de la <br/><strong>Company Name</strong></h6>
                {(this.props.partner.length <= 0) ? 
                    <p>Pas de partenaires pour le moment</p> : 
                    this.props.partner.map( el => 
                    <div key={el._id} className="partner-item">
                        <img src={el.logo} alt={"logo "+el.name} className="img-thumbnail"/>
                        <h5>{el.name}</h5>
                    </div> 
                    )
                }
            </div>
        )
    }
}

export default Parnter;