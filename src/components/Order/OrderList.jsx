import React, { useContext } from 'react'

import  {OrderContext} from '../../FoodAPI'

const OrderList=()=>{
    const[orderItems]=useContext(OrderContext)
    console.log(orderItems)
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                <th>S.No</th>
                <th>Order Code</th>
                <th>Order Amount</th>
                <th>Order Placed</th>
                </tr>
            </thead>
            <tbody>
             {orderItems && orderItems.map((item,id)=>{
                 return(
                     <tr key={id}>
                         <td>{id+1}</td>
                 <td>{item.data.id}</td>
                 <td>{item.qty}</td>
                 <td>{item.qty}</td>
                     </tr>
                 )
             })}
            </tbody>
        </table>
    )
}

export default OrderList