import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, LogIn, Payment, Shop, Tracking } from './container'


const App = () => {
  return (
    <div className='h-auto'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/tracking' element={<Tracking />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/cart/payment' element={<Payment />} />
    </Routes>
    </div>
  )
}

export default App