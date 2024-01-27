import React, { useEffect } from 'react'
import PatientCard from './PatientCard'
import axios from 'axios'
import { Link } from 'react-router-dom';

const PatientList = () => {

  const [patients, setPatients] = React.useState([]);
  const docId = localStorage.getItem('userId');
  useEffect(() => {
    const fetchData = async() => {
    const res = await axios.get(`http://localhost:5000/getPatients/${docId}`)
    if(res.data.patients == null) return setPatients([]);
    setPatients(res.data.patients);
    } 
    fetchData();
  }, [])
  return (
    <section className="">
  <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="heading">Your Patients</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">Your Patients Would Appear Below</p>
      </div> 
      <div className={`${patients.length!=0 ? `grid md:grid-cols-2` : `flex` } gap-8 mb-6 lg:mb-16 `}>
        {patients.length == 0 ? 
            <div className="flex justify-center items-center w-full">
            <h1 className="text-center font-extrabold text-gray-600 text-4xl">You Have No Patients Currently</h1>
            </div>:
            patients.map((patient) => {
             return <PatientCard key={patient.id}/>   
            })
        }
      </div>  
      <div className='w-full flex justify-end'>
      <Link to='/addpatient'>
      <button className='bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-sm shadow-black hover:bg-blue-700'>+ Add Patients</button>
      </Link>
      </div>
  </div>
</section>
  )
}

export default PatientList