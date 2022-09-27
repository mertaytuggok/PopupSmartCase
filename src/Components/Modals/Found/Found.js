import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import { Robot } from '../../../Assets/Robot/Robot'

export const Found = () => {
    return (
        <div className=' relative   w-[480px] h-[508px]  grid justify-items-center rounded-md  '>
            <div className=' mt-[56.25px] '>
                <Robot />
            </div>
            <p className=' w-[79px] h-[36px] mt-[35px] text-[30px]  font-bold  '>
            Opps
            </p>
            <p className=' w-[145px] h-[48px] text-[20px] mt-[20px] text-center font-normal  '>
            Page not found
            </p>


            <button className='  text-dark font-medium mt-[31px] w-[349px] h-[47px] text-[16px] border-2 rounded-md '>
            Back to home
            </button>
            

            <div className=' absolute top-[23px] right-[23px]  '>
                <CgCloseO size={30} color="gray" />
            </div>
        </div>
    )
}
