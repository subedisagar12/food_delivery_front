import React from 'react'

import MenuList from './Menu/MenuList'
import PopularFood from './PopularFood'
const Home=(props)=>{
    return(
            <React.Fragment>
                 <MenuList/>
                <PopularFood/>
            </React.Fragment>
    )
}   

export default Home