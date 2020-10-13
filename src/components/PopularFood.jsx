// This component deals with the top rated products of our company

import React, { useContext } from 'react'

// COmponents import

import Header from './Header'
import FoodCard from './FoodCard'

// Context import
import {FoodContext} from '../FoodAPI'

const PopularFood=(props)=>{
    const[food]=useContext(FoodContext)
    let popularFood=food.filter(item=>item.isPopular===true)
    return(
        <React.Fragment>
                <div className="container">
            <Header title={"Our Popular Foods"}></Header>
            <FoodCard data={popularFood}/>

           </div>
        </React.Fragment>
    )
}

export default PopularFood