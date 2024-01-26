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
    setSelected(e.target.innerText);
  }
  return (
    <div className='w-full border border-gray-300 px-3 py-3 rounded-xl shadow-lg shadow-gray-300'>
      <div className='h-auto flex flex-row justify-between px-6 border-b border-gray-400 pb-2'>
        <button className={`${selected==='Upcoming Appointment'? `bg-gray-300`: `bg-inherit`}text-lg font-bold hover:bg-gray-300 px-3 py-2 rounded-xl`} onClick={(e) => handleChange(e)}>
          Upcoming Appointment
        </button>
        <button className={`${selected==='Past Appointment'? `bg-gray-300`: `bg-inherit`}text-lg font-bold hover:bg-gray-300 px-3 py-2 rounded-xl`} onClick={(e) => handleChange(e)}>
          Past Appointment
        </button>
        <button className={`${selected==='Schedule'? `bg-gray-300`: `bg-inherit`}text-lg font-bold hover:bg-gray-300 px-3 py-2 rounded-xl`} onClick={(e) => handleChange(e)}>
          Schedule
        </button>
      </div>
      <div className='py-6 px-3'>
        {choices[selected]}
      </div>
    </div>
  )
}

export default Appointments