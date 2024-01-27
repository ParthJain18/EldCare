import React, { useEffect } from 'react'
import axios from 'axios'
const PatientCard = ({id}) => {
  //   
  const [patientDetail, setPatientDetail] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await axios.get(`http://localhost:5000/getPatient/${id}`);
          setPatientDetail(res.data.patient)
      }
       catch (error) {
          console.error('Error fetching patients:', error);
      }
    };
  fetchData();;
  }, [])

  return (
    <a href={`/profile/${id}`} className="items-center bg-gray-50 hover:bg-white rounded-lg sm:flex border border-gray-300 shadow-2xl hover:shadow-lg h-3/4 shadow-blue-200 hover:shadow-blue-200">
            <div className='md:h-full w-1/2'>
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover h-full" src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="Avatar"/>
            </div>
            <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                      {patientDetail.name}
                  </h3>
                  <span className="text-gray-500">{patientDetail.email}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">Age: 66</p>
            </div>
    </a> 
  )
}

export default PatientCard