import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./Componants/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Footer from "./Componants/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import WhatsAppBtn from "./Componants/WhatsAppBtn";
import Callbtn from "./Componants/Callbtn";
import ScrollToTop from "./Componants/ScrollToTop";
import Popup from "./Componants/PopUp";
import Gallery from "./Pages/Gallery";
import Mobcallbtn from "./Componants/Mobcallbtn";


function App() {
    const locomotiveScroll = new LocomotiveScroll();
    const location = useLocation();


    return (
        <div className="w-full h-[100%]">
            <WhatsAppBtn />
            <Callbtn />
            <Mobcallbtn />
            <NavBar />
            <Popup />
            <AnimatePresence mode="wait">
                <ScrollToTop />
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default App;
