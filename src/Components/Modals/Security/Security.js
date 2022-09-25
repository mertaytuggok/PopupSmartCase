import React from 'react'
import { Securitysvg } from '../../../Assets/Security/Securitysvg'
import { CgCloseO } from 'react-icons/cg'

export const Security = () => {
    return (
        <div className=' relative   w-[480px] h-[446px]  grid justify-items-center rounded-md  '>
            <div className=' w-[90px] h-[90px] bg-[#7D4AEA] rounded-full mt-10 p-5 '> <Securitysvg /> </div>
            <p className=' w-[209px] h-[36px] text-[30px] font-bold mt-[29px] '>
                Security Code
            </p>
            <p className=' w-[278px] h-[24px] text-[20px] font-normal mt-[29px] '>
                This code expires in 24 hours
            </p>
            <input type="number" placeholder='Code' className=' w-[349px] h-[47px] border-2 rounded-md ' />
            <div className=' flex flex-row '>
                <button className=' w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md '>Cancel</button>
                <button className=' bg-[#7D4AEA] ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md '>Continue</button>
            </div>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}
