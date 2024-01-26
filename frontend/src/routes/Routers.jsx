import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
<<<<<<< HEAD
import Contact from '../pages/Contact'
import Doctors from '../pages/Hospitals/Hospitals'
import DoctorDetails from '../pages/Hospitals/HospitalDetails'
import DashBoard from '../pages/DashBoard'
=======
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Services from '../components/Services/Services';
import Hospital from '../components/Hospitals/Hospital';
import Contact from '../pages/Contact';
import ElderProfile from '../pages/ElderProfile';

>>>>>>> ce94ca4e4e78c564206b3b33f127c46ea3d997cc

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
<<<<<<< HEAD
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/dashboard' element={<DashBoard/>}></Route>
=======
    <Route path='/profile' element={<ElderProfile/>}></Route>


>>>>>>> ce94ca4e4e78c564206b3b33f127c46ea3d997cc
  </Routes>
  )
}
export default Routers