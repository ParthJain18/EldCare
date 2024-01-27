import React from 'react'

const ElderDetails = ({ name, age, phone, email, gender }) => {
  return (
    <div className='w-full border  rounded-xl flex flex-row h-auto '>
      <div className='w-1/3 px-3 py-3'>
        <img src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="" className='rounded-2xl' />
        <h1 className='text-2xl font-bold text-center pt-2'>{name}</h1>
      </div>
      <div className='w-2/3 py-3 flex flex-col px-5'>

        
        {/*  */}
        <div>
          <h1 className='flex flex-col gap-2'>
            <ul className="grid sm:grid-cols-2 gap-[30px] py-5 pt-4 md:p-2 ">
              <li className="p-4 rounded-xl bg-teal-50 mt-5 ">
                <span className="text-blue-500 text-[18px] leading-6 font-semibold">Gender</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>{gender}</p>
              </li>

              <li className="p-4 rounded-xl bg-teal-50 mt-5 ">
                <span className="text-blue-500 text-[18px] leading-6 font-semibold">Age</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>{age}</p>
              </li>

              <li className="p-4 rounded-xl bg-teal-50 mt-5 ">
                <span className="text-blue-500 text-[18px] leading-6 font-semibold">Phone</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>{phone}</p>
              </li>

              <li className="p-4 rounded-xl bg-teal-50 mt-5 ">
                <span className="text-blue-500 text-[18px] leading-6 font-semibold">Email Id</span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>{email}</p>
              </li>
            </ul>
          </h1>
        </div>
        {/*  */}
        
      </div>
    </div>
  )
}

export default ElderDetails