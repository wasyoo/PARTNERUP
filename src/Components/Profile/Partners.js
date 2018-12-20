import React, {Component} from 'react'

const partner = [
    {
        name : "Starup1",
        logo : "https://www.designevo.com/res/templates/thumb_small/bright-blue-kaleidoscope.png"
    },
    {
        name : "Starup2",
        logo : "https://www.designevo.com/res/templates/thumb_small/symmetrical-blue-and-yellow-shape.png"
    },
    {
        name : "Starup3",
        logo : "https://www.designevo.com/res/templates/thumb_small/small-colorful-pattern.png"
    }
]
class Parnter extends Component{
    render(){
        return (
            <div className="partner-content">
                <h6>Les partenaires de la <br/><strong>Company Name</strong></h6>
                {partner.map(el => <div className="partner-item">
                    <img src={el.logo} alt={"logo "+el.name} class="img-thumbnail"/>
                    <h5>{el.name}</h5>
                </div>)}
            </div>
        )
    }
}

export default Parnter;