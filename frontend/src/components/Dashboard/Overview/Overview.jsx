import React from 'react'

const Overview = () => {
  return (
    <div className=' flex flex-col px-2 py-8 gap-6'>
      <h1 className='heading px-3'>My Dashboard</h1>
      <div className='flex flex-row py-9'>
        <div className='w-3/4 px-3'>
          <h1 className='text-4xl font-extrabold mb-3'>Dr Yogesh Kulkarni</h1>
          <h1 className='font-bold text-blue-500 text-md'>SURGICAL ONCOLOGY, HEAD - GYNECOLOGIC ONCOLOGY, ROBOTIC SURGEON</h1>
          <h1 className='font-bold text-gray-600 py-2 text-xl flex flex-row gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
            </svg>
            KOKILABEN DHIRUBHAI AMBANI HOSPITAL, MUMBAI</h1>
          <div>
          <h1 className='flex flex-col gap-2'>
          <h1 className='text-md font-bold'>DEPARTMENT: <span className='font-medium'>Cancer/Surgical Oncology, Robotic Surgery, Gynaecology & Obstetrics, Minimal Access Surgery</span></h1>
          <h1 className='text-md font-bold'>YEARS OF PRACTICE: <span className='text-blue-500 font-medium'>22 years</span></h1>
          <h1 className='text-md font-bold'>GENDER: <span className=' font-medium'>Male</span></h1>
          <h1 className='text-md font-bold'>LANGUAGES SPOKEN: <span className=' font-medium'>Hindi, English, Marathi</span> </h1>
          <h1 className='text-md font-bold'>NUMBER OF PATIENTS: <span className='text-blue-500 font-medium'>20</span></h1>
          </h1>
          </div>
        </div>
        <div className='w-1/3'>
          <img src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1579767306.jpg" alt="" className='rounded-2xl'/>
        </div>
      </div>




      <div className='w-full px-3'>
        <h1 className='text-2xl font-extrabold'>Upcoming Appointments</h1>
      </div>
    </div>
  )
}

export default Overview