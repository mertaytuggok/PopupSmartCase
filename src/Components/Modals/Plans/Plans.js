import React from 'react'
import { Securitysvg } from '../../../Assets/Security/Securitysvg'
import { CgCloseO } from 'react-icons/cg'

export const Plans = () => {
    return (
        <div className=' relative   w-[480px] h-[446px]  grid justify-items-center rounded-md  '>
            <p className=' w-[60px] h-[22px] text-[#7D4AEA] rounded-full mt-[49px] '> PLANS </p>
            <p className=' w-[295px] h-[36px] text-[30px] font-bold  mt-[14px] '>
                Choose best for you
            </p>
            <p className=' w-[366px] h-[24px] text-[20px] mt-[15px] font-normal  '>
                Only pay for the capacity that you use.
            </p>


            <div className=' grid justify-items-start mt-12'> 
                <div className=' flex flex-row justify-items-start    '>
                    <input type="radio" className=' w-[23px] h-[23px] accent-[#7D4AEA] ' />
                    <label className=' w-[61px] h-[22px] text-[18px] font-medium ml-[11px]  '>
                        Starter
                        </label>
                </div>
                <label className=' w-[257px] h-[17px] text-[#717791] text-[14px] ml-8 '>
                    1 free (then $15 per meember / month)
                </label>

                <div className=' flex flex-row justify-items-start    '>
                    <input type="radio" className=' w-[23px] h-[23px] checked:border-[6px]   accent-[#7D4AEA]' value="Pro" />
                    <label className=' w-[61px] h-[22px] text-[18px] font-medium ml-[11px] '>
                        Pro
                        </label>
                </div>
                <label className=' w-[156px] h-[17px] text-[#717791] text-[14px] ml-8  '>
                    $19 per member/month
                </label>


                <div className=' flex flex-row justify-items-start    '>
                    <input type="radio" className=' w-[23px] h-[23px]  accent-[#7D4AEA] ' />
                    <label className=' w-[61px] h-[22px] text-[18px] font-medium ml-[11px] '>
                        Business
                        </label>
                </div>
                <label className=' w-[158px] h-[17px] text-[#717791] text-[14px] ml-8 mb-10 ' >
                    $29 per member/month
                </label>
            </div>





            <div className=' flex flex-row '>
                <button className=' w-[168px] h-[48px] text-[16px] font-medium border-2 rounded-md '>Cancel</button>
                <button className=' bg-[#7D4AEA] ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md '>Continue</button>
            </div>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}
