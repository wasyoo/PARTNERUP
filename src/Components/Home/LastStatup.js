import React from 'react'
import Rating from '../Profile/Rating'


const LastStartup = ({company}) =>{
    return (
        <div className="best-startup">
            <h3>Les startup les mieux notées</h3>
            {company.map(el=> 
            <div className="statup-item">
                <img src={`http://localhost:4000/${el.filename}`} alt={el.name}/>
                <div className="statup-content">
                    <h2>{el.name}</h2>
                    <Rating rating={el.rating || 5}/>
                </div>
            </div>
            )}
        </div>
    )
}

export default LastStartup;