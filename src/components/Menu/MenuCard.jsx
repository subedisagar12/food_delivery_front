import React from 'react'

// Context import


const MenuCard=({image,title})=>{


    return(
    <div className="card menu-card">
        <img className="card-img-top menu-image" src={image} alt={title}/>
        <div className="card-body">
    <div className="card-title">{title} Menu</div>
        </div>
    </div>
    )
}

export default MenuCard