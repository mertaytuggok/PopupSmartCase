import React from 'react'
import { CgCloseO } from 'react-icons/cg'

export const FileWay = () => {
    return (
        <div className=' relative   w-[480px] h-[283px]  grid justify-items-center rounded-md  '>
            
            <p className=' w-[303px] h-[36px] text-[30px] mt-[50px] font-bold  '>
            The file is on it's way
            </p>
            <p className=' w-[290px] h-[48px] text-[20px] font-normal  '>
            You’ll get an notified when the receiver has opened the email.
            </p>
            
           
            <button className=' bg-[#7D4AEA] ml-[15px] text-white font-medium w-[350px] h-[48px] text-[16px] border-2 rounded-md '>Go to dashboard</button>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}