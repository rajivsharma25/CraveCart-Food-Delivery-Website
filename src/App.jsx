import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'


const App = () => {

  const[showLogin, setShowLogin] = useState(false);

  return (
    <>  
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : null}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App