// This is the UI for displaying food items

import React, { useContext, useEffect } from 'react'

import{BagContext} from '../FoodAPI'

import {Link} from 'react-router-dom'
const FoodCard=({data})=>{
  const[bagItems,setBagItems]=useContext(BagContext)

  const isInBag=(item)=>{
    return !!bagItems.find(data=>data.data.id===item.id)
  }
  

const addToBag=(item)=>{
  if(!bagItems.find(data=>data.data.id===item.id)){
    setBagItems([...bagItems,{data:item,qty:1}])
  }
  else{
    bagItems[bagItems.findIndex(data=>data.data.id===item.id)].qty++
  }
}

  useEffect(()=>{
  
  },[bagItems])
    return(
      <div className=" mt-4">
       
        <div className="row">
          {data.map((item,id)=>{
            return(
              <div className="col-lg-3 col-md-3 col-sm-1" key={id}>
                <div className="card">
                  <img className="card-img-top card-image" src={item.primary_image} alt={item.name}/>
                  <div className="card-body">
                  <div className="card-title">{item.name}</div>
            <p className="card-text"><span className="price">Rs. {item.price}/-</span> per {item.unit_serving}</p>
                  
                      <button className="btn btn-block rounded-0 order-btn menu-btn">Order Now</button>
                   
                  {!isInBag(item) &&  <button className="btn btn-block rounded-0 bag-btn menu-btn" onClick={()=>addToBag(item)}><i className="fa fa-shopping-bag mr-2" aria-hidden="true"></i> Add to Bag</button>}

                  {isInBag(item) &&
                   <Link to="/bag" className="btn btn-block btn-secondary rounded-0">Check In Bag</Link> 
                  }
                   
                   
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </div>
    )
}

export default FoodCard