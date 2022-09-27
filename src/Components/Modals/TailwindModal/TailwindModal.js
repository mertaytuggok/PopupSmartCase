import React from 'react'
import { HeyThere } from '../../../Assets/HeyThere/HeyThere'
import { CgCloseO } from 'react-icons/cg'
import { TailwindSvg } from '../../../Assets/Tailwind/Tailwind'
import { Robot } from '../../../Assets/Robot/Robot'

export const TailwindModal = () => {
    return (
        <div className=' relative w-[480px] h-[402px] m-6  grid rounded-md  '>
            <div className='mt-[50px] w-[60px] ml-[40px ]  h-[60px] justify-items-start rounded-full bg-[#7D4AEA] flex flex-row '>
                <p className='ml-[14px] mt-[7px]' >
                    <TailwindSvg />
                </p>
                <p className=' w-[300px] h-[58px] ml-[25px] mt-[5px] text-[27px] text-[#7D4AEA] font-bold  '>
                    tailwind
                </p>
            </div>
            <div className='justify-items-start grid'>
                <p className=' w-[371px] h-[72px]   text-[30px] font-bold  '>
                    Learn, share and connect with our community.
                </p>
                <p className=' w-[309px] h-[48px] mt-[17px]   text-[20px] font-normal  '>
                    Explore our amazing products curated by our team just for you.
                </p>
                <div className='flex flew-row'>
                    <button className=' bg-[#7D4AEA] mt-[33px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-lg '>
                    Join the club
                    </button>
                    <button className='  mt-[33px] font-medium w-[168px] h-[48px] text-[16px]  '>
                    Maybe Later
                    </button>
                </div>
            </div>

            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}
