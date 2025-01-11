import React from "react";
import Faq from "react-faq-component";
import "./FAQ.css"


const data = {
    // title: "FAQ (Find answers to your questions here)",
    rows: [
        {
            title: "What should I expect during my first visit?",
            content: `During your first visit, We'll discuss your dental history, any concerns you have, and create a personalized treatment plan.`,
        },
        {
            title: "How often should I visit the dentist?",
            content:
                "We recommend that patients come in for a check-up and cleaning at least twice a year. However, depending on your specific dental needs, we may suggest more frequent visits.",
        },
        {
            title: "Can I get dental treatments if I’m pregnant?",
            content: `Yes, routine dental care is safe during pregnancy. In fact, due to changes in hormones, it's important to maintain good oral health. However, some treatments may require clearance from your obstetrician.`,
        },
        {
            title: "What technologies do you use in your treatments?",
            content: "At Neem dental ,we use the latest dental technology to ensure precise, comfortable, and efficient care. Our advanced equipment includes Digital X-Rays & 3D Imaging, Intraoral Cameras, Ultrasonic Scalers, Rotary Endodontics, CAD/CAM Crowns, Portable X-Rays, Composite Fillings.",
        },
        {
            title: "Do you accept new patients?",
            content: "Yes, we are currently accepting new patients! You can schedule your first appointment online or by calling our office directly.",
        },
        {
            title: "How can I schedule an appointment?",
            content: "You can schedule an appointment by calling our office, directly visit our clinic, or sending an inquiry through the Contact Us form on our website.",
        },
        {
            title: "What should I do if I have a dental emergency?",
            content: "In case of a dental emergency, such as a severe toothache, broken tooth, or dental trauma, please contact us immediately. We offer emergency appointments and will do our best to see you as soon as possible.",
        },
        {
            title: "Do you treat children?",
            content: "Yes, we offer pediatric dental care and provide services for patients of all ages. Our team takes special care to ensure children feel comfortable and at ease during their visit.",
        },
        {
            title: "How do I know if I need a dental filling?",
            content: "Common signs that you may need a dental filling include sensitivity to hot or cold, pain when biting, or visible damage to your tooth. During your exam, we will check for cavities and other signs of tooth decay to determine if a filling is necessary.",
        },
        {
            title: "Do you offer orthodontic treatments, such as braces or Invisalign?",
            content: "Yes, we offer orthodontic treatments including traditional braces and clear aligners like Invisalign. During your consultation, we will assess your needs and recommend the best treatment option for you.",
        }
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "#313131",
    rowTitleColor: "#313131",
    rowContentColor: '#464646',
    arrowColor: "#a48265",
    // marginTop: "100px"
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};

const FAQ = () => {
    return (
        <div className="faqMain w-full">
            <div className="faqTop w-[80%] m-auto pt-[20vh]">
                <h1 className="text-4xl text-[#a48265]">FAQ (Frequently Asked Questions) :-</h1>
            </div>
            <div className="faqBottom w-[80%] m-auto pt-[10vh] pb-[10vh]">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    )
}

export default FAQ
