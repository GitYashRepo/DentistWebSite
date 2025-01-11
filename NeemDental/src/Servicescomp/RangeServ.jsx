import React, { useEffect } from 'react'
import "./RangeServ.css"
import img1 from "../assets/ServiceImages/root.jpg";
import img2 from "../assets/ServiceImages/img2.png";
import img3 from "../assets/ServiceImages/img3.png";
import img4 from "../assets/ServiceImages/img4.png";
import img5 from "../assets/ServiceImages/img1two.png";
import img6 from "../assets/ServiceImages/img6.png";
import img8 from "../assets/ServiceImages/img8.png";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Appbutton from '../Componants/Appbutton';

const RangeServ = () => {
    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });

        // Destroy Locomotive Scroll instance on unmount
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container className='ServiceMain w-[95%] m-auto'>
            <div className='ServiceMainInner w-[100%] flex flex-col'>
                <div className='ServiceMainOne w-[100%] py-[10vh]'>
                    <h1 className='servicepagehead text-[6.5vw] text-center text-[#313131]'>BIG RANGE OF SERVICES</h1>
                </div>
                <div className='ServiceMainTwo w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".1" className='img1 object-cover' src={img1} alt="" /></div>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>1</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Root Canal Treatment (RCt)</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Precision dental procedure restoring teeth, relieving pain, ensuring oral health.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Preventive Care.' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='ServiceMainThree w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>2</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Restorative Dentistry</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Solutions like dental implants, crowns, bridges, and dentures to restore the function and appearance of your teeth.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Restorative Dentistry.' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".05" className='img2 object-cover' src={img2} alt="" /></div>
                </div>
                <div className='ServiceMainFour w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".05" className='img3 object-cover' src={img3} alt="" /></div>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>3</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Cosmetic Dentistry</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Smile makeovers, teeth whitening, veneers, and bonding to help you achieve the confident smile you’ve always wanted.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Cosmetic Dentistry.' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='ServiceMainFive w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>4</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Dental Implants</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Offering a durable and natural-looking solution for replacing missing teeth, effectively restoring both function and aesthetics.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Dental Implants.' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".05" className='img4 object-fill' src={img4} alt="" /></div>
                </div>
                <div className='ServiceMainSix w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".02" className='img5 object-cover object-top' src={img5} alt="" /></div>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>5</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Preventive Care</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Routine check-ups, dental cleanings, and oral health education to prevent future dental problems.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Orthodontics.' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='ServiceMainSeven w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>6</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Pediatric Dentistry</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Gentle care tailored specifically to meet the needs of young patients in a friendly, welcoming environment.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Pediatric Dentistry!' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".05" className='img6 object-fill' src={img6} alt="" /></div>
                </div>
                <div className='ServiceMainEight w-[100%] h-[80vh] flex flex-row gap-[20px] mb-[20px]'>
                    <div className='w-[50%] overflow-hidden'><img data-scroll data-scroll-speed=".02" className='img7 object-cover object-bottom' src={img8} alt="" /></div>
                    <div className='w-[50%] h-[100%] p-6 bg-[#f8f5f0] flex flex-col justify-between'>
                        <div className='text-7xl text-[#313131] uppercase'>7</div>
                        <div>
                            <h1 className='text-3xl font-medium text-[#313131] uppercase'>Emergency Dental Care</h1>
                            <p className='text-xl pb-[20px] text-[#767676] pt-[20px]'>Prompt, efficient treatment for unexpected dental issues such as toothaches, broken teeth, or dental trauma.
                            </p>
                            <a href='https://wa.me/918882715717?text=Hello Mam, Want to get more info about Emergency Dental Care.' target='_blank'>
                                <Appbutton applbtnname="Get Info" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeServ
