import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import { Flag } from '../../../Assets/Flag/Flag'
import { Next } from '../../../Assets/Next/Next'

export const MissOut = () => {
    return (
        <div className=' relative   w-[480px] h-[360px]  grid justify-items-center rounded-md  '>
            <div className=' mt-[60px] '>
                <Flag />
            </div>
            <p className=' w-[210px] h-[36px] text-[30px] mt-[26.5px] font-bold  '>
            Don’t miss out
            </p>
            <p className=' w-[323px] h-[24px] text-[20px] mt-[20px] text-center font-normal  '>
            Allow notifications get free ebook.
            </p>


            <button className=' mt-[41.5px] mb-[50px]'>
                <Next/>
            </button>
            
            <div className=' absolute top-[23px] right-[23px]  '>
                <CgCloseO size={30} color="gray" />
            </div>
        </div>
    )
}
