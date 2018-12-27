import React from 'react'

const NeedItem = ({item,company})=>{
    
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
                    <a href="/#">voir détails ></a>
                </div>
            </div>
            
        </div>
    )
}

export default NeedItem;