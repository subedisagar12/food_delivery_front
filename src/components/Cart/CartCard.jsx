import React, { useContext } from 'react'

import {BagContext,sumItems} from '../../FoodAPI'

import {Link} from 'react-router-dom'
const CartCard=(props)=>{

    const [bagItems,setBagItems]=useContext(BagContext)
    const{totalAmount}=sumItems(bagItems)

    const removeBagItems=(item)=>{
        let newBag=[...bagItems]
        newBag=newBag.filter(items=>items.data.id !==item.data.id)
        setBagItems(newBag)
    }
    const increment=(item)=>{
        let index=bagItems.findIndex(data=>data.data.id===item.data.id)
        let newBag=[...bagItems]
        newBag[index].qty+=1
        setBagItems(newBag)
    }

    const decrement=(item)=>{

        let index=bagItems.findIndex(data=>data.data.id===item.data.id)
        let newBag=[...bagItems]
        if( newBag[index].qty===1){
            removeBagItems(item)
        }
        else{
            newBag[index].qty-=1
            setBagItems(newBag)
        }
    
       
        
    }

   

    if(bagItems.length!==0){
    return(
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {bagItems.map((item,id)=>{
                    return(
                        <tr key={id}>
                            <td><img src={item.data.primary_image} alt={item.data.name} className="cart-img"/></td>
                            <td>{item.data.name}</td>
                    <td> <button className="mr-2" onClick={()=>increment(item)}>+</button> {item.qty} {item.data.unit_serving} <button className="ml-2"  onClick={()=>decrement(item)}>-</button></td>
                    <td>Rs. {item.data.price}</td>
                    <td>Rs. {item.data.price*item.qty}</td>

                    <td><p className="remove" onClick={()=>removeBagItems(item)}>Remove</p></td>
                    </tr>
                    )
                })}

                <tr className="total">
                    <th>Total</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
            <td>Rs. {totalAmount}</td>
                </tr>
            </tbody>
  </table>

  <Link to="/checkout" className="btn order-btn rounded-0 menu-btn mb-4">Place Order</Link>
  </div>
    )
            }

    else{
        return(
            <div className="container">
                <h4>Empty Bag</h4>
                <Link to="/" className="btn btn-dark rounded-0 mt-4">See Menu</Link>
            </div>
        )
    }
}

export default CartCard