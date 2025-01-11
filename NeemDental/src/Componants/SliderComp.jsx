import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import docimgThree from "../assets/myprofile/img2new2.jpg"
import docimgOne from "../assets/images/logoneemdental.jpg"
import docimgTwo from "../assets/HomeImages/piyush3.jpg"
import "./SliderComp.css"

const data = [
    {
        name: "Dr. Kusum Yadav – Experienced Root Canal Specialist",
        img: docimgThree,
        description: "With 7 years of experience in RCT, Preventive, Restorative, and Cosmetic Dentistry, as well as Oral Surgery, Dr. Kusum Yadav earned her dental degree from PGI Rohtak University. Her education and experience enable her to provide top-quality, patient-focused care. She has done more than 10,000+ RCt's."
    },
    {
        name: "Dr. Piyush Mudgal – Expert Orthodontist",
        img: docimgTwo,
        description: "With 14 years of experience in orthodontics, Dr. Piyush Mudgal is renowned for his expertise in diagnosing and treating alignment issues and bite problems. He specializes in both traditional braces and modern clear aligners, using advanced techniques to create personalized treatment plans that achieve optimal results."
    },
    {
        name: "Dr. Khushboo Yadav – Skilled Prosthodontist",
        img: docimgOne,
        description: "Dr. Khushboo Yadav brings 6 years of specialized experience in prosthodontics, focusing on restoring and enhancing smiles through advanced techniques in crowns, bridges, dentures, and implants. Her expertise ensures precise, functional, and aesthetically pleasing results tailored to each patient's needs."
    },
]

const SliderComp = () => {
    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    swipeToSlide: true,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className='SliderCompMain w-[100%] h-[100%] rounded-lg'>
            <Slider className="SliderCompReact" {...settings}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='slidermain w-[100%] h-[60vh] flex flex-row justify-between'>
                            <div className='slidermainImgDiv w-[60%] h-[100%] mr-[10px] rounded-lg overflow-hidden'>
                                <img data-scroll data-scroll-speed="-.05" className='Docimages w-full h-[100%] object-cover -mt-[3px]' src={item.img} alt="" />
                            </div>
                            <div className='slidermainBottom w-[40%] h-[100%] p-4 ml-[10px] bg-[#f8f5f0] rounded-lg overflow-hidden flex flex-col justify-between'>
                                <div className='w-[100%] h-[100%]'><h1 className='text-3xl text-[#313131]'>{item.name}</h1></div>
                                <div className='w-[100%] h-[100%]'><p className='text-md text-[#767676] text-justify'>{item.description}</p></div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div className='PhoneDiv hidden'>
                {data.map((item, index) => {
                    return <div key={index} className='slidermainPhone w-[100%] h-[60vh] flex flex-row justify-between'>
                        <div className='slidermainImgDivPhone w-[60%] h-[100%] mr-[10px] rounded-lg overflow-hidden'>
                            <img data-scroll data-scroll-speed="-.05" className='DocimagesPhone w-full h-[100%] object-cover -mt-[3px]' src={item.img} alt="" />
                        </div>
                        <div className='slidermainBottomPhone w-[40%] h-[100%] p-4 ml-[10px] bg-[#f0f1f5] rounded-lg overflow-hidden flex flex-col justify-between'>
                            <div className='w-[100%] h-[100%]'><h1 className='text-3xl text-[#313131]'>{item.name}</h1></div>
                            <div className='w-[100%] h-[100%]'><p className='text-md text-[#767676] text-justify'>{item.description}</p></div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default SliderComp
