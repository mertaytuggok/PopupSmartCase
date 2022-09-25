import React from 'react'
import Header from '../../Components/Header/Header'
import MainModalCard from '../../Components/MainModalCard/MainModalCard'
import MainText from '../../Components/mainText/MainText'
import Appearance from '../../Components/ModalCardGenerator/Appearance'
import Content from '../../Components/ModalCardGenerator/Content'
import Footer from '../../Components/ModalCardGenerator/Footer'
import ModalCardGenerator from '../../Components/ModalCardGenerator/ModalCardGenerator'
import SettingsandCode from '../../Components/ModalCardGenerator/SettingsandCode'

const LandingPage = () => {
    return (
        <div className=' mt-[23px] w-[100%] '>
                <div className='bg-gradient-to-t from-[#E3F2F7]min-h-screenpt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <Header />
                    <MainText />
                </div>
            <div className='w-[100%] h-[66vh] pt-[23px] pl-[14.46%] pr-[14.46%] bg-[#666666]'>
                <div className='mt-[-30vh]   rounded-[40px]   absolute'>
                    <MainModalCard />
                </div>
            </div>
                <div className=' w-[100%]pt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <ModalCardGenerator/>
                </div>
                <div className='w-[100%] pt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <Appearance/>
                </div>
                <div className='w-[100%] pt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <Content/>
                </div>
                <div className='w-[100%] pt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <SettingsandCode/>
                </div>
                <div className='w-[100%] pt-[23px] pl-[14.46%] pr-[14.46%]'>
                    <Footer/>
                </div>


        </div>
    )
}

export default LandingPage
