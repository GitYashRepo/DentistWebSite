import React from 'react'
import SliderComp from '../Componants/SliderComp'
import Texthover from '../Componants/Texthover'
import { Link } from 'react-router-dom'
import "./OurTeam.css"
import Appbutton from '../Componants/Appbutton'

const OurTeam = () => {
    return (
        <div className='OurTeamMain w-[95%] p-4 m-auto flex flex-col mt-[20vh]'>
            <div className='OurTeamTop max-w-[60%]'>
                <p className='text-[#767676]'>WHO ARE WE</p>
                <h1 className='text-6xl font-medium text-[#313131] pt-[20px]'>OUR TEAM</h1>
                <p className='text-[#767676] text-lg pt-[20px] pb-[20px]'>Meet our team of dental experts, committed to delivering top-quality care. Highly trained and friendly, our staff ensures a welcoming experience for every patient</p>
            </div>
            <div className='OurTeamBottom w-[100%] h-[60vh] flex flex-row relative'>
                <div className='OurTeamBottomOne w-[29%] mr-[20px]'>
                    <div className='w-[100%] h-[100%] p-6 rounded-lg bg-[#f8f5f0] mr-[20px] flex flex-col justify-between'>
                        <div>
                            <p className='text-[#222222] pt-[20px]'>MEET US</p>
                            <h1 className='text-3xl font-medium text-[#222222] pt-[20px]'>We are a team of experts</h1>
                            <p className='text-lg font-thin text-[#222222] pt-[20px] mb-[20px]'>Our clinic stands at the forefront of dental innovation and patient care. We are equipped with the latest technology to provide optimal results.</p>
                            <Link to="/about">
                                <Appbutton applbtnname="About Us" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='OurTeamBottomTwo w-[70%] h-[100%] absolute right-[0px]'>
                    <SliderComp />
                </div>
            </div>
        </div>
    )
}

export default OurTeam
