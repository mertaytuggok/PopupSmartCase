import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import { Facebook } from '../../../Assets/Share/Facebook'
import { Pinteres } from '../../../Assets/Share/Pinteres'
import { Twitter } from '../../../Assets/Share/Twitter'

export const SharePage = () => {
    return (
        <div className=' relative   w-[480px] h-[430px]  grid justify-items-center rounded-md  '>

            <p className=' w-[229px] h-[36px] mt-[35px] text-[30px]  font-bold  '>
                Share this page
            </p>
            <p className=' w-[315px] h-[48px] text-[20px]  text-center font-normal  '>
                If you liked this page you can share it on your social media.
            </p>

            <div className='grid grid-rows-3 justify-items-center '>
                <button><Facebook /> </button>
                <button><Pinteres /> </button>
                <button><Twitter /> </button>
            </div>


            <div className=' absolute top-[23px] right-[23px]  '>
                <CgCloseO size={30} color="gray" />
            </div>
        </div>

    )
}
