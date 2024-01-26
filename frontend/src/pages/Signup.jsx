import React, { useState } from 'react'
import signupImg from '../assets/images/signup.jpg'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {


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

          <form onSubmit={''} className='flex flex-col'>
            <div className="relative z-0 w-full mb-5 group">
              <input type="name" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
            </div>


            <div className=" my-5 mb-8 flex items-center justify-between flex-row">
              <label className='text-headingColor font-bold text-[16px] leading-7'> Are you a:
                <select name="role" className='text-textColor bg-white font-semibold text-[15px] leading-7 px-4 py-1 focus:outline-none border-b border-gray-400 mx-2' required>
                  <option value="">Select</option>
                  <option value="patient">Doctor</option>
                  <option value="doctor">Relative</option>
                </select>
              </label>
              <label className='text-headingColor font-bold text-[16px] leading-7'> Gender:
                <select name="gender" className='text-textColor bg-white font-semibold text-[15px] leading-7 px-4 py-1 focus:outline-none border-b border-gray-400 mx-2' required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
            </div>

            <div className="mb-5 flex items-center gap-3">
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img src={''} alt="" className='w-full rounded-full' />
              </figure>

              <div className='relative w-[130px] h-[50px]'>
                <input type="file" name='photo' id='customFile' accept='.jpg, .png' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
              </div>
            </div>

           <div className="mt-7">
              <button type='submit' className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-blue-600 flex items-center justify-center font-bold">Sign Up</button>
            </div>

            <p className="mt-5 text-textColor text-center">Already have an account ? <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link></p>
          </form>

        </div>


      </div>
    </div>
  </section>

}

export default Signup