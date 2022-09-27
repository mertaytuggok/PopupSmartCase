import React from 'react'
import { CgCloseO } from 'react-icons/cg'

export const Feedback = () => {
    return (
        <div className=' relative   w-[480px] h-[226px]  grid justify-items-center rounded-md '>

            <p className=' w-[214px] h-[36px] text-[30px] mt-[59px] font-bold text-dark  '>
            Let’s feedback
            </p>

            <div className=' flex flex-row '>
                
               <button className=' w-[60px] h-[60px]  rounded-full border-2 text-center items-center '>
                <p className='  text-[30px]  '>😶</p>
                </button>
                
               <button className=' w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center '>
                <p className='  text-[30px] '>☹️</p>
                </button>
            <button className=' w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center '>
                <p className='  text-[30px] '>😊</p>
                </button>
            <button className=' w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center '>
                <p className='  text-[30px] '>🤗</p>
                </button>
               <button className=' w-[60px] h-[60px] ml-[15.5px] rounded-full border-2 text-center items-center '>
                <p className='  text-[30px] '>😄</p>
                </button>
               
               
            </div>
            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}
