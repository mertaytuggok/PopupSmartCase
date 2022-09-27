import React from 'react'
import { CgCloseO } from 'react-icons/cg'

export const MailandPhone = () => {
    return (
        <div className=' relative   w-[480px] h-[507px]  grid justify-items-center rounded-lg  '>
            <div className=' bg-[#7D4AEA] w-full h-[10px] rounded-t-lg' />
            <p className=' w-[339px] h-[72px] text-[30px] text-center  font-bold   '>
            Get straight to growing your business well
            </p>
            <p className=' w-[287px] h-[48px] text-[20px] text-center font-normal  '>
            There’s good news for parents who have child born.
            </p>


            <input type="email" placeholder='Enter your email address' className=' w-[349px] h-[47px] border-2 rounded-md p-3 ' />
            
            
            <div className=' flex flex-row '>
            <select className=' p-2 w-[98px] h-[47px] border-2 mr-[15px] rounded-md p-3 '>
               
                    <option>+1</option>
                    <option>+90</option>
                    <option>+1</option>
                    <option>+1</option>
                    <option>+1</option>
                
            </select>
            <input type="phone" placeholder='Enter your phone' className=' w-[236px] h-[47px] border-2 rounded-md p-3 ' />
            </div>

            <button className=' bg-[#7D4AEA] ml-[15px] text-white font-medium w-[168px] h-[48px] text-[16px] border-2 rounded-md '>Sign up</button>
            <div className=' flex flex-row space-x-20'>
            <button className='     font-normal w-[135px] h-[19px] text-[16px]  '>I have an account</button>
            <button className='   font-normal w-[135px] h-[19px] text-[16px]  '>Forgot Password</button>

            </div>
            <div className=' absolute top-[23px] right-[23px] '><CgCloseO size={30} color="gray" /></div>
        </div>
    )
}