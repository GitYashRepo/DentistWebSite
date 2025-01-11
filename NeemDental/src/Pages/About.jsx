import React from "react";
import transition from "../transition";
import Aboutusdiv from "../Aboutcomp/Aboutusdiv";
import AboutTeam from "../Aboutcomp/AboutTeam";

const About = () => {
    return (
        <div className="AboutPage w-[100%] h-[100%]">
            <Aboutusdiv />
            <AboutTeam />
        </div>
    );
};

// export default transition(About);
export default About;
