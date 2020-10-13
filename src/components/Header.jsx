import React from 'react'

const Header=({title})=>{
    return(
    <React.Fragment>
        <h4 className="header mb-1">{title}</h4>
       <hr></hr>
    </React.Fragment>
    
    )
}

export default Header