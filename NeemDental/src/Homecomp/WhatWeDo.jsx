import React from 'react'
import whatwedoimg from "../assets/HomeImages/iiiiiimmmmmmmmgggggggg.jpg";
import Texthover from '../Componants/Texthover';
import { Link } from 'react-router-dom';
import "./WhatWeDo.css"

const WhatWeDo = () => {
    return (
        <div className='WhatWeDoMain w-[90%] h-[100vh] m-auto overflow-hidden'>
            <div className='WhatWeDoInnerMain w-[100%] h-[100%] flex flex-col'>
                <div className='WhatWeDoTop w-[100%] h-[100%] flex flex-row mb-[10px]'>
                    <div className='WhatWeDoLeft w-[100%] h-[100%] mr-[20px]'>
                        <div className='WhatWeDoLeftHeadingBox w-[100%] h-[100%] flex p-6 justify-center flex-col gap-[10px]'>
                            <p className='text-[#767676]'>OUR OFFERS</p>
                            <h1 className='text-6xl font-medium text-[#313131]'>WHAT WE DO</h1>
                            <p className='text-[#767676]'>Our team provides personalized care. From cleanings to advanced cosmetic procedures. Contact us!</p>
                        </div>
                    </div>
                    <div className='WhatWeDoRight w-[100%] h-[100%] flex flex-row'>
                        <div className='w-[50%] !h-[100%] p-6 bg-[#f8f5f0] mr-[20px] flex flex-col justify-between'>
                            <div className='text-4xl text-[#b6b7bb]'>1</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#313131]'>Root Canal Treatment (RCt)</h1>
                                <p className='text-[#767676] pt-[20px]'>Precision dental procedure restoring teeth, relieving pain, ensuring oral health.
                                </p>
                            </div>
                        </div>
                        <div className='w-[50%] !h-[100%] p-6 bg-[#a48265] mr-[20px] flex flex-col justify-between'>
                            <div className='text-4xl text-[#f9fcfd]'>2</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#f9fcfd]'>Cosmetic Dentistry</h1>
                                <p className='text-[#f9fcfd] pt-[20px]'>Smile makeovers, teeth whitening, veneers, and bonding to help you achieve the confident smile you’ve always wanted.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='WhatWeDoBottom w-[100%] h-[50%] flex flex-row mt-[10px]'>
                    <div className='WhatWeDoBLeft w-[100%] h-[100%] flex flex-row'>
                        <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] mr-[20px] flex flex-col justify-between'>
                            <div className='text-4xl text-[#b6b7bb]'>3</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#313131]'>Restorative Dentistry</h1>
                                <p className='text-[#767676] pt-[20px]'>Solutions like dental implants, crowns, bridges, and dentures to restore the function and appearance of your teeth.</p>
                            </div>
                        </div>
                        <div className='w-[50%] h-[100%] p-6 bg-[#a48265] flex flex-col justify-between'>
                            <div className='text-4xl text-[#f9fcfd]'>4</div>
                            <div>
                                <h1 className='text-3xl font-medium text-[#f9fcfd]'>Preventive Care</h1>
                                <p className='text-[#f9fcfd] pt-[20px]'>Routine check-ups, dental cleanings, and oral health education to prevent future dental problems.</p>
                            </div>
                        </div>
                    </div>
                    <div className='WhatWeDoBRight w-[100%] h-[100%] overflow-hidden ml-[20px] relative'>
                        <img data-scroll data-scroll-speed="-.05" className='z-0 relative width-[100%] height-[100%]' src={whatwedoimg} alt="" />
                        <Link to="/services"><div className="w-full h-[20%] absolute bg-gray-200 bottom-0 flex justify-center items-center">
                            <Texthover textname="View Services" />
                        </div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
