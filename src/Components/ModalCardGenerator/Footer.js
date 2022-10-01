import React from 'react'
import { MdOutlineVerified, MdOutlineGppGood, MdCodeOff, MdGolfCourse } from 'react-icons/md';
import { BiRefresh, BiPlusCircle, BiMinusCircle } from 'react-icons/bi';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FaAws } from 'react-icons/fa';
import { NotePad } from '../../Assets/NotePad/NotePad';
import { Popupsmart } from '../../Assets/Popupsmart/Popupsmart';

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
const Footer = () => {

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#7D4AEA',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));
    return (

        <div className=' font-poppins grid justify-items-center  '>
            <div className=' mt-[90px]  '>


                <p className=' w-[754px] h-[48px] text-[36px] justify-center ml-[260px]  text-center font-semibold '>
                    Conversion & UX ready popups & modals
                </p>


                <div className='flex flex-row  mt-[50px]'>
                    <div className=' mr-[30px]  w-[378px] h-[267px] rounded-[12px] bg-[#F5F5F5] justify-center text-center flex flex-col  '>
                        <div className='ml-[173px]'>
                            <MdOutlineGppGood size={44} color="#7D4AEA" />
                        </div>
                        <p className=' w-[111px] h-[24px] text-[18px] font-semibold ml-[133px] mt-[23px] '>
                            Pixel Perfect
                        </p>
                        <p className=' w-[237px] h-[40px] text-[14px] text-center ml-[70px] mt-[10px] '>
                            Helps you calculate your email marketing roi to measure success.
                        </p>
                    </div>
                    <div className=' mr-[30px]   w-[378px] h-[267px] rounded-[12px] bg-[#F5F5F5] justify-center text-center flex flex-col '>
                        <div className='ml-[173px]'>
                            <BiRefresh size={44} color="#7D4AEA" />
                        </div>
                        <p className=' w-[167px] h-[24px] text-[18px] font-semibold ml-[105px] mt-[23px] '>
                            Conversion Ready
                        </p>
                        <p className=' w-[177px] h-[60px] text-[14px] text-center ml-[100px] mt-[10px] '>
                            Empowers your emails by generating afree code for a CTA in your subject line.
                        </p>
                    </div>
                    <div className='  w-[378px] h-[267px] rounded-[12px] bg-[#F5F5F5] justify-center text-center flex flex-col  '>
                        <div className='ml-[167px]'>
                            <MdOutlineVerified size={44} color="#7D4AEA" />
                        </div>
                        <p className=' w-[150px] h-[24px] text-[18px] font-semibold ml-[113px] mt-[23px] '>
                            Modern & Useful
                        </p>
                        <p className=' w-[203px] h-[60px] text-[14px] text-center ml-[87px] mt-[10px] '>
                            Enables you to estimate the total profit of your investment on a popup service.
                        </p>
                    </div>
                </div>


                <p className=' w-[714px] h-[48px] text-[36px] justify-center ml-[20%] mt-[120px]  text-center font-semibold '>
                    Frequently Asked Questions
                </p>


                <div className=' grid justify-items-center  '>
                    <div className=' mt-[50px] '>

                        <div className=' relative  w-[1194px] bg-white text-[#777777]  border-b-2  text-left space-x-[273px] flex flex-rows-2 gap-4  '>
                            <details class="open:bg-[#F5F5F5]  open:ring-[#F5F5F5] open: p-6 rounded-lg" open>
                                <summary class="text-sm leading-6 w-full text-[#000000] dark:text-[#000000] font-semibold select-none">
                                    How do I pay for the essentials or premium plan?
                                </summary>
                                <div class="mt-3 text-sm leading-6 text-[#000000] dark:text-[#000000;]">
                                    <p className='  h-[78px] w-full font-normal text-[16px]  text-black mt-[20px] mb-[30px]'>
                                        You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                        automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re
                                        in United States). We will renew your subscription automatically at the end of every billing cycle.
                                    </p>
                                </div>

                            </details>
                        </div>

                        <div className=' relative  w-[1194px] bg-white text-[#777777]  border-b-2  text-left space-x-[273px] flex flex-rows-2 gap-4  '>
                            <details class="open:bg-[#F5F5F5]  open:ring-[#F5F5F5] open: p-6 rounded-lg" open>
                                <summary class="text-sm leading-6 w-full text-[#000000] dark:text-[#000000] font-semibold select-none">
                                    Can I cancel my essentials or premium plan subscription at my time?
                                </summary>
                                <div class="mt-3 text-sm leading-6 text-[#000000] dark:text-[#000000;]">
                                    <p className='  h-[78px] w-full font-normal text-[16px]  text-black mt-[20px] mb-[30px]'>
                                        You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                        automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re
                                        in United States). We will renew your subscription automatically at the end of every billing cycle.
                                    </p>
                                </div>

                            </details>
                        </div>

                        <div className=' relative  w-[1194px] bg-white text-[#777777]  border-b-2  text-left space-x-[273px] flex flex-rows-2 gap-4  '>
                            <details class="open:bg-[#F5F5F5]  open:ring-[#F5F5F5] open: p-6 rounded-lg" open>
                                <summary class="text-sm leading-6 w-full text-[#000000] dark:text-[#000000] font-semibold select-none">
                                    How do I pay for the essentials or premium plan?
                                </summary>
                                <div class="mt-3 text-sm leading-6 text-[#000000] dark:text-[#000000;]">
                                    <p className='  h-[78px] w-full font-normal text-[16px]  text-black mt-[20px] mb-[30px]'>
                                        You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                        automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re
                                        in United States). We will renew your subscription automatically at the end of every billing cycle.
                                    </p>
                                </div>

                            </details>
                        </div>

                        <div className=' relative  w-[1194px] bg-white text-[#777777]  border-b-2  text-left space-x-[273px] flex flex-rows-2 gap-4  '>
                            <details class="open:bg-[#F5F5F5]  open:ring-[#F5F5F5] open: p-6 rounded-lg" open>
                                <summary class="text-sm leading-6 w-full text-[#000000] dark:text-[#000000] font-semibold select-none">
                                    We need to add new users to our team, how will that be billed?
                                </summary>
                                <div class="mt-3 text-sm leading-6 text-[#000000] dark:text-[#000000;]">
                                    <p className='  h-[78px] w-full font-normal text-[16px]  text-black mt-[20px] mb-[30px]'>
                                        You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                        automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re
                                        in United States). We will renew your subscription automatically at the end of every billing cycle.
                                    </p>
                                </div>

                            </details>
                        </div>

                        <div className=' relative  w-[1194px] bg-white text-[#777777]  border-b-2  text-left space-x-[273px] flex flex-rows-2 gap-4  '>
                            <details class="open:bg-[#F5F5F5]  open:ring-[#F5F5F5] open: p-6 rounded-lg" open>
                                <summary class="text-sm leading-6 w-full text-[#000000] dark:text-[#000000] font-semibold select-none">
                                    How do I pay for the essentials or premium plan?
                                </summary>
                                <div class="mt-3 text-sm leading-6 text-[#000000] dark:text-[#000000;]">
                                    <p className='  h-[78px] w-full font-normal text-[16px]  text-black mt-[20px] mb-[30px]'>
                                        You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                        automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re
                                        in United States). We will renew your subscription automatically at the end of every billing cycle.
                                    </p>
                                </div>

                            </details>
                        </div>

                        <div className=' relative  w-[1194px] bg-white text-[#777777]  border-b-2  text-left space-x-[273px] flex flex-rows-2 gap-4  '>
                            <details class="open:bg-[#F5F5F5]  open:ring-[#F5F5F5] open: p-6 rounded-lg" open>
                                <summary class="text-sm leading-6 w-full text-[#000000] dark:text-[#000000] font-semibold select-none">
                                    Can I cancel my essentials or premium plan subscription at my time?
                                </summary>
                                <div class="mt-3 text-sm leading-6 text-[#000000] dark:text-[#000000;]">
                                    <p className='  h-[78px] w-full font-normal text-[16px]  text-black mt-[20px] mb-[30px]'>
                                        You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                        automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re
                                        in United States). We will renew your subscription automatically at the end of every billing cycle.
                                    </p>
                                </div>

                            </details>
                        </div>




 <Stack direction="row" spacing={1} alignItems="center">

<AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />

</Stack>





                    </div>
                </div>


                <div className=' grid justify-items-center  '>
                    <p className=' w-[603px] h-[48px] text-[36px] justify-center  mt-[120px] text-center font-semibold '>
                        Build great popups without code
                    </p>
                </div>


                <div className=' grid justify-items-center  '>
                    <div className=' mt-[70px] flex flex-row ml-[50px]  '>
                        <div className=' w-[120px] h-[120px] rounded-full bg-[#7D4AEA] mr-[168px] '>
                            <div className=' justify-center text-center p-7'>
                                <MdGolfCourse size={60} color="white" />
                            </div>
                        </div>


                        <div className=' w-[120px] h-[120px] rounded-full bg-[#7D4AEA] mr-[168px]'>
                            <div className=' justify-center text-center p-7'>
                                <MdCodeOff size={60} color="white" />
                            </div>
                        </div>


                        <div className=' w-[120px] h-[120px] rounded-full bg-[#7D4AEA] mr-[168px]'>
                            <div className=' justify-center text-center p-7'>
                                <NotePad />
                            </div>
                        </div>


                        <div className=' w-[120px] h-[120px] rounded-full bg-[#7D4AEA] '>
                            <div className=' justify-center text-center p-7'>
                                <FaAws size={60} color="white" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className=' grid justify-items-center  '>
                    <div className=' mt-[30px] flex flex-row   ' >
                        <div className='flex flex-col'>
                            <p className=' w-[166px] h-[24px] font-semibold text-[18px] text-center ml-[20px] '>
                                Targeting Options
                            </p>
                            <p className=' w-[227px] h-[20px] font-normal text-[14px] text-center mt-[10px] '>
                                Target +26 trigger to your visitors
                            </p>
                        </div>
                        <div className='flex flex-col ml-[109px]'>
                            <p className=' w-[84px] h-[24px] font-semibold text-[18px] text-center ml-[25px] '>
                                No-Code
                            </p>
                            <p className=' w-[186px] h-[40px] font-normal text-[14px] text-center mt-[10px] '>
                                No code required while you’re creating a popup
                            </p>
                        </div>
                        <div className='flex flex-col ml-[90px]'>
                            <p className=' w-[166px] h-[24px] font-semibold text-[18px] text-center ml-[25px] '>
                                Targeting Options
                            </p>
                            <p className=' w-[213px] h-[40px] font-normal text-[14px] text-center mt-[10px] '>
                                Integrated with your marketing and CRM platforms
                            </p>
                        </div>
                        <div className='flex flex-col ml-[75px]'>
                            <p className=' w-[166px] h-[24px] font-semibold text-[18px] text-center ml-[25px] '>
                                Targeting Options
                            </p>
                            <p className=' w-[200px] h-[40px] font-normal text-[14px] text-center mt-[10px] '>
                                Don’t worry about speed and Amazon AWS resources
                            </p>
                        </div>
                    </div>
                </div>


                <div className=' mt-[80px]  grid justify-items-center '>
                    <Popupsmart />
                    <p className=' w-[185px] h-[14px] text-[12px] mt-[15px]  mb-[80px] '>
                        Powered by Popupsmart</p>
                </div>
            </div>
        </div>
    )
}

export default Footer