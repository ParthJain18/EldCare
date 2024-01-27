import React from 'react'

const Overview = () => {
  return (
    <div className=' flex flex-col px-2 py-1 gap-6'>
      <h1 className='heading px-3'>My Dashboard</h1>
      <div className='flex flex-row py-9'>
        <div className='w-3/4 px-3'>
          {/* <h1 className='text-4xl font-extrabold mb-3'>Dr Yogesh Kulkarni</h1> */}
          <ul className="p-4  rounded bg-[#fff9ea] pt-4 md:p-5 shadow-sm">
            <span className="text-yellowColor text-4xl leading-6 font-extrabold ">Dr Yogesh Kulkarni</span>
          </ul>

          <div>
            <h1 className='flex flex-col gap-2'>
            
              <ul className="grid sm:grid-cols-2 gap-[30px] py-5 pt-4 md:p-2 ">
                <li className="p-4 rounded-xl bg-teal-50 mt-5 shadow-md">
                  <span className="text-blue-500 text-[15px] leading-6 font-semibold">Years of Experience</span>
                  <p className='text-[16px] leading-6 font-medium text-textColor'>22 years</p>
                  <p className='text-[14px] leading-6 font-medium text-textColor'>Kokilaben Dhirubhai Ambani Hospital, Mumbai</p>
                </li>

                <li className="p-4 rounded bg-teal-50 mt-5 shadow-md">
                  <span className="text-blue-500 text-[15px] leading-6 font-semibold">Department</span>
                  <p className='text-[14px] leading-6 font-medium text-textColor'>Cancer/Surgical Oncology, Robotic Surgery, Gynaecology</p>
                  <p className='text-[14px] leading-6 font-medium text-textColor'>Obstetrics, Minimal Access Surgery</p>
                </li>

                <li className="p-4 rounded bg-teal-50 py-1 shadow-md">
                  <span className="text-blue-500 text-[15px] leading-6 font-semibold">Gender</span>
                  <p className='text-[14px] leading-6 font-medium text-textColor'></p>
                  <p className='text-[14px] leading-6 font-medium text-textColor'>Male</p>
                </li>

                <li className="p-4 rounded bg-teal-50 py-1 shadow-md">
                  <span className="text-blue-500 text-[15px] leading-6 font-semibold">Languages</span>
                  <p className='text-[14px] leading-6 font-medium text-textColor'>Hindi</p>
                  <p className='text-[14px] leading-6 font-medium text-textColor'>English, Marathi</p>
                </li>
              </ul>
              
              
              
              
            </h1>
          </div>
        </div>
        <div className='w-1/3'>
          <img src="https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1579767306.jpg" alt="" className='rounded-2xl' />
        </div>
      </div>





    </div>
  )
}

export default Overview