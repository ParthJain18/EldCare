import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import PatientCard from '../../Dashboard/PatientList/PatientCard';

const EldersList = () => {
  const [patients, setPatients] = React.useState([]);
  // const docId = localStorage.getItem('userId');
  useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await axios.get('http://localhost:5000/getElders');
          console.log(res);
          if (res.data.relatives == null) {
              setPatients([]);
          } else {
              // Convert object to array
              const patientsArray = Object.keys(res.data.relatives).map(key => ({
                  id: key,
                  data: res.data.relatives[key]
              }));
              console.log(patientsArray)
              setPatients(patientsArray);
          }
      } catch (error) {
          console.error('Error fetching patients:', error);
      }
  };
  fetchData();
  }, [])
    
  return (
    <section className="">
  <div className="px-4 mx-auto max-w-screen-xl lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="heading">Your Elders</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl ">Your Elders Would Appear Below</p>
      </div> 
      <div className={`${patients.length!=0 ? `grid md:grid-cols-2` : `flex` } gap-8 mb-6 lg:mb-16 `}>
        {patients.length == 0 ? 
            <div className="flex justify-center items-center w-full">
            <h1 className="text-center font-extrabold text-gray-600 text-4xl">You Haven't Added Elders Yet</h1>
            </div>:
            patients.map((patient) => {
             return <PatientCard key={patient} id={patient.data}/>   
            })
        }
      </div>  
      <div className='w-full flex justify-end'>
      <Link to='/addelder'>
      <button className='bg-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-sm shadow-black hover:bg-blue-700'>+ Add Elder</button>
      </Link>
      </div>
  </div>
</section>
  )
}
export default EldersList