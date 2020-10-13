import React, { useContext } from 'react'

// Components import
import MenuCard from './MenuCard'
// Context import
import {CategoryContext} from '../../FoodAPI'
import Header from '../Header'

// Router import
import {Link} from 'react-router-dom'
const MenuList=(props)=>{

    const[category]=useContext(CategoryContext)
    return(
    <React.Fragment>
         <div className="container mt-4">
        <Header title="Our Menu"></Header>
       
       <div className="row">
           {category.map((item,id)=>{
               return(
                   <div className="col-lg-3 col-md-3 col-sm-6" key={id}>
                     <Link to={`/${item.slug}/${item.id}`} className="menu-link">  <MenuCard image={item.image} title={item.name}></MenuCard></Link>
                   </div>
               )
           })}
       </div>
       </div>
       </React.Fragment>
    )
}

export default MenuList