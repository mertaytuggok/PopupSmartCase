import React from 'react'
import SecurityModal from '../../Assets/ModalPng/SecurityPng/SecurityPng.png'
import CheckMailModal from '../../Assets/ModalPng/CheckMailPng/CheckMailPng.png'
import DeleteModalPng from '../../Assets/ModalPng/DeletePng/DeletePng.png'
import FeedbackPng from '../../Assets/ModalPng/FeedbackPng/FeedbackPng.png'
import FilePng from '../../Assets/ModalPng/FilePng/FilePng.png'
import FoundPng from '../../Assets/ModalPng/FoundPng/FoundPng.png'
import HeyThere from '../../Assets/ModalPng/HeyTherePng/HeyTherePng.png'
import MailListPng from '../../Assets/ModalPng/MailListPng/MailListPng.png'
import MissOutPng from '../../Assets/ModalPng/MissOutPng/MissOutPng.png'
import PlansPng from '../../Assets/ModalPng/PlansPng/PlansPng.png'
import RemindersPng from '../../Assets/ModalPng/RemindersPng/RemindersPng.png'
import StrangerPng from '../../Assets/ModalPng/StrangerPng/StrangerPng.png'

const TemplateSelect = () => {
  return (
    <div>
      <div className=' mt-[90px] flex flex-row '>
        <div className='w-[36px] h-[36px] bg-[#EAEAEA] rounded-full'>
          <p className='mt-[6px] font-semibold text-[16px] text-black text-center justify-center '>
            1
          </p>
        </div>
        <p className=' w-[214px] h-[36px] font-semibold text-[18px] leading-9 not-italic ml-[15px]' >
          Choose your template
        </p>
      </div>



      <div className='mt-[30px] flex flex-row justify-center'>
        <button className=' relative hover:bg-violet-400 w-[276px] h-[200px] bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-4 left-12 '>
            <img src={SecurityModal} width={170} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-2  left-14 '>
            <img src={CheckMailModal} width={150} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-2  left-14 '>
            <img src={DeleteModalPng} width={150} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-12  left-8 '>
            <img src={FeedbackPng} width={200} />
          </div>
        </button>
      </div>



      <div className=' mt-[30px] flex flex-row justify-center'>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-10    left-8  '>
            <img src={FilePng} width={200} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-2  left-12 '>
            <img src={FoundPng} width={170} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-2  left-12 '>
            <img src={HeyThere} width={180} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-4  left-10'>
            <img src={MailListPng} width={180} />
          </div>
        </button>
      </div>



      <div className=' mt-[30px] flex flex-row justify-center'>
      <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-6  left-8'>
            <img src={MissOutPng} width={200} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-2  left-12'>
            <img src={PlansPng} width={160} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-2  left-10'>
            <img src={RemindersPng} width={180} />
          </div>
        </button>
        <button className='relative  hover:bg-violet-400 w-[276px] h-[200px]  bg-[#EAEAEA] border-4 rounded-xl mr-[30px]  '>
          <div className='absolute  top-8  left-8 '>
            <img src={StrangerPng} width={200} />
          </div>
        </button>
      </div>

  

      <div className=' mt-[30px]  flex flex-row  ' >
        <div className=' ml-16  bg-[#F5F5F5] rounded-xl  justify-center text-center '>
          {
            ['1', '2', '3'].map((item) => (
              <button className=' w-[40px] h-[40px]   hover:bg-white '>{item}</button>
            ))
          }
        </div>
      </div>
    </div>


  )
}

export default TemplateSelect