import React from 'react'
import PatientCard from './PatientCard'

const PatientList = () => {

  const patients = [{
    id: 1,
    name: 'meow',
    email: ''
  },
  {
    id: 2,
    name: 'meow',
    email: ''
  },
  {
    id: 3,
    name: 'meow',
    email: ''
  },
  {
    id: 4,
    name: 'meow',
    email: ''
  },
  {
    id: 5,
    name: 'meow',
    email: ''
  },
  ]
  return (
    <section className="">
  <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="heading">Your Patients</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fuga?</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {
            patients.map((patient) => {
             return <PatientCard key={patient.id}/>   
            })
        }
      </div>  
  </div>
</section>
  )
}

export default PatientList