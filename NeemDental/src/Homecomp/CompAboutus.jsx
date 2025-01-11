import { Link } from "react-router-dom";
import Owenerimg from "../assets/HomeImages/homemainimg.png";
import Appbutton from "../Componants/Appbutton.jsx";
import { IoIosStar } from "react-icons/io";
import { PiClockCountdownFill } from "react-icons/pi";
import "./CompAboutus.css";


const CompAboutus = () => {

    return (
        <div className="container w-[95%] m-auto flex justify-center items-center mt-[10vh]">
            <div className="containerInner w-[85%] h-[100vh] flex flex-row justify-between gap-[5%] items-center">
                <div className="givendiv w-[50%]">
                    <div className="containerInnerTextCont">
                        <span className="flex flex-row text-[#d8a958]"><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></span>
                        <p className="pt-2">About</p>
                        <h1 className="pt-2"><span className="neemdentalclinic text-4xl">Neem Dental</span></h1>
                        <h1 className="pb-8 text-md">Dental Clinic in Dharuhera</h1>
                        <p className="text-[#7b7a7a] tracking-wide pb-8 text-sm">"Perfect one stop solution for all Dental problems by experienced dentist, RCT specialist, braces treatment, dental implant, cosmetic dentist , gum problem, laser dentistry, teeth whitening , tooth surgery"</p>
                        <p className="text-[#7b7a7a] tracking-wide text-sm">We believe in specialized treatment, for each and every dental problem which a patient may have. Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.</p>
                        <div className="TimingDiv flex !flex-row mt-4">
                            <div className="TimeIconDiv">
                                <span className="text-5xl text-[#aa8453] pr-2.5"><PiClockCountdownFill /></span>
                            </div>
                            <div className="timetext">
                                <p>Timing : Everyday - 9:30AM to 8PM</p>
                                <p>+91 88827 15717</p>
                            </div>
                        </div>
                        <Link to="/about"><div className="max-w-fit text-[#fff] cursor-pointer bg-[#aa8453]">
                            <Appbutton applbtnname="READ MORE" />
                        </div></Link>
                    </div>
                </div>
                <div className="CompAboutusImageDiv w-[50%] h-[80%] overflow-hidden">
                    <img data-scroll data-scroll-speed="-.05" className="CompAboutusImage w-full h-full object-cover" src={Owenerimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CompAboutus;
