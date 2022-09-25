import React from 'react'
import { Capmer } from '../../Assets/Camper/Capmer'

const MainModalCard = () => {
  return (
    <>
      <div className=' w-[800px] h-[468px] bg-white mt-[90px] rounded-[40px]'>
        <div className=' pt-[55px]'>


          <div className='ml-[147px]'>
            <Capmer />
          </div>

          <p className=' mt-[32px] ml-[67px] w-[246px] h-[54px] font-semibold text-[40px] leading-[54px] text-center '>
            Join the club
          </p>
          <p className='mt-[10px]  w-[267px]  h-[48px]  ml-[57px]  text-[18px]  text-center   font-normal  '>
            Subscribe and Get an Extra <br />
            <b className='underline'>25% Off
            </b>
            on your first purchase.
          </p>
          <input
            type='mail'
            placeholder='Email address'
            className=' w-[300px]  h-[48px]  mt-[30px]  ml-[50px]  p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] '
          />
          <div>
            <button className=' w-[300px] h-[48px] mt-[15px] ml-[50px] bg-black text-white rounded-[12px] text-[16px] font-semibold text-center'>
              Subscribe
            </button>
            <p className=' w-[250px] h-[36px] mt-[20px] ml-[50px] font-normal text-[12px] text-[#777777]'>
              By signing up, you agree to <b className='underline font-normal'>Privacy Policy</b> and <b className='underline font-normal'>Terms of Use.</b>
            </p>
          </div>
        </div>



      </div>
      <div>
        <div className='flex flex-row h-[225px]'>
          <p className='  flex flex-row w-[80px] h-[80px] font-semibold text-[72px] text-[#FFFFFF] mt-[120px] '>
            3x
          </p>
          <p className=' flex flex-row w-[80px] h-[80px] font-semibold text-[72px] text-[#FFFFFF] mt-[120px] ml-[160px] mr-[120px] '>
            120%
          </p>
          <p className=' flex flex-row w-[80px] h-[80px] font-semibold text-[72px] text-[#FFFFFF] mt-[120px] ml-[120px] mr-[120px] '>
            390%
          </p>
          <p className=' flex flex-row w-[344px] h-[132px] font-semibold text-[36px] text-[#FFFFFF] mt-[120px] ml-[195px]'>
            Popupsmart meets all your business needs.
          </p>
        </div>


        <div className='flex flex-row   '>

          <p className=' flex  flex-row w-[119px]  h-[44px] font-medium text-[16px] text-[#FFFFFF]
        '>Increase Conversion Rate
          </p>
          <p className='flex flex-row w-[87px] h-[44px] font-medium text-[16px] text-[#FFFFFF] ml-[135px] mr-[200px]  '>
            Email Subscribers
          </p>
          <p className=' flex flex-row w-[115px] h-[44px] font-medium text-[16px] text-[#FFFFFF] ml-[25px]'>
            More Customer Engagement
          </p>

        </div>
      </div>
    </>

  )
}

export default MainModalCard