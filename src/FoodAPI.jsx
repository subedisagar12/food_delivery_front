import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const CategoryContext=createContext()
export const FoodContext=createContext()
export const BagContext=createContext()
export const OrderContext=createContext()
export const CategoryProvider=(props)=>{
    const[category,setCategory]=useState()
    useEffect(()=>{
        async function getCategory(){
            let data=await axios.get("http://subedisagar12.pythonanywhere.com/api/category").catch(e=>console.log(e))
            

            if (data){
                setCategory(data.data)
            }
        }

        getCategory()
        
    },[])

    if(category){
    return(
        <CategoryContext.Provider value={[category,setCategory]}>
            {props.children}
        </CategoryContext.Provider>
    )
    }

    else{
        return(
            <h1>Loading......</h1>
        )
    }
}

export const FoodProvider=(props)=>{
    const[food,setFood]=useState()
    useEffect(()=>{
        async function getFood(){
            let data=await axios.get("http://subedisagar12.pythonanywhere.com/api/food").catch(e=>console.log(e))

            if(data){
                setFood(data.data)
            }

        }

        getFood()
    },[])

    if (!food){
        return(
            <h1>Loading...</h1>
        )
    }
    else{
    return(
        <FoodContext.Provider value={[food,setFood]}>
            {props.children}
        </FoodContext.Provider>
    )
    }
}


export const BagProvider=(props)=>{
    const[bagItems,setBagItems]=useState([])

    if(bagItems){
       
        return(
            <BagContext.Provider value={[bagItems,setBagItems]}>
                {props.children}
            </BagContext.Provider>
        )
    }

    else{
        return(
            <h4>Empty Cart</h4>
        )
    }
}

export const sumItems=(items)=>{
    
    let itemCount=items.reduce((total,data)=>total+data.qty,0)
    let totalAmount=items.reduce((total,data)=>total+data.data.price*data.qty,0)

    return {itemCount,totalAmount}
}

export const generateCode=()=>{
    let crypto = require("crypto");
    let id = crypto.randomBytes(4).toString('hex');

  
    return id
}

export const OrderProvider=(props)=>{
    const[orderItems,setOrderItems]=useState()

    return(
        <OrderContext.Provider value={[orderItems,setOrderItems]}>
            {props.children}
        </OrderContext.Provider>
    )
}