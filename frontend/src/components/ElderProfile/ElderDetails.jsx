import React from 'react'

const ElderDetails = () => {
  return (
    <div className='w-full border  rounded-xl flex flex-row h-auto '>
      <div className='w-1/3 px-3 py-3'>
        <img src="https://www.aljazeera.com/wp-content/uploads/2024/01/Image-1-1705003176.jpg?resize=770%2C513&quality=80" alt="" className='rounded-2xl'/>
        <h1 className='text-2xl font-bold text-center pt-2'>Rajendra Joshi</h1>
      </div>
      <div className='w-2/3 py-3 flex flex-col px-5'>
        <div className='grid grid-cols-2 gap-5'>
          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Gender</h1>
            <p>Male</p>
          </div>

          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Age</h1>
            <p>75</p>
          </div>

          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Phone</h1>
            <a href="tel:+91">123456789</a>
          </div>

          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Email</h1>
            <a href="mailto:rajendrajoshi@gmail.com">rajendrajoshi@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElderDetails