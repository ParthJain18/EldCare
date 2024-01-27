import React, { useState } from 'react'
import UpcomingAppointment from './Appointments/UpcomingAppointment';
import PastAppointment from './Appointments/PastAppointment';
import Schedule from './Appointments/Schedule';

const Appointments = () => {
  const [selected, setSelected] = useState("Upcoming Appointment");
  const choices = {
    'Upcoming Appointment': <UpcomingAppointment/>, 
    'Past Appointment': <PastAppointment/>,
    'Schedule': <Schedule/>
  }
  const handleChange = (e) =>{
    console.log(selected === 'Upcoming Appointment')
    setSelected(e.target.innerText);
  }
  return (
    <div className='w-full border border-gray-200 px-3 py-3 rounded-xl shadow-sm shadow-gray-300'>
      <div className='h-auto flex flex-row justify-between px-40 border-b border-gray-400 pb-2'>
        <button className={`${selected==='Upcoming Appointment'? `bg-gray-300`: `bg-inherit`} text-lg font-bold hover:bg-gray-300 px-4 py-2 rounded-xl`} onClick={(e) => handleChange(e)}>
          Upcoming Appointment
        </button>
        <button className={`${selected==='Past Appointment'? `bg-gray-300`: `bg-inherit`} text-lg font-bold hover:bg-gray-300 px-3 py-2 rounded-xl`} onClick={(e) => handleChange(e)}>
          Past Appointment
        </button>
        
      </div>
      <div className='py-6 px-3 flex flex-col'>
        <div className='flex flex-row font-bold text-md justify-between px-24'>
          <h1>Date</h1>
          <div className='border-r border-gray-400'></div>
          <h1>Treatment</h1>
          <div className='border-r border-gray-400'></div>
          <h1>Status</h1>
          <div className='border-r border-gray-400'></div>
          <h1>Time</h1>
        </div>
        {choices[selected]}
      </div>
    </div>
  )
}

export default Appointments