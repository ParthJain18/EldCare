import React, { useState } from 'react'
import PatientList from '../components/Dashboard/PatientList/PatientList'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import Overview from '../components/Dashboard/Overview/Overview'
import PaymentInfo from '../components/Dashboard/PaymentInfo/PaymentInfo'
import Settings from '../components/Dashboard/Settings/Settings'

const DashBoard = () => {
  const options = {
    Overview: <Overview />,
    PatientList: <PatientList />,
    PaymentInfo: <PaymentInfo />,
    Settings: <Settings />
  }
  const [Option, setOption] = useState('PatientList');
  const handleChange = (newOption) => {
    setOption(newOption)
  }
  return (
    <div className='container flex md:flex-row flex-col gap-2 py-5'>
      <Sidebar handleChange={handleChange}/>
   <div className='h-full md:w-4/5 px-3 py-4 overflow-y-auto bg-white border border-gray-300 rounded-xl'>
    {options[Option]}
   </div>
    </div>
  )
}

export default DashBoard