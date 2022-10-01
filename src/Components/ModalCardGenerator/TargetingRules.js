import React from 'react'
import { BsLaptop } from 'react-icons/bs'
import { MdSmartphone } from 'react-icons/md'

export const TargetingRules = () => {
    return (
        <div className='font-poppins'>
            <div className=' mt-[90px] flex flex-row '>
                <div className='w-[36px] h-[36px] bg-[#EAEAEA] rounded-full'>
                    <p className='mt-[6px] font-semibold text-[16px] text-black text-center justify-center '>
                        4
                    </p>
                </div>
                <p className=' w-[156px] h-[36px] font-semibold text-[18px] leading-9 not-italic ml-[15px]' >
                    Targeting Rules
                </p>
            </div>


            <div className=' flex flex-row mt-[30px]'>

                <p className=' w-[112px] h-[18px] font-semibold text-[14px] text-black  leading-4  '>
                    Visitor Device
                </p>


            </div>

            <div className=' flex flex-row mt-[20px] '>
                <button className=' w-[179px] h-[48px] rounded-[12px] bg-[#F5F5F5] text-center justify-items-center ' >
                    <div className='flex flex-row text-center justify-items-center p-1'> <input type='checkbox' className=' w-[18px] h-[18px] mr-[10px] ml-[15px] accent-[#7D4AEA] ' />
                        <BsLaptop size={18} color='#7D4AEA' />
                        <p className=' ml-1 w-[57px] h-[18px] text-[18px] leading-4'>
                            Desktop
                        </p>
                    </div>
                </button>
                <button className=' w-[179px] h-[48px] rounded-[12px] bg-[#F5F5F5] text-center justify-items-center ml-5 ' >
                    <div className='flex flex-row text-center justify-items-center p-1'> <input type='checkbox' className=' w-[18px] h-[18px] mr-[10px] ml-[15px] accent-[#7D4AEA] ' />
                        <MdSmartphone size={18} color='#7D4AEA' />
                        <p className=' ml-1 w-[57px] h-[18px] text-[18px] leading-4'>
                            Mobile
                        </p>
                    </div>
                </button>
            </div>


            <div className=' flex flex-row mt-[30px]'>

                <p className=' w-[125px] h-[18px] font-semibold text-[14px] text-black  leading-4  '>
                    After X seconds
                </p>


            </div>

            <input type='name' className=' w-[378px] h-[36px] border-[#DDDDDD] border-2 rounded-md p-2 mt-[15px] ' />
            <div className=' flex flex-row mt-[30px]'>

                <p className=' w-[107px] h-[18px] font-semibold text-[14px] text-black  leading-4  '>
                    After % Scroll
                </p>


            </div>

            <input type='name' className=' w-[378px] h-[36px] border-[#DDDDDD] border-2 rounded-md p-2 mt-[15px] ' placeholder='Enter your traffic source domain' />

            <div className=' flex flex-row mt-[30px]'>

                <p className=' w-[146px] h-[18px] font-semibold text-[14px] text-black  leading-4  '>
                Browser Language
                </p>


            </div>

            <select className=' w-[378px] h-[36px]  border-[#DDDDDD] border-2 rounded-md pl-2 mt-[15px] '>
                <option>Engilish</option>
                <option>French</option>
                <option>German</option>
                <option>Türkçe</option>
            </select>

            
            <div className=' flex flex-row mt-[30px]'>

                <p className=' w-[154px] h-[18px] font-semibold text-[14px] text-black  leading-4  '>
                Exit Intent Targeting
                </p>


            </div>
        </div>
    )
}
