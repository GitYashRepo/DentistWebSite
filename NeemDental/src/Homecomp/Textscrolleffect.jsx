import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./TextScroll.css"


const Textscrolleffect = () => {
    gsap.registerPlugin(ScrollTrigger);
    const textRef = useRef(null);

    useEffect(() => {
        // Split the text into characters (letters)
        const split = new SplitType(textRef.current, { types: "words" });

        // Create the timeline for letter animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".TextScrollEffect",
                start: "top 10%",
                end: "+=100%", // Adjusted end value
                pin: true,
                scrub: 0, // Smooth scrubbing
                // markers: true
            }
        }).fromTo(
            split.words,
            { opacity: 0.1 },
            { opacity: 1, stagger: 0.05, duration: .2 }
        );

        return () => {
            // Cleanup GSAP effects
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            split.revert();
        };
    }, []);

    return (
        <div className="TextScrollEffect w-[95%] m-auto h-[70vh] bg-zinc-100 rounded-lg flex flex-col items-center justify-evenly mb-[10vh] mt-[10vh] p-4">
            <h1 className="TextScrollHeading text-center text-4xl text-[#313131] mt-[10vh]">Your Journey to a Healthy, Beautiful Smile Begins Here !</h1>
            <section id="textSection" className="textSectionClass w-[80%] m-auto text-justify h-auto leading-10 mt-[10vh]">
                <p className="white text-2xl leading-10 text-[#767676]" ref={textRef}>
                    At Neem Dental Clinic we take pride in offering comprehensive, patient-centered dental care to families and individuals in a state-of-the-art facility. Our clinic is built on the foundation of trust, innovation, and a deep commitment to your oral health. We understand that every smile is unique, and our mission is to provide personalized treatments that deliver long-lasting results.
                </p>
            </section>
        </div>
    );
};

export default Textscrolleffect;
