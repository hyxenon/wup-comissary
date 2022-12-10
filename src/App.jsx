import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, LogIn, Payment, Shop, Tracking } from './container'
import { CartProvider } from './Context/CartContext'


const App = () => {
  return (
    <div className='h-auto'>
      <CartProvider>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/tracking' element={<Tracking />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/cart/payment' element={<Payment />} />
    </Routes>
    </CartProvider>
    </div>
  )
}

export default App