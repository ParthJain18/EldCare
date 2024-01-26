import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    password:"",
});
const handleSubmit = async(e) =>{
  e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/auth/login", {
        ...values,
      });
      console.log(response);
      localStorage.setItem("userId", response.data.userDetails.userId);
      localStorage.setItem("email", response.data.userDetails.email);
      localStorage.setItem("userType" , response.data.userDetails.userType);
      localStorage.setItem("gender" , response.data.userDetails.gender);
      localStorage.setItem("fullName" , response.data.userDetails.fullName);
      toast.success("Login Successfull!")
      if(response.data.userDetails.userType === 'Doctor') navigate('/dashboard')
      else navigate('/');
      location.reload();
    } catch (error){
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

    return <section className="px-5 lg:px-0">
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>Hello <span className='text-primaryColor'>Welcome</span> Back 🙋</h3>
      <form className='py-4 md:py-0' onSubmit={e => handleSubmit(e)}> 
        <div className="mb-5">
          <input type="email" placeholder='Enter Your Email' name='email' className='w-full py-3 border-b bprder-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required 
          onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}/>
        </div>

        <div className="mb-5">
          <input type="password" placeholder='Password' name='password' className='w-full py-3 border-b bprder-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer' required 
          onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}/>
        </div>

        <div className="mt-7">
          <button type='submit' className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 flex items-center justify-center">
            Login
            </button>
        </div>

        <p className="mt-5 text-textColor text-center">Don't have an account ? <Link to='/signup' className='text-primaryColor font-medium ml-1'>Register</Link></p>

      </form>
    </div>
  </section>
}

export default Login