import React, { useState } from 'react'
import signupImg from '../assets/images/signup.jpg'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate();
  //setting values
  const [values, setValues] = useState({
    fullName:"",
    email:"",
    password:"",
    userType: "",
    gender: "",
});
  
  //setting repeat password to check on submission if both passwords match
  const [cpassword, setCpassword] = useState('');

  //handling submit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(cpassword != values.password){
      toast.error("Passwords must be same")
    }else{
      try{
        const response = await axios.post("http://localhost:5000/auth/register", {
          ...values,
        });
        console.log(response);
        localStorage.setItem("userId", response.data.userDetails.userId);
        localStorage.setItem("email", response.data.userDetails.email);
        localStorage.setItem("userType" , response.data.userDetails.userType);
        localStorage.setItem("gender" , response.data.userDetails.gender);
        localStorage.setItem("fullName" , response.data.userDetails.fullName);
        toast.success("Registration Successfull!")
        if(values.userType === 'Doctor') navigate('/dashboard')
        else navigate('/');
        location.reload();
      } catch (error){
        toast.error(error.response.data.message);
      }
    }
  }

  return <section className='px-5 xl:px-0'>
    <div className="max-w-[1170px] mx-auto">
      <div className=" rounded-xl bg-white flex flex-row lg:grid-cols-2 border border-gray-400 shadow-xl shadow-gray-400">
        {/* img box  */}
        <div className="bg-primaryColor h-100 w-7/12 rounded-l-xl">
            <img src={signupImg} alt="" className='w-full h-full object-cover rounded-l-xl' />
        </div>

        {/* sign up form  */}
        <div className="py-10 px-9 w-5/12">
          <h3 className='text-headingColor text-3xl leading-9 font-bold mb-10'>
            Create An <span className='text-primaryColor'>Account</span>
          </h3>

          <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col'>
            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="fullName" id="fullName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}/>
              <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}/>
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}/>
              <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
              required onChange={(e)=> setCpassword(e.target.value)}/>
              <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
            </div>


            <div className=" my-5 mb-8 flex items-center justify-between flex-row">
              <label className='text-headingColor font-bold text-[16px] leading-7'> Are you a:
                <select name="userType" className='text-textColor bg-white font-semibold text-[15px] leading-7 px-4 py-1 focus:outline-none border-b border-gray-400 mx-2' required
                onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}>
                  <option value="">Select</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Relative">Relative</option>
                </select>
              </label>
              <label className='text-headingColor font-bold text-[16px] leading-7'> Gender:
                <select name="gender" className='text-textColor bg-white font-semibold text-[15px] leading-7 px-4 py-1 focus:outline-none border-b border-gray-400 mx-2' required  
                onChange={(e)=>setValues({...values, [e.target.name]:e.target.value })}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>

           <div className="mt-7">
              <button type='submit' className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-blue-600 flex items-center justify-center font-bold">Sign Up</button>
            </div>

            <p className="mt-5 text-textColor text-center">Already have an account ? <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link></p>
          </form>
          <Toaster/>
        </div>
        
      </div>
    </div>
  </section>

}

export default Signup