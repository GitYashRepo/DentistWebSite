import { useState } from "react";
import servbanner from "../assets/images/service-banner.png";
import servicon1 from "../assets/images/service-icon-1.png";
import servicon2 from "../assets/images/service-icon-2.png";
import servicon3 from "../assets/images/service-icon-3.png";
import servicon4 from "../assets/images/service-icon-4.png";
import servicon5 from "../assets/images/service-icon-5.png";
import servicon6 from "../assets/images/service-icon-6.png";
import "./OurServices.css"

const OurServices = () => {
    const [elem1, setElem1] = useState([
        {
            heading: "Preventive Care",
            para: "Routine check-ups, dental cleanings, and oral health education.",
            img: servicon1
        },
        {
            heading: "Oral Hygiene",
            para: "Promoting healthy teeth and gums through effective cleaning practices.",
            img: servicon2
        },
        {
            heading: "Alignment Teeth",
            para: "Aligning teeth through customized braces or clear aligners for optimal smiles.",
            img: servicon3
        },
    ]);
    const [elem2, setElem2] = useState([
        {
            heading: "Live Advisory",
            para: "Expert guidance for your dental health needs..",
            img: servicon4
        },
        {
            heading: "Cosmetic Teeth",
            para: "Enhancing smiles through aesthetic treatments for teeth improvement.",
            img: servicon5
        },
        {
            heading: "Cavity Inspection",
            para: "Comprehensive evaluation to detect and assess cavities effectively.",
            img: servicon6
        },
    ]);
    return (
        <div className="OurServicesMain w-full relative mt-[10vh]">
            <div className="OurServicesHeadDiv flex flex-col justify-center items-center m-auto pb-[5vh]">
                <p className="text-2xl text-[#2276bf] font-semibold pb-[20px]">OUR SERVICES</p>
                <h1 className="text-6xl text-[#43425b] font-semibold text-center">What We Provide</h1>
            </div>
            <div className="OurServicesSection w-[80%] m-auto flex flex-row">
                <div className="OurServicesTop w-[30%]">
                    {elem1.map((item, index) => {
                        return <div key={index} className="elem w-full h-[20vh] flex flex-row justify-between mt-5 border-2 px-[10px]">
                            <div className="imgelem flex items-center">
                                <img className="w-[50px] object-contain" src={item.img} alt="" />
                            </div>
                            <div className="w-[70%] flex flex-col justify-center">
                                <h3 className="font-semibold">{item.heading}</h3>
                                <p className="capitalize opacity-50">{item.para}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="OurServicesMiddle w-[40%]">
                    <img data-scroll data-scroll-speed="-.05" src={servbanner} alt="" />
                </div>
                <div className="OurServicesBottom w-[30%]">
                    {elem2.map((item, index) => {
                        return <div key={index} className="elem w-full h-[20vh] flex flex-row justify-between mt-5 border-2 px-[10px]">
                            <div className="imgelem flex items-center">
                                <img className="w-[50px] object-contain" src={item.img} alt="" />
                            </div>
                            <div className="w-[70%] flex flex-col justify-center">
                                <h3 className="font-semibold">{item.heading}</h3>
                                <p className="capitalize opacity-50">{item.para}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default OurServices;
