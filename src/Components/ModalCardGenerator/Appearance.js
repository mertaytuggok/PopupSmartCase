import React from 'react'
import Uploadsvg from '../../Assets/UploadSvg/Uploadsvg'
import { BiCloudUpload } from 'react-icons/bi';

const Appearance = () => {
  return (
    <div  className='relative '>
      <div  >
        <div className=' mt-[90px] flex flex-row '>
          <div className='w-[36px] h-[36px] bg-[#EAEAEA] rounded-full'>
            <p className='mt-[6px] font-semibold text-[16px] text-black text-center justify-center '>
              2
            </p>
          </div>
          <p className='font-normal    w-[264px] h-[36px] text-[18px] leading-9 not-italic ml-[15px]' >
            <b>Appearance</b> (Size, colors, logo)
          </p>
        </div>


        <p className=' w-[28px] h-[18px] font-normal text-[14px] text-black mt-[30px]  '>
          Size
        </p>


        <div className=' mt-[15px]  flex flex-row  ' >
          <div className=' w-[257px] h-[48px] bg-[#F5F5F5] rounded-xl space-x-8 justify-center text-center '>
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
          </div>
        </div>

        <p className=' w-[28px] h-[18px] font-normal text-[14px] text-black mt-[30px]  '>
          Position
        </p>

        <div className=' h-[55px]  w-[82px] mt-[15px] '>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] rounded-tl-md '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px]  bg-[#DDDDDD] rounded-tr-md'></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px]  bg-[#DDDDDD]  '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] rounded-bl-md '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px] mr-[5px] bg-[#DDDDDD] '></button>
          <button className='  hover:bg-[#7D4AEA] w-[24px] h-[15px]  bg-[#DDDDDD] rounded-br-md '></button>
        </div>

        <p className=' w-[28px] h-[18px] font-normal text-[14px] text-black mt-[30px]  '>
          Colors
        </p>

        <div className=' mt-[15px]   flex flex-row  ' >
          <div className='  w-[42px] h-[42px] rounded-md mr-[10px]  border-[#0000004D] border-2 bg-black ' />
          <div className='  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-2 bg-[#F37C34] ' />
          <div className='  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-2 bg-[#777777] ' />
          <div className='  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-2 bg-[#DDDDDD] ' />
          <div className='  w-[42px] h-[42px] rounded-md mr-[10px] border-[#0000004D] border-2 bg-white ' />
        </div>

        <p className=' w-[85px] h-[18px] font-normal text-[14px] text-black mt-[30px]  '>
          Upload Logo
        </p>

        <div className=' mt-[15px] w-[378px] h-[178px] border-dashed border-2 rounded-lg border-[#DDDDDD] '>
          <div className=' ml-[149px] mr-[149px] mt-[30px] w-[80px] h-[80px] bg-[#7D4AEA] opacity-10 ' />
          <button className=' relative  left-[175.5px] bottom-[54.5px]  '>
            <Uploadsvg />
          </button>

          <p className=' relative left-[72px] bottom-[20px] flex flex-row font-normal text-[14px] text-black  w-[230px] h-[18px] font-normal  '>
            <BiCloudUpload size={25} />
            Drop your image here or
            <button className='ml-[2px] flex flex-row text-[#7D4AEA] font-semibold underline decoration-[#7D4AEA]' >
              upload
            </button>
          </p>

        </div>
      </div>



      <div className=' absolute right-0 top-0  shadow-xl w-[740px] h-[405px] bg-white  rounded-[30px]'>
       


          <div className=' mt-[60px] ml-[135px]'>
            <p className=' w-[109px] h-[36px] font-semibold text-3xl '>
              Sign up
            </p>
          </div>
          <p className='mt-[10px]  w-[159px]  h-[18px]  ml-[111px]  text-base  text-center   font-normal  '>
            Join new adventure
          </p>
          <div className='grid grid-cols-1 ' >
            <input
              type='name'
              placeholder='Enter full name '
              className=' w-[300px]  h-[44px]  mt-[30px]  ml-[50px]  p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] '
            />
            <input
              type='mail'
              placeholder='Enter your email '
              className=' w-[300px]  h-[44px]  mt-[15px]  ml-[50px]  p-4  rounded-[12px]  border-2  border-gray  bg-[#FFFFFF] '
            />
          </div>
          <div>
            <button className=' w-[300px] h-[48px] mt-[15px] ml-[50px] bg-[#F37C34] text-white rounded-[12px] text-[16px] font-semibold text-center'>
              Sign Up
            </button>
            <p className=' w-[250px] h-[36px] mt-[15px] ml-[50px] font-normal text-[12px] text-[#777777]'>
              By signing up, you agree to <b className='underline font-normal'>Privacy Policy</b>
            </p>
          </div>
        </div>
      </div>

  )
}
export default Appearance