import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Check if the popup has been shown during this session
        const isPopupShown = sessionStorage.getItem("popupShown");

        if (!isPopupShown) {
            // If the popup hasn't been shown in this session, show it after 8 seconds
            setTimeout(() => {
                setShowPopup(true);
            }, 10000);

            // Set a flag in sessionStorage to avoid showing it again during this session
            sessionStorage.setItem("popupShown", "true");
        }
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content flex flex-col justify-between">
                        <div className="flex flex-col justify-end items-end">
                            <span className="closepop text-black" onClick={handleClosePopup}>
                                &times;
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center -mt-[100px]">
                            <p className="text-6xl text-red-600 font-black">FREE !</p>
                            <p className="text-2xl text-red-500 font-bold">OPD (Consultation)</p>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default Popup;
