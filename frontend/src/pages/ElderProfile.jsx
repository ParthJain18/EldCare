import React, { useEffect } from 'react';
import ElderDetails from '../components/ElderProfile/ElderDetails';
import Appointments from '../components/ElderProfile/Appointments';
import SidePanel from '../components/ElderProfile/SidePanel';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ElderProfile = () => {
  const { id } = useParams();
  console.log(id)
  const [patientDetail, setPatientDetail] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await axios.get(`http://localhost:5000/getPatient/${id}`);
          console.log(res.data.patient)
          setPatientDetail(res.data.patient)
      }
       catch (error) {
          console.error('Error fetching patients:', error);
      }
    };
  fetchData();;
  }, [])
  const [userType, setUserType] = React.useState(localStorage.getItem('userType'));
  return (
    <div className='container py-6'>
      
        {userType === 'Relative' ? 
        <Link to='/relativedash'>
        <button className='bg-blue-500 text-sm font-bold hover:bg-blue-700 text-white rounded-xl px-4 py-2 mb-4'>&lt; Back</button>
        </Link> :
        <Link to='/dashboard'>
        <button className='bg-blue-500 text-sm font-bold hover:bg-blue-700 text-white rounded-xl px-4 py-2 mb-4'>&lt; Back</button>
        </Link>}
        <h1 className='heading'>
          {userType === 'Relative' ? 'Elder Profile' : 'Patient Profile'}
        </h1>
        {userType === 'Relative' ? "" : 
        <h1 className='mt-2 px-2'>Patients &gt; {patientDetail.name}</h1>}
        
        <div className='w-full flex flex-row px-2 py-3 gap-4'>
            <div className='w-3/4 flex flex-col gap-4'>
                <ElderDetails name={patientDetail.name} age={66} phone={patientDetail.phoneNumber} email={patientDetail.email} gender={"Male"}/>
                <Appointments/>
            </div>
            <div>
                <SidePanel id={id}/>
            </div>
        </div>
    </div>
  )
}

export default ElderProfile