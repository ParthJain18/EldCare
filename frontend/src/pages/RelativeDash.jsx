import React, { useState } from 'react'
import Sidebar from '../components/RelativeDash/Sidebar/Sidebar'
import EldersList from '../components/RelativeDash/EldersList/EldersList';
import Paymentinfo from '../components/RelativeDash/PaymentInfo/Paymentinfo';
import Settings from '../components/RelativeDash/Settings/Settings';

const RelativeDash = () => {

    const options = {
        EldersList: <EldersList/>,
        PaymentInfo: <Paymentinfo/>,
        Settings: <Settings />
      }
      const [Option, setOption] = useState('EldersList');
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

export default RelativeDash