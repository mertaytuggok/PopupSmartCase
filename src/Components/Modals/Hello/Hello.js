import React from 'react'
import { CgCloseO } from 'react-icons/cg'

export const Hello = () => {
    return (
        <div className=' relative   w-[480px] h-[283px]  grid justify-items-center rounded-md bg-[#7D4AEA]  '>

            <p className=' w-[172px] h-[36px] text-[30px] mt-[59px] font-bold text-white  '>
                Hi, stranger
            </p>
            <p className=' w-[349px] h-[24px] text-[20px] font-normal text-white  '>
                Sign up now, and get a 30% discount
            </p>


            <div className=' flex flex-row '>
                <button className=' bg-[#7D4AEA] mr-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md '>
                    Log In
                </button>
                <button className=' bg-white w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md '>
                Sign up now
                </button>
            </div>
            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}