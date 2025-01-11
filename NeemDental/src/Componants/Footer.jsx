import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Footer.css";



const Footer = () => {
    return (
        <div className="FooterMain flex justify-center w-[100%] h-[100%] m-auto relative bg-[#222222]">
            <div className="FooterInner w-[90%] relative px-10 py-20 text-[#f9fcfd] z-10">
                <div className="w-full"><h1 className="FootHead text-[3rem] sm:text-[5rem] font-semibold uppercase leading-none">Neem</h1></div>
                <div className="w-full"><h1 className="FootHead text-[3rem] sm:text-[5rem] font-semibold uppercase leading-none">Dental</h1></div>
                <div className="FooterInnerDes w-full sm:w-[40%] mt-8"><p>"Perfect one stop solution for all dental problems by experienced dentist, RCT specialist, braces treatment, dental implant, cosmetic dentist , gum problem, laser dentistry, teeth whitening , tooth surgery"</p></div>
                <div className="w-full border-b-[1px] border-white mt-8 mb-8"></div>
                <div className="FooterInnerLinks w-full flex flex-row gap-6">
                    <div className="w-[100%]">
                        <li className="text-2xl underline underline-offset-4 list-none text-gray-300">Quick Links</li>
                        <Link to="/"><li className="list-none text-gray-300 cursor-pointer">Home</li></Link>
                        <Link to="/services"><li className="list-none text-gray-300 cursor-pointer">Services</li></Link>
                        <Link to="/about"><li className="list-none text-gray-300 cursor-pointer">About</li></Link>
                        <Link to="/contact"><li className="list-none text-gray-300 cursor-pointer">Contact</li></Link>
                        <Link to="/gallery"><li className="list-none text-gray-300 cursor-pointer">Gallery</li></Link>
                    </div>
                    <div className="w-[100%]">
                        <li className="text-2xl underline underline-offset-4 list-none text-gray-300">Social</li>
                        <div className="flex flex-row gap-[30px] pt-[20px]">
                            <a href="https://www.instagram.com/neem_dental" target="_blank"><li className="list-none text-4xl text-gray-100 cursor-pointer"><GrInstagram /></li></a>
                            <a href="https://www.facebook.com/profile.php?id=61555478926294" target="_blank"><li className="list-none text-4xl text-gray-100 cursor-pointer"><FaFacebookSquare /></li></a>
                            <a href='https://wa.me/918882715717?text=Hello, Sir/Mam!, Can i get an appointment for tomorrow' target='_blank'><li className="list-none text-4xl text-gray-100 cursor-pointer"><IoLogoWhatsapp /></li></a>
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <li className="text-2xl underline underline-offset-4 list-none text-gray-300">Timing</li>
                        <li className="list-none text-gray-300 cursor-pointer">Everyday</li>
                        <li className="list-none text-gray-300 cursor-pointer">9:30 AM - 8 PM</li>
                    </div>
                    <div className="w-[100%]">
                        <div>
                            <li className="text-2xl underline underline-offset-4 list-none text-gray-300 cursor-pointer">Contact</li>
                        </div>
                        <div className="flex flex-row">
                            <span className="px-2 mt-[3px]"><FaLocationDot /></span>
                            <p className="text-semibold text-gray-200">Bass road, opposite Power House, Santosh Colony, Dharuhera, Haryana 123106</p>
                        </div>
                        <div className="flex flex-row">
                            <span className="px-2 mt-[3px]"><IoMdCall /></span>
                            <a href="tel:+918882715717" className="text-semibold text-gray-200">
                                +91 88827 15717
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b-[1px] border-white mt-8 mb-8"></div>
                <div className="FooterLastDiv w-full flex flex-row justify-between">
                    <div className="FooterLastDivOne">All Rights Reserved @Neem Dental | 2024</div>
                    <div className="FooterLastDivTwo flex flex-row items-center">
                        <span className="px-2 mt-[3px]"><FaLink /></span>
                        <p className="text-semibold text-gray-200">
                            Design & Developed By <a className="text-xl pl-[5px] text-gray-100 underline" href="https://www.zenithcodecreations.com">Zenith Code Creations</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
