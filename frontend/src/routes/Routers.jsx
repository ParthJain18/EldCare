import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Hospitals/Hospitals'
import DoctorDetails from '../pages/Hospitals/HospitalDetails'
import DashBoard from '../pages/DashBoard'
import ElderProfile from '../pages/ElderProfile';
import Calendar from '../components/Calendar/Calendar'
import Appointment from '../pages/Appointment'

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/appointment' element={<Appointment/>}></Route>
    <Route path='/dashboard' element={<DashBoard/>}></Route>
    <Route path='/profile' element={<ElderProfile/>}></Route>
    <Route path='/schedule' element={<Calendar/>}></Route>

  </Routes>
  )
}
export default Routers