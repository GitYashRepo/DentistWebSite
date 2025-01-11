import dentistBannervdo from "../assets/videos/dentistBanner.mp4"
import { IoIosStar } from "react-icons/io";
import Appbutton from "../Componants/Appbutton.jsx";
import "./Banner.css"




const Banner = () => {
    return (
        <div className="BannerHome w-[100%] m-auto !mt-[25px] rounded-lg relative sm:w-[100%] sm:m-auto">
            <div className="BannerHomeVideoDiv w-full h-full -mt-[120px]">
                <video autoPlay muted loop className="BannerHomeVideo w-[100vw] h-[110vh] object-cover" src={dentistBannervdo}></video>
            </div>
            <div className="BannervideoTextDiv w-full flex items-center justify-center absolute top-[40%] left-1/2 transform -translate-x-1/2">
                <div className="BannervideoTextDivinner w-[80%] flex items-center flex-col">
                    <div className="BannervideoTextDivStars flex flex-row !text-[#e5a652] mb-[20px] gap-[5px]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                    <div className="BannervideoTextDivNeem w-full"><h1 className="text-xl text-center text-[#000] tracking-[15px] mb-[20px]">NEEM DENTAL</h1></div>
                    <div className="BannervideoTextDivTextRandom w-full"><h1 className="bannertextmain text-4xl text-center text-[#000] tracking-[15px]">Redesigning Your Smile, <br /> Reimagining Your Comfort</h1></div>
                </div>
            </div>
            <div className="BannerButtonDiv w-auto absolute top-[70%] left-1/2 transform -translate-x-1/2 cursor-pointer">
                <div className="BannerButton w-auto py-0 text-xl bg-[#a48265] text-white flex items-center justify-center">
                    <a target="_blank" href="https://script.google.com/macros/s/AKfycbw_O3lt-y5IMWbNL_0fn8Z1wLfc5Crz5newjXyw71lxF1GRoDGoDqoKFQjKZSXB5TBEiw/exec"><Appbutton applbtnname="BOOK APPOINTMENT" /></a>
                </div>
            </div>
        </div >
    )
}

export default Banner;
