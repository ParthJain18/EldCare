import React from 'react'

const PatientCard = () => {
  return (
    <a href='/profile' className="items-center bg-gray-50 rounded-lg shadow sm:flex border border-gray-300 hover:bg-gray-300">
            <div className='md:h-full'>
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover h-full" src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="Avatar"/>
            </div>
            <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                      Meow Meow
                  </h3>
                  <span className="text-gray-500">Lorem, ipsum dolor.</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
    </a> 
  )
}

export default PatientCard