import React from 'react'
import Slider from "react-slick";
import "./WhyUsSlider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuPhoneCall } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import img1 from "../assets/BefAft/rctslide2.png"
// import img2 from "../assets/Gallery/img36.jpg"
import img2 from "../assets/finalpic/img5.jpg"
import img3 from "../assets/Gallery/img12.jpg"
// import img4 from "../assets/Gallery/img1.jpg"
import img4 from "../assets/finalpic/img1.jpg"

const WhyUsSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className='slider-container'>
            <div className='non-sl'>
                <h1 className='text-xl text-[#d8a958]'>NEEM DENTAL</h1>
                <h1 className='text-5xl text-[#fff] pt-4'>Why Choose Us?</h1>
                <p className='text-[#bdbdbd] pt-4'>At Neem Dental, patients can look forward to an atmosphere that’s cozy, casual, and fun !</p>
                <div className="timingTwowhyus h-[100px] flex flex-row mt-8">
                    <div className=""><span className="w-[100px] text-5xl text-[#aa8453] pr-2.5"><LuPhoneCall /></span></div>
                    <div className="pl-4">
                        <div><p className='text-[#bdbdbd]'>Timing : Everyday - 9:30AM to 8PM</p></div>
                        <div><p className='text-[#bdbdbd] pt-2'>+91 88827 15717</p></div>
                    </div>
                </div>
            </div>
            <div className='sl'>
                <Slider {...settings} className="sliderwhyus">
                    <div className='sl-div'>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>Specialize in RCT & Cosmetic Dentistry</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>We specialize in cosmetic dentistry to help you achieve the smile of your dreams.</p>
                                </ul>
                            </div>
                        </div>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img3} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>Ensure Your Comfort</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>At our dental practice, we make it a priority to ensure that you are comfortable throughout your visit.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sl-div'>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img2} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>No Waiting Time</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>We value your time and strive to provide a prompt and efficient service with no waiting time.</p>
                                </ul>
                            </div>
                        </div>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img4} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>Clean & Hygienic</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>Our dental practice is committed to maintaining a clean and hygienic environment to ensure your safety and well-being during your visit.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider>





                <Slider {...settings} className="sliderwhyusmob">
                    <div className='sl-div'>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>Specialize in RCT & Cosmetic Dentistry</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>We specialize in cosmetic dentistry to help you achieve the smile of your dreams.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sl-div'>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img3} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>Ensure Your Comfort</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>At our dental practice, we make it a priority to ensure that you are comfortable throughout your visit.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sl-div'>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>

                                <img src={img2} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>No Waiting Time</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>We value your time and strive to provide a prompt and efficient service with no waiting time.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sl-div'>
                        <div className='border-2 border-[#000]'>
                            <div className='h-[50%] overflow-hidden'>
                                <img src={img4} alt="" />
                            </div>
                            <div className='flex flex-col px-4 justify-center gap-[10px]'>
                                <h1 className='headingfont text-3xl'>Clean & Hygienic</h1>
                                <ul className='parafont flex flex-row justify-center items-center gap-[10px]'>
                                    <span><FaCheck /></span>
                                    <p>Our dental practice is committed to maintaining a clean and hygienic environment to ensure your safety and well-being during your visit.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default WhyUsSlider;
