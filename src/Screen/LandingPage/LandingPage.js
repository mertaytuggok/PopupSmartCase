import React from 'react'
import Header from '../../Components/Header/Header'
import MainModalCard from '../../Components/MainModalCard/MainModalCard'
import MainText from '../../Components/mainText/MainText'

const LandingPage = () => {
    return (
        <div className=' 
        w-[100%] 
     
        
        bg-gradient-to-t 
        from-[#E3F2F7] '>
            <div className='
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

        </div>
    )
}

export default LandingPage