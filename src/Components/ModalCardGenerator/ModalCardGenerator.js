import React from 'react'
import TemplateSelect from './TemplateSelect'

const ModalCardGenerator = () => {
    return (
        <div className=' font-poppins bg-white mt-[90px]'>
            <div>
                <p className='  w-[499px]  h-[48px]  font-semibold text-[36px] text-black '>Modal Card Generator</p>
                <p className=' w-[489px] h-[72px] font-normal text-[16px] leading-6 mt-[15px] '>
                    Measure your return on email marketing efforts easier and
                    faster by using thebest online tools. Popupsmart is ready to
                    help you build an efficient email list!
                </p>
            </div>
            <div>
                <TemplateSelect />
            </div>

        </div>
    )
}

export default ModalCardGenerator