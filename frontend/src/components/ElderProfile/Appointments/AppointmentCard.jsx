import React from 'react'

const AppointmentCard = ({date, treatment, status, time}) => {
  return (
    <div className='flex flex-row justify-between rounded-xl bg-blue-100 py-2 w-full'>
        <div className='text-center w-1/4'>
            <h1 className=' text-center'>{date}</h1>
        </div>
        <div className='text-center w-1/4 ml-6'>
            <h1 className=' text-center'>{treatment}</h1>
        </div>
        <div className='text-center w-1/4 ml-8'>
            <h1 className=' text-center '>{status}</h1>
        </div>
        <div className='text-center w-1/4'>
            <h1 className=' text-center'>{time}</h1>
        </div>
       
    </div>
  )
}

export default AppointmentCard