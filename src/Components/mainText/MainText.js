import React from 'react'
import { TickIcon } from '../../Assets/TickSvg/TickIcon'

const MainText = () => {
    return (
        <div >
            <div className=' mt-[99px] w-[486px] h-[160px] font-Poppins text-[72px] decoration-black  font-semibold not-italic  text-black tracking-[-0.3] leading-[80px]'>
                Simple modal card creator</div>
            <div className='mt-[20px]  w-[1128px]  h-[88px]  font-Poppins  text-[32px]  font-normal  text-black  tracking-[-0.15]  leading-[44px]'>
                A utility-first CSS framework packed with classeslike flex, pt-4, text-center and
                rotate-90 that can becomposed to build any design, directly in your markup.
            </div>
            <button className='mt-[60px]    text-white    bg-[#7D4AEA]    w-[171px]    h-[60px]    justify-center    rounded-xl    font-medium    shadow-[0_5px_10px_2px_rgba(125, 74, 234, 0.27)]'>
                Try it out now
            </button>

            <div className=' flex  flex-row items-center mt-[43.73px]'>
                <div className='  flex       flex-row      items-center      '>
                    <TickIcon className='text-gray-500' />
                    <p className='    w-[130px]    h-[16px]    ml-[12px]    text-[13px]    font-normal    leading-[16px]    text-slate-500    '>
                        Free and paid plans
                        </p>
                </div>
                <div className='    flex     flex-row    items-center    ml-[27.7px]    '>
                    <TickIcon className='text-gray-500' />
                    <p className=' w-[130px] h-[16px] ml-[12px] text-[13px] font-normal leading-[16px] text-slate-500 '>Setup in minutes</p>
                </div>
                <div className='  flex   flex-row  items-center  ml-[27.7px]  '>
                    <TickIcon className='text-gray-500' />
                    <p className='  w-[157px]  h-[16px]  ml-[12px]  text-[13px]  font-normal  leading-[16px]  text-slate-500  '>No credit card required*</p>
                </div>
            </div>
        </div>
    )
}
export default MainText