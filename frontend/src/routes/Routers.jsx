import React from 'react'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Services from '../components/Services/Services';
import Hospital from '../components/Hospitals/Hospital';
import Contact from '../pages/Contact';
import ElderProfile from '../pages/ElderProfile';


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/hospital' element={<Hospital/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/profile' element={<ElderProfile/>}></Route>


  </Routes>
  
}

export default Routers