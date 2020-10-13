import React, { useContext } from 'react';

import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


// Components import
import Navbar from './components/Navbar'

import FoodList from './components/FoodList'
import Cart from './components/Cart/Cart'
import Form from './components/Checkout/Form'
import OrderList from './components/Order/OrderList'

import Home from './components/Home'
import OrderConfirm from './components/Confirmation/Order_Confirm'
// API import
import {CategoryProvider,FoodProvider,BagProvider,generateCode,OrderProvider} from './FoodAPI'

// Router import
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
 
  let id=generateCode()
  return (
    <Router>
    <FoodProvider>
      <CategoryProvider>
        <BagProvider>
          <OrderProvider>
    <div className="App">
    <Navbar/>
      <Switch>
    
        <Route path="/" exact render={(routerProps)=><Home {...routerProps}/>}>
         
        </Route> 

        <Route path="/:slug/:id" render={(routerProps)=>{
          return(
            <FoodList routerProps={routerProps}></FoodList>
          )
        }
        }>
        
        </Route>

        <Route path="/bag">
            <Cart/>
        </Route>


  <Route path="/checkout"  render={(routerProps)=><Form {...routerProps} id={id}/>}></Route>

  <Route path="/confirmation"  render={(routerProps)=><OrderConfirm {...routerProps} orderCode={id}/>}>
</Route>

<Route path="/my_orders">
  <OrderList/>
</Route>
      </Switch>
   
    </div>
    </OrderProvider>
    </BagProvider>
    </CategoryProvider>
    </FoodProvider>
    </Router>
  );
}

export default App;
