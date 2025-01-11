import React from 'react';
import WhatWeDo from "../Homecomp/WhatWeDo";
import { IoIosStar } from "react-icons/io";
import "./fixedbg.css";
import Story from './story';

const fixedbg = () => {
    return (
        <div className='w-full'>
            <div class="wrapper">
                <div class="fixed-bg bg-1">
                    <div className='w-full flex justify-center h-screen bg-transparent opacity-100'>
                        <div className="w-full flex items-center justify-center">
                            <div className="FixedbgDivOne w-[80%] flex items-center flex-col">
                                <div className="FixedbgStars flex flex-row !text-[#e5a652] mb-[20px] gap-[20px]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                                <div className="w-full"><h1 className="bannertextmaintwo text-xl text-center px-4 py-4 font-[100] text-[#fff] inline-block tracking-[15px] mb-[20px]">NEEM DENTAL</h1></div>
                                <div className="w-full"><h1 className="bannertextmaintwo bannertextmaintwotwo font-[100] text-[#fff] inline-block text-4xl text-center px-4 py-4 tracking-[15px]">Bringing out your brightest <br />smile and radiance.</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scroll-bg2 !bg-[#ffffff]">
                    <WhatWeDo />
                </div>
                <div class="fixed-bg bg-2 relative">
                    <div className='w-full h-screen opacity-100'>
                        <div className='pt-[10vh] object-contain'>
                            <Story />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default fixedbg;
