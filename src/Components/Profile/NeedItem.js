import React from 'react'

const NeedItem = ({item})=>{
    return (
        <div className="need-item">
            <div className="item-img">
                <img src={item.company_logo} alt={item.company_name}/>
            </div>
            <div className="item-content">
                <div className="item-body">
                    <h5 class="item-title">{item.title}</h5>
                    <p class="item-text">
                    {item.description}
                    </p>
                </div>

                <div className="item-footer">
                    <div className="item-tags">
                        {item.tags.map(el => <span>{el}</span>)}
                    </div>
                    <a href="/#">Postuler</a>
                </div>
            </div>
            
        </div>
    )
}

export default NeedItem;