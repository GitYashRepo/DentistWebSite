import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoneem from "../assets/images/logoneem.png";

const NavBar = () => {
    const [showPhoneNav, setShowPhoneNav] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isSticky, setIsSticky] = useState(false); // State to control sticky navbar

    const togglePhoneNav = () => {
        if (showPhoneNav) {
            setIsAnimating(true);
            setTimeout(() => {
                setShowPhoneNav(false);
                setIsAnimating(false);
            }, 500);
        } else {
            setShowPhoneNav(true);
        }
    };

    // Scroll event listener to handle navbar stickiness
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setIsSticky(true); // Make navbar sticky when the original is out of view
            } else {
                setIsSticky(false); // Revert to normal navbar
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navmain">
            <div
                className="nav"
                style={{
                    position: "relative", // Regular relative navbar initially
                    top: "0",
                    transition: "background-color 0.3s ease",
                    zIndex: "99",
                }}
            >
                <div className="logo">
                    <Link className="nav-link" to="/">
                        <img className="w-[100px] ml-8 p-4" src={logoneem} alt="Logo" />
                    </Link>
                    <Link className="nav-link" to="/">
                        <p className="navtext text-xl !font-black">
                            <span className="text-[#016c40]">Neem</span><span className="text-[#0052b3]">Dental</span>
                        </p>
                    </Link>
                </div>
                <div className="nav-links">
                    <div className="nav-item">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/services">
                            Services
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/gallery">
                            Gallery
                        </Link>
                    </div>
                    <div className="nav-item">
                        <a target="_blank" href="https://script.google.com/macros/s/AKfycbw_O3lt-y5IMWbNL_0fn8Z1wLfc5Crz5newjXyw71lxF1GRoDGoDqoKFQjKZSXB5TBEiw/exec">
                            Appointment
                        </a>
                    </div>
                </div>

                {/* <div className="logoNamePhone">
                    <Link className="nav-link" to="/">
                        <p className="navtext text-xl !font-black">
                            <span className="text-[#016c40]">Neem</span><span className="text-[#0052b3]">Dental</span>
                        </p>
                    </Link>
                </div> */}

                {/* Phone Menu Button */}
                <div className="MenuButtonNav lg:hidden flex items-center mr-[8vw]">
                    <button className="text-xl p-4" onClick={togglePhoneNav}>
                        Menu
                    </button>
                </div>

                {/* PhoneNav - Mobile Navigation */}
                {showPhoneNav && (
                    <div
                        className={`PhoneNav rounded-lg lg:hidden fixed top-[10px] w-[95%] h-[100vh] flex flex-col bg-[#fff] ${isAnimating ? "fade-out" : "fade-in"
                            }`}
                    >
                        <div className="navfullphone bg-[#fff]">
                            <div className="nav-item flex flex-row justify-between">
                                <div className="logo">
                                    <Link className="nav-link" to="/">
                                        <img className="w-[100px] -ml-[20px]" src={logoneem} alt="Logo" />
                                    </Link>
                                </div>

                                <div>
                                    <button className="text-2xl font-bold p-4" onClick={togglePhoneNav}>
                                        Close
                                    </button>
                                </div>
                            </div>
                            <div className="nav-router bg-[#fff]">
                                <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl py-4">Home</h1>
                                    </Link>
                                </div>
                                <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/services" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl py-4">Services</h1>
                                    </Link>
                                </div>
                                <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/about" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl py-4">About</h1>
                                    </Link>
                                </div>
                                <div className="nav-item border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/contact" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl py-4">Contact</h1>
                                    </Link>
                                </div>
                                <div className="nav-item border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/gallery" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl py-4">Gallery</h1>
                                    </Link>
                                </div>
                                <div className="nav-item border-b-2 border-b-zinc-100">
                                    <a href="https://script.google.com/macros/s/AKfycbw_O3lt-y5IMWbNL_0fn8Z1wLfc5Crz5newjXyw71lxF1GRoDGoDqoKFQjKZSXB5TBEiw/exec">
                                        <h1 className="text-2xl py-4">Appointment</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Sticky Navbar */}
            {isSticky && (
                <div
                    className="sticky-navbar"
                    style={{
                        position: "fixed",
                        top: 0,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        color: "#000",
                        width: "100%",
                        backgroundColor: "#fff",
                        zIndex: "999",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        transition: "all 200ms ease-in-out",
                    }}
                >
                    <div className="logo">
                        <Link className="nav-link" to="/">
                            <img className="w-[100px] ml-8 p-4" src={logoneem} alt="Logo" />
                        </Link>
                        <Link className="nav-link" to="/">
                            <p className="navtext text-xl !font-black text-teal-800">
                                <span className="text-[#016c40]">
                                    Neem</span><span className="text-[#0052b3]">Dental
                                </span>
                            </p>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <div className="nav-item nav-itemTwo" style={{ color: "#000" }}>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </div>
                        <div className="nav-item nav-itemTwo" style={{ color: "#000" }}>
                            <Link className="nav-link" to="/services">
                                Services
                            </Link>
                        </div>
                        <div className="nav-item nav-itemTwo" style={{ color: "#000" }}>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </div>
                        <div className="nav-item nav-itemTwo" style={{ color: "#000" }}>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </div>
                        <div className="nav-item nav-itemTwo" style={{ color: "#000" }}>
                            <Link className="nav-link" to="/gallery">
                                Gallery
                            </Link>
                        </div>
                        <div className="nav-item nav-itemTwo" style={{ color: "#000" }}>
                            <a href="https://script.google.com/macros/s/AKfycbw_O3lt-y5IMWbNL_0fn8Z1wLfc5Crz5newjXyw71lxF1GRoDGoDqoKFQjKZSXB5TBEiw/exec">
                                Appointment
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
