import React from 'react'
import { Link } from 'react-router-dom'

const SidePanel = ({ id }) => {
  const role = localStorage.getItem('userType')
  return (
    <div className='flex flex-col border border-gray-300 rounded-xl h-full w-full px-x py-3 shadow-sm shadow-gray-300'>
      <div className='h-1/3 py-7 px-12 flex flex-col items-center'>
        <Link to={`/schedule/${id}`}><button className='bg-blue-500 text-white px-5 py-4 rounded-xl font-bold shadow-sm hover:bg-blue-700 flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>View Schedule</button></Link>

        {role === 'Relative'?
        <Link to={`/map/${id}`}><button className='bg-green-500 text-white mt-5 px-5 py-4 rounded-xl font-bold shadow-sm hover:bg-green-700 flex flex-row gap-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>Track Elder</button></Link>
        :
        ""
        }
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