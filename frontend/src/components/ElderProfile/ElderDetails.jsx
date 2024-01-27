import React from 'react'

const ElderDetails = ({name, age, phone, email, gender}) => {
  return (
    <div className='w-full border  rounded-xl flex flex-row h-auto '>
      <div className='w-1/3 px-3 py-3'>
        <img src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="" className='rounded-2xl'/>
        <h1 className='text-2xl font-bold text-center pt-2'>{name}</h1>
      </div>
      <div className='w-2/3 py-3 flex flex-col px-5'>
        <div className='grid grid-cols-2 gap-5'>
          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Gender</h1>
            <p>{gender}</p>
          </div>

          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Age</h1>
            <p>{age}</p>
          </div>

          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Phone</h1>
            <a href={`tel:+91 ${phone}`}>{phone}</a>
          </div>

          <div className='px-7 py-4 border-b border-gray-400'>
            <h1 className='font-bold mb-2'>Email</h1>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElderDetails