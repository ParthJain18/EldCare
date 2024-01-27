import React from 'react'
import AppointmentCard from './AppointmentCard'

const UpcomingAppointment = () => {
  const appointment = [
    {
      id: 1,
      date: "2024-05-03",
      treatment: "surgery",
      status: "completed",
      time: 9,
    },
    {
      id: 2,
      date: "2024-05-03",
      treatment: "fracture",
      status: "pending",
      time: 9,
    },
    {
      id: 3,
      date: "2024-05-03",
      treatment: "dental",
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

export default UpcomingAppointment