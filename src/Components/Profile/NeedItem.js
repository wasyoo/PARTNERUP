import React from 'react'
import {Link} from 'react-router-dom'

const NeedItem = ({item,company})=>{
    console.log(item)
    return (
        <div className="need-item">
            <div className="item-img">
                <img src={`http://localhost:4000/${company.filename}`} alt={company.name}/>
            </div>
            <div className="item-content">
                <div className="item-body">
                    <h5 className="item-title">{item.title}</h5>
                    <p className="item-text">
                    {item.content}
                    </p>
                </div>

                <div className="item-footer">
                    <div className="item-tags">
                        {item.tags.map((el,i) => <span key={i}>{el}</span>)}
                    </div>
                    <Link to={`/need/${item._id}`}> Voir détails ></Link>
                </div>
            </div>
            
        </div>
    )
}

export default NeedItem;