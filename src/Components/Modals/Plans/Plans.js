import React from 'react'
import { Securitysvg } from '../../../Assets/Security/Securitysvg'
import { CgCloseO } from 'react-icons/cg'

export const Plans = () => {
    return (
        <div className=' relative   w-[480px] h-[446px]  grid justify-items-center rounded-md  '>
            <p className=' w-[60px] h-[22px] text-[#7D4AEA] rounded-full mt-[49px] '> PLANS </p>
            <p className=' w-[295px] h-[36px] text-[30px] font-bold  '>
                Choose best for you
            </p>
            <p className=' w-[366px] h-[24px] text-[20px] font-normal  '>
                Only pay for the capacity that you use.
            </p>

            <div className=' flex flex-row justify-items-start    '>
                <div placeholder='Code' className=' w-[23px] h-[23px] border-2 rounded-full p-3 '/>
                    <p className=' w-[61px] h-[22px] text-[18px] font-medium ml-[11px] ' >Starter</p>
            </div>
            <p>1 free (then $15 per meember / month)</p>
            <div className=' flex flex-row '>
                <button className=' w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md '>Cancel</button>
                <button className=' bg-[#7D4AEA] ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md '>Continue</button>
            </div>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}
