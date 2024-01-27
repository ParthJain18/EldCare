import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddPatient = () => {
  
  const [patient, setPatient] = React.useState('');
  
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/addPatient', {
        patientEmail : patient
      })
      console.log(response)
      navigate('/dashboard')
      location.reload(); 
    }catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='container mt-5'>
    <Link to='/dashboard'>
        <button className='bg-blue-500 text-sm font-bold hover:bg-blue-700 text-white rounded-xl px-4 py-2 mb-4'>&lt; Back</button>
    </Link>
    <form className='mb-5' onSubmit={handleSubmit}>   
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="email" id="default-search" class="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Patient By Email..." required onChange={(e) => setPatient(e.target.value)}/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Add</button>
      </div>
    </form>
    </div>
  )
}

export default AddPatient