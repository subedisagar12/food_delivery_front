import React, { useContext} from 'react'

// Context import
import {FoodContext,CategoryContext} from '../FoodAPI'

// Component import
import FoodCard from './FoodCard'
import Header from './Header'
const FoodList=({routerProps})=>{
    const [food]=useContext(FoodContext) 
    const[category]=useContext(CategoryContext)
    let id=parseInt(routerProps.match.params.id)
    let category_name=category.find(item=>item.id===id)
    let filtered_items=food.filter(item=>item.category===id)
    return(
        <div>
        <div className="container mt-4">
        <Header title={`${category_name.name} Menu`}/>
        <FoodCard data={filtered_items}/>
        </div>
        </div>
    )
}

export default FoodList