import React from 'react'
import Header from '../../Components/Header/Header'
import MainModalCard from '../../Components/MainModalCard/MainModalCard'
import MainText from '../../Components/mainText/MainText'
import Appearance from '../../Components/ModalCardGenerator/Appearance'
import ModalCardGenerator from '../../Components/ModalCardGenerator/ModalCardGenerator'

const LandingPage = () => {
    return (
        <div className=' 
            w-[100%] 
             '>
                <div className='
                    bg-gradient-to-t 
                    from-[#E3F2F7]
                    min-h-screen
                    pt-[23px] 
                    pl-[14.46%] 
                    pr-[14.46%]'>
                    <Header />
                    <MainText />
                </div>
            <div className='    
                    w-[100%] 
                    h-[66vh]
                    pt-[23px] 
                    pl-[14.46%] 
                    pr-[14.46%] 
                    bg-[#666666]'>
                <div className='
                    mt-[-30vh]
                    rounded-[40px]
                    absolute'>
                    <MainModalCard />
                </div>
            </div>
                <div className=' 
                    w-[100%]
                    pt-[23px] 
                    pl-[14.46%] 
                    pr-[14.46%]
                    '>
                    <ModalCardGenerator/>
                </div>
                <div className='w-[100%] pt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <Appearance/>
                </div>

        </div>
    )
}

export default LandingPage
