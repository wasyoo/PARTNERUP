import React from 'react'
import Rating from '../Profile/Rating'

const company =[
    {
        company_name: "comapny1",
        company_logo: "https://www.designevo.com/res/templates/thumb_small/colorful-centripetal-circle-company.png",
        rating:4
    },
    {
        company_name: "comapny2",
        company_logo: "https://www.designevo.com/res/templates/thumb_small/shape-and-letter-s.png",
        rating:5
    },
    {
        company_name: "comapny3",
        company_logo: "https://www.designevo.com/images/home/3d-green-letter-o.png",
        rating:3
    },
]

const LastStartup = () =>{
    return (
        <div className="best-startup">
            <h3>Les startup les mieux notées</h3>
            {company.map(el=> 
            <div className="statup-item">
                <img src={el.company_logo} alt={el.company_name}/>
                <div>
                    <h2>{el.company_name}</h2>
                    <Rating rating={el.rating}/>
                </div>
            </div>
            )}
        </div>
    )
}

export default LastStartup;