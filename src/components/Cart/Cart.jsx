import React from 'react'

// Components import
import Header from '../Header'

import CartCard from './CartCard'

// Context import

const Cart=()=>{
    
    return(
        <div className="container mt-4">
            <Header title="Your Bag" className="mb-4"></Header>
            <CartCard/>
        </div>
    )
}

export default Cart