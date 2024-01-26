import React from 'react'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  
}

export default Routers