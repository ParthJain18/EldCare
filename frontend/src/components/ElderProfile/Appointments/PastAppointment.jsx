import React from 'react'
import AppointmentCard from './AppointmentCard';

const PastAppointment = () => {
  const appointment = [
    {
      id: 1,
      date: "2024-05-03",
      treatment: "cancer",
      status: "completed",
      time: 9,
    },
  ]
  return (
    <div className='space-y-2 px-3 py-3 pt-7'>
      {
        appointment.map((item) => {
          return <AppointmentCard key={item.id} date={item.date} treatment={item.treatment} status={item.status} time={item.time}/>
        })
      }
    </div>
  )
}

export default PastAppointment