import React from 'react'

const Description = ({description, companyName})=>{
    return (
        <div className="company-description">
            <h5>A propo de {companyName}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Description;