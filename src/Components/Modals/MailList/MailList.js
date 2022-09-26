import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import { FaPercent } from 'react-icons/fa'
import { ModalList } from '../../../Assets/ModalList/ModalList'

export const MailList = () => {
    return (
        <div className=' relative   w-[480px] h-[446px]  grid justify-items-center rounded-md  '>
            <div     className=' mt-[40px]'> <ModalList/> </div>
            <p className=' w-[239px] h-[36px] text-[30px] font-bold  '>
            Join our mail list
            </p>
            <p className=' w-[323px] h-[24px] text-[20px] font-normal  '>
            Save up to 30% of your next order
            </p>
            
           
            <input type="email" placeholder='Enter your email' className=' w-[349px] h-[47px] border-2 rounded-md p-3 ' />
            <div className=' flex flex-row '>
                <button className=' w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md '>Later</button>
                <button className=' bg-[#7D4AEA] ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md '>Join Now</button>
            </div>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}