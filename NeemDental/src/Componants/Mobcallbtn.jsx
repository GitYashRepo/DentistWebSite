/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { LiaCalendarSolid } from "react-icons/lia";



const Mobcallbtn = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrolledPercentage = (scrollTop + windowHeight) / documentHeight;

            // Hide if scrolled more than 95%, otherwise show
            if (scrolledPercentage >= 0.95) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`mobcallbtn !bottom-0 fixed !w-[100vw] border-t-2 flex flex-row items-center justify-center transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
            }`}>

            <a className="w-full border-r-2" href='https://maps.app.goo.gl/cdqKdybZ2cx7gRHHA' target='_blank'>
                <div className="w-full h-[80px] flex flex-col items-center justify-center py-4 text-[#fff] bg-[#ff7331] transform transition duration-150 ease-in-out active:scale-95">
                    <span className="text-2xl"><IoPaperPlaneSharp /></span>
                    <span className="text-[10px] text-center">Direction</span>
                </div>
            </a>

            <a className="w-full border-r-2" href='tel:+918882715717' target='_blank'>
                <div className="w-full h-[80px] flex flex-col items-center justify-center py-4 text-[#fff] bg-[#333] transform transition duration-150 ease-in-out active:scale-95">
                    <span className="text-2xl"><FaPhone /></span>
                    <span className="text-[10px] text-center">Call Us</span>
                </div>
            </a>

            <a className="w-full border-r-2" href='https://script.google.com/macros/s/AKfycbw_O3lt-y5IMWbNL_0fn8Z1wLfc5Crz5newjXyw71lxF1GRoDGoDqoKFQjKZSXB5TBEiw/exec' target='_blank'>
                <div className="w-full h-[80px] flex flex-col items-center justify-center text-wrap text-truncate py-4 text-[#fff] bg-[#ff7331] transform transition duration-150 ease-in-out active:scale-95">
                    <span className="text-2xl"><LiaCalendarSolid /></span>
                    <span className="text-[10px] text-center">Book Appointment</span>
                </div>
            </a>

            <a className="w-full" href='https://wa.me/918882715717?text=Hello, Sir/Mam!, Can i get an appointment for ' target='_blank'>
                <div className="w-full h-[80px] flex flex-col items-center justify-center py-4 text-[#fff] bg-[#333] transform transition duration-150 ease-in-out active:scale-95">
                    <span className="text-2xl"><FaWhatsapp /></span>
                    <span className="text-[10px] text-center">WhatsApp</span>
                </div>
            </a>
        </div>
    )
}

export default Mobcallbtn;
