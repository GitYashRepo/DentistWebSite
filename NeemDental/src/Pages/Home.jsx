import React, { useEffect } from "react";
import transition from "../transition";
import Banner from "../Homecomp/Banner";
import ImgCompair from "../Homecomp/ImgCompair";
import CompAboutus from "../Homecomp/CompAboutus";
import FAQ from "../Homecomp/FAQ";
import OurServices from "../Homecomp/OurServices";
import OurTeam from "../Homecomp/OurTeam";
import Fixedbg from "../Componants/Fixedbg";
import WhyUsSlider from "../Homecomp/WhyUsSlider";
// import Textscrolleffect from "../Homecomp/Textscrolleffect";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';


const Home = () => {
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
        <div data-scroll-container className="w-full">
            <Banner />
            <CompAboutus />
            <ImgCompair />
            <WhyUsSlider />
            <Fixedbg />
            {/* <OurServices /> */}
            <OurTeam />
            {/* <Textscrolleffect /> */}
            <FAQ />
        </div>
    );
};

// export default transition(Home);
export default Home;
