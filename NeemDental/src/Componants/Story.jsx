import React from "react";
import Slider from "react-slick";
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import "./story.css";


const Story = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="storydivmain w-[80%] m-auto border-2 border-[#fff] flex flex-col pb-[50px]">
            <div className="text-center flex flex-col pl-[20px] pt-[20px]">
                <p className="text-[#fff] text-md tracking-wider">TESTIMONIALS</p>
                <h1 className="text-[#fff] text-4xl">What Patient's Say</h1>
            </div>
            <Slider {...settings} className="sliderstory">
                <div className="sl sl-one w-full">
                    <div className="w-full flex items-center justify-center flex-col py-6">
                        <div className="flex flex-row !text-[#e5a652] mb-[20px] gap-[5px]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaRegStar /></div>
                        <div className="w-full flex flex-row justify-center items-center"><span className="text-6xl"><FcBusinesswoman /></span><h1 className="clientnameheading text-4xl text-center text-[#fff] mb-[20px]">MRS. BHAVYA</h1></div>
                        <div className="sliderbannertextmain w-[80%]"><p className="bannertextmain text-justify text-sm text-center text-[#fff]">I had yellow teeth. I got zoom teeth whitening from here and just in 45 minutes my teeth have become whitest white. There was no sensitivity no anaesthesia required. The process was very comfortable. The clinic itself is very relaxing and beautiful. I love the plants all around. It doesn't feel like a clinic. The staff is very polite and courteous. Dr Kusum is very calming and expert at her job. I would highly recommend this place.</p></div>
                    </div>
                </div>
                <div className="sl sl-two">
                    <div className="w-full flex items-center justify-center py-6 flex-col">
                        <div className="flex flex-row !text-[#e5a652] mb-[20px] gap-[5px]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                        <div className="w-full flex flex-row justify-center items-center"><span className="text-6xl"><FcBusinessman /></span><h1 className="clientnameheading text-4xl text-center text-[#fff] mb-[20px]">MR. KARANVEER</h1></div>
                        <div className="w-[80%]"><p className="bannertextmain text-justify text-sm text-center text-[#fff]">Dr. Kusum placed two dental implants in my mouth. It was a painless experience. I loved the service. Would highly recommend for implants and zoom teeth whitening. The staff is very courteous and makes you feel at home and very comfortable.</p></div>
                    </div>
                </div>
                <div className="sl sl-three">
                    <div className="w-full flex items-center justify-center py-6 flex-col">
                        <div className="flex flex-row !text-[#e5a652] mb-[20px] gap-[5px]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><FaRegStar /></div>
                        <div className="w-full flex flex-row justify-center items-center"><span className="text-6xl"><FcBusinessman /></span><h1 className="clientnameheading text-4xl text-center text-[#fff] mb-[20px]">MR. SUNIL KUMAR</h1></div>
                        <div className="w-[80%]"><p className="bannertextmain text-justify text-sm text-center text-[#fff]"> Great clinic. The doctor and the other staff members are very attentive and professional. The service is very good and efficient. A friend of mine recommended the clinic because of their attention to preserving the patients’ natural teeth. I 100% recommend the clinic. </p></div>
                    </div>
                </div>
                <div className="sl sl-four">
                    <div className="w-full flex items-center justify-center py-6 flex-col">
                        <div className="flex flex-row !text-[#e5a652] mb-[20px] gap-[5px]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                        <div className="w-full flex flex-row justify-center items-center"><span className="text-6xl"><FcBusinesswoman /></span><h1 className="clientnameheading text-4xl text-center text-[#fff] mb-[20px]">MRS. KAVITA</h1></div>
                        <div className="w-[80%]"><p className="bannertextmain text-justify text-sm text-center text-[#fff]"> It was a wonderful experience with Doctor. I've always been scared of having my teeth examined. But the way ma'am and the staff assisted and cared for my crown implant. Both are very good and lovely. </p></div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Story
