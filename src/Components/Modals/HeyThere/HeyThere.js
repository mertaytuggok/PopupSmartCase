import React from 'react'
import { HeyThere } from '../../../Assets/HeyThere/HeyThere'
import { CgCloseO } from 'react-icons/cg'

export const HeyThereModal = () => {
    return (
        <div className=' relative   w-[480px] h-[471px]  grid justify-items-center rounded-md  '>
            <div className='mt-[50px]'> <HeyThere /> </div>
            <p className=' w-[300px] h-[58px] text-[48px] font-bold  '>
                Hey there🥳
            </p>
            <p className=' w-[306px] h-[48px] mt-[24px] text-[20px] font-normal  '>
                We’re launching our product and we would be happy to have you.
            </p>


            <button className=' bg-[#7D4AEA] mt-[33px] text-white font-medium w-[350px] h-[48px] text-[16px] border-2 rounded-lg '>
                Sign up
            </button>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}