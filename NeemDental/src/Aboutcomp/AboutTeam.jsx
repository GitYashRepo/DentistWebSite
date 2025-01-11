import React from 'react'
import SliderCompAbout from './SliderCompAbout'
import "./AboutTeam.css"

const AboutTeam = () => {
    return (
        <div className='AboutTeamMain w-[95%] h-[100%] p-4 m-auto flex flex-col mt-[20vh] mb-[10vh]'>
            <div className='AboutTeamOne max-w-[60%]'>
                <p className='text-[#767676]'>WHO ARE WE</p>
                <h1 className='text-6xl font-medium text-[#313131] pt-[20px]'>OUR TEAM</h1>
                <p className='text-[#767676] text-lg pt-[20px] pb-[20px]'>Meet our team of dental experts, committed to delivering top-quality care. Highly trained and friendly, our staff ensures a welcoming experience for every patient</p>
            </div>
            <div className='AboutTeamTwo w-[100%] h-[65vh] flex flex-row relative'>
                <div className='w-[100%] h-[100%] absolute right-[0px]'><SliderCompAbout /></div>
            </div>
        </div>
    )
}

export default AboutTeam
