import React from 'react';
import ElderDetails from '../components/ElderProfile/ElderDetails';
import Appointments from '../components/ElderProfile/Appointments';
import SidePanel from '../components/ElderProfile/SidePanel';

const ElderProfile = () => {
  return (
    <div className='container py-6'>
        <a href='/dashboard' className='hover:underline'>&lt; back</a>
        <h1 className='heading'>Patient Profile</h1>
        <h1 className='mt-2 px-2'>Patients &gt; Rajendra Joshi</h1>
        <div className='w-full flex flex-row px-2 py-3 gap-4'>
            <div className='w-3/4 flex flex-col gap-4'>
                <ElderDetails/>
                <Appointments/>
            </div>
            <div>
                <SidePanel/>
            </div>
        </div>
    </div>
  )
}

export default ElderProfile