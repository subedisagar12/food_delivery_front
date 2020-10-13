import React, { useContext} from 'react'


import {sumItems,BagContext} from '../FoodAPI'

import {Link} from 'react-router-dom'

const Navbar=(props)=>{
  
  const[bagItems]=useContext(BagContext)
    const {itemCount}=sumItems(bagItems)
    return(
        <nav className="navbar navbar-expand-md main-nav">
            <div className="container">
  <Link className="navbar-brand" to="/">Maiti Kitchen</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/my_orders">My Orders</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>

      <li className="nav-item">
    <Link to="/bag" className="nav-link" href="#"> <i className="fa fa-shopping-bag"></i> <span className="badge badge-secondary">{itemCount}</span> </Link>
      </li>
   
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar