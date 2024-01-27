import React, { useState } from 'react'

const Sidebar = ({handleChange}) => {
  const [selected, setSelected] = useState('Patient List');
  const handleComponentChange = (e) => {
    const newOption = e.target.innerText.replace(/ +/g, "");
    setSelected(e.target.innerText);
    handleChange(newOption);
  }
  const options = [
   
   'Overview',
   'Patient List',
   'Payment Info',
   'Settings'
  ]
  return (
    <div className="h-full md:w-1/5 px-3 py-4 overflow-y-auto bg-gray-50 rounded-xl border border-gray-300">
      <ul className="space-y-2 font-medium ">
         <li>
            <a  onClick={(e) => handleComponentChange(e)} className={`${selected === options[0] ? `bg-gray-300`: `bg-inherit`} cursor-pointer flex items-center p-3 mb-7 text-gray-900 rounded-lg hover:bg-gray-300 group`}>
               <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ms-3">Overview</span>
            </a>
         </li>
         
         <li>
            <a onClick={(e) => handleComponentChange(e)} className={`${selected === options[1] ? `bg-gray-300`: `bg-inherit`} cursor-pointer flex items-center p-3 mb-7 text-gray-900 rounded-lg hover:bg-gray-300 group`}>
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Patient List</span>
            </a>
         </li>
         <li className=''>
            <a onClick={(e) => handleComponentChange(e)} className={`${selected === options[2] ? `bg-gray-300`: `bg-inherit`} cursor-pointer flex items-center p-3 mb-7 text-gray-900 rounded-lg hover:bg-gray-300 group`}>
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                 <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Payment Info</span>
            </a>
         </li>
         <li>
            <a onClick={(e) => handleComponentChange(e)} className={`${selected === options[3] ? `bg-gray-300`: `bg-inherit`} cursor-pointer flex items-center p-3 mb-7 text-gray-900 rounded-lg hover:bg-gray-300 group`}>
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </a>
         </li>
      </ul>
   </div>
  )
}

export default Sidebar