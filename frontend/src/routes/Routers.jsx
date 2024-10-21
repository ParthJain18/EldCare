import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Hospitals/Hospitals'
import DoctorDetails from '../pages/Hospitals/HospitalDetails'
import ElderProfile from '../pages/ElderProfile';
import Calendar from '../components/Calendar/Calendar'
import PricingCard from '../components/Subscription/PricingCard'
import DashBoard from '../pages/Dashboard';
import AddPatient from '../pages/AddPatient';
import { Navigate } from 'react-router-dom';
import Map from '../components/Map/Map'



import Appointment from '../pages/Appointment'

import RelativeDash from '../pages/RelativeDash'
import AddElder from '../pages/AddElder'



const Routers = () => {
  const isAuthenticated = () => {
    const accessToken = localStorage.getItem('userId');
    return !!accessToken; // Returns true if there is an access token, false otherwise
  };
  
  // PrivateRoute component to handle protected routes
  const DoctorRoute = ({ component: Component }) => {
    if (isAuthenticated()) {
      const type = localStorage.getItem("userType");
      if(type == "Relative"){
        return <Navigate to="/" />
      }
      return <Component />;
    } else {
      // Redirect to the sign-in page if not authenticated
      return <Navigate to="/login" />;
    }
  };

  const RelativeRoute = ({ component: Component }) => {
    if (isAuthenticated()) {
      const type = localStorage.getItem("userType");
      if(type == "Doctor"){
        return <Navigate to="/dashboard" />
      }
      return <Component />;
    } else {
      // Redirect to the sign-in page if not authenticated
      return <Navigate to="/login" />;
    }
  };

  const AuthRoute = ({ component: Component }) => {
    if (isAuthenticated()) {
      return <Component />;
    } else {
      // Redirect to the sign-in page if not authenticated
      return <Navigate to="/login" />;
    }
  };
  
  const NotDocRoute = ({ component: Component }) => {
    if (isAuthenticated()) {
      const type = localStorage.getItem("userType");
      if(type == "Doctor"){
        return <Navigate to="/dashboard" />
      }
      return <Component />;
    } else {
      // Redirect to the home page if not authenticated
      return <Component/>;
    }
  };
  return (
  <Routes>
    <Route path='/' element={<NotDocRoute component={Home}/>}></Route>
    <Route path='/hospital' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/appointment' element={<Appointment/>}></Route>
    <Route path='/map/:id' element={<RelativeRoute component={Map}/>}></Route>
    <Route path='/relativedash' element={<RelativeRoute component={RelativeDash}/>}></Route>
    <Route path='/addelder' element={<RelativeRoute component={AddElder}/>}></Route>
    <Route path='/addpatient' element={<DoctorRoute component={AddPatient}/>}></Route>
    <Route path='/dashboard' element={<DoctorRoute component={DashBoard}/>}></Route>
    <Route path='/profile/:id' element={<AuthRoute component={ElderProfile}/>}></Route>
    <Route path='/schedule/:id' element={<AuthRoute component={Calendar}/>}></Route>
     <Route path='/pricing' element={<PricingCard/>}></Route>
    {/* <Route path='/payment' element={<Payment/>}></Route>  */}
  </Routes>
  )
}
export default Routers