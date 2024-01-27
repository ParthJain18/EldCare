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
import DashBoard from '../pages/DashBoard'
import Appointment from '../pages/Appointment'

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

  const AuthRoute = ({ component: Component }) => {
    if (isAuthenticated()) {
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
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/hospital' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/dashboard' element={<DashBoard/>}></Route>
    <Route path='/profile' element={<ElderProfile/>}></Route>
    <Route path='/schedule' element={<Calendar/>}></Route>
    <Route path='/appointment' element={<Appointment/>}></Route>

  </Routes>
  )
}
export default Routers