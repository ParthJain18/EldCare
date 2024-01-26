import React from 'react'


const DoctorAbout = () => {
  return <div>
    <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Kohinoor Hospital</span>
            </h3>
            <p className="text__para">Kohinoor Hospitals Mumbai is the only LEED certified platinum rated hospital in Mumbai, having been awared with 54 credit points. Kohinoor Hospital Mumbai is about 8.3 km from the Chhatrapati Shivaji International Airport..</p>
            <p className="text__para">Kohinoor Hospital is a 153 bedded Multi specialty hospital with Tertiary care of International standards.It is a distinguished practice and the most trusted provider of health care services with a one of a kind distinction of being AsiaÂ’s 1st,and the worldÂ’s 2nd LEED Platinum certified environmentally friendly healthcare facility was inaugurated in December 2009.Multi-specialty healthcare facilities are in the recent times are earning appreciation in Mumbai for the state-of-the-art facilities and advanced medical technology.This hospital has over 200 Medical Consultants and a staff of over 350 professionals that work round the clock.This hospital has a team of highly qualified consultants/physicians supported by skilled and highly experienced nurses,paramedical staff and a team of administrators.

</p>
    </div>

    

    <div className="mt-12">
    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Contact</h3>
    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
            
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">+917400115591</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Mr. Shekhar</p>
            <p className='text-[14px] leading-6 font-medium text-textColor'>Hospital Staff</p>


        </li>

        <li className="p-4 rounded bg-[#fff9ea]">
            
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">+918255745851</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Mr. Patil</p>
            <p className='text-[14px] leading-6 font-medium text-textColor'>Hospital Support</p>


        </li>
    </ul>

    </div>

  </div>
  
}

export default DoctorAbout