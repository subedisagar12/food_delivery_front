import React, { useContext, useEffect, useState } from 'react'

import Input from './Input'

import {sumItems,BagContext,OrderContext} from '../../FoodAPI'

import {Link} from 'react-router-dom'
import axios from 'axios'

let initialState={
    name:'',
    number:'',
    email:'',
    address:'',
    description:'',
}
const Form=(props)=>{
const[bagItems,setBagItems]=useContext(BagContext)
const [orderItems,setOrderItems]=useContext(OrderContext)
const {totalAmount}=sumItems(bagItems)
const[error,setError]=useState('')
const [info,setInfo]=useState(initialState)



const onChange=(e)=>{
    setInfo({...info,[e.target.id]:e.target.value})
    
}

const submit=async(e)=>{
    e.preventDefault()

  
    if(bagItems.length===0){
        setError('Nothing to order')
        return
    }
    else{
        
        const requests=()=>{
            for(let i=0;i<bagItems.length;i++){
                axios({
                    method:'post',
                    url:'https://subedisagar12.pythonanywhere.com/order/order_item/',
                    data:{
                        item:bagItems[i].data.name,
                        qty:bagItems[i].qty,
                        order:props.id
                    },
                    xsrfHeaderName: "X-CSRFToken",
                })
            }
        }

        await axios({
            method:'post',
            url:'https://subedisagar12.pythonanywhere.com/order/order/',
            data:{
                id:props.id,
                client:info.name,
                contact:info.number,
                email:info.email,
                address:info.address,
                address_description:info.description,
                order_amount:totalAmount,
                isComplete:false
            },
            xsrfHeaderName: "X-CSRFToken",
        }).then(()=>requests()).then(()=>props.history.replace('/confirmation'))
    
        
        setOrderItems(bagItems)
    }

    setBagItems([])
    setInfo(initialState)
}
    return(
        <div className="container mt-4">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card">
                    <h3 className="card-title text-center checkout-header">CheckOut Form</h3>
                    <div className="card-body">
    {error?<h6>{error}</h6>:null}
                    <form>
            <div className="form-row mb-3">
                <div className="col">
                    <Input id="name" type="text" placeholder="Full Name" label="Full Name*" required="true" value={info.name} onChange={e=>onChange(e)}/>
                </div>
                
            </div>


            <div className="form-row mb-3">
                <div className="col">
                    <Input id="number" type="tel" placeholder="Contact Number" label="Contact Number *"
                    pattern="[0-9]*" required="true" value={info.number} onChange={e=>onChange(e)}/>
                </div>
                <div className="col">
                <Input id="email" type="email" placeholder="Email Address" label="Email Address"  value={info.email} onChange={e=>onChange(e)}/>
                </div>
            </div>

            <div className="form-row mb-3">
                <div className="col">
                    <Input id="address" type="text" placeholder="Address" label="Address" required="true"  value={info.address} onChange={e=>onChange(e)}/>
                </div>
            </div>

            <div className="form-row">
                <div className="col">
                <label htmlFor="description">Describe your location <small> (It will help us to easily locate you)</small></label>
                <textarea className="form-control checkout-input" id="description" rows="3"  value={info.description} onChange={e=>onChange(e)}></textarea>
                </div>
            </div>

            <div className="form-row mt-3">
                <div className="col">
                    <label htmlFor="billTotal">Your Bill Amount</label>
                    <input type="text" className="form-control checkout-input"  disabled value={`Rs. ${totalAmount}`}/>
                </div>
            </div>
            <button type="submit" className="btn bag-btn menu-btn rounded-0 mt-3" onClick={e=>submit(e)}>Order</button>
            <Link to="/bag" className="btn order-btn menu-btn rounded-0 mt-3 ml-4"> <i className="fa fa-shopping-bag"></i> Check Bag</Link>
        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
        </div>
    )
}

export default Form