import React from 'react'
import { Link } from 'react-router-dom'

const SidePanel = () => {
  return (
    <div className='flex flex-col border border-gray-300 rounded-xl h-full w-full px-x py-3 shadow-lg shadow-gray-300'>
        <div className='h-1/3 py-7 px-12'>
            <Link to='/schedule'><button className='bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-sm shadow-black hover:bg-blue-700'>View Schedule</button></Link>
        </div>
        <div className='w-full px-3 py-3 h-full'>
            <div className='h-full border min-h-full border-gray-400 px-3 py-3 rounded-xl'>
                Reports/Docs
            </div>
        </div>
    </div>
  )
}

export default SidePanel