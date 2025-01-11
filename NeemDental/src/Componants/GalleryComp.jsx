import { GalleryData } from "../data/images";
import { useEffect, useState } from "react";
import "./GalleryComp.css";

function GalleryComp() {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null); // State for selected image index
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    useEffect(() => {
        setData(GalleryData);
        setCollection([...new Set(GalleryData.map((item) => item.title))]);
    }, []);

    const gallery_filter = (itemData) => {
        const filterData = GalleryData.filter((item) => item.title === itemData);
        setData(filterData);
    };

    // Function to open the modal and set the selected image index
    const openModal = (index) => {
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedIndex(null);
    };

    // Function to handle previous image
    const prevImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    // Function to handle next image
    const nextImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="Gallery">
            <div className="galleryWrapper">
                <div className="filterItem">
                    <ul>
                        <li><button onClick={() => setData(GalleryData)}>All</button></li>
                        {collection.map((item, index) => (
                            <li key={index}>
                                <button onClick={() => gallery_filter(item)}>{item}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="galleryContainer">
                    {data.map((item, index) => (
                        <div key={item.id} className="galleryItem" onClick={() => openModal(index)}>
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Section */}
            {isModalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modalContent">
                        <img src={data[selectedIndex].image} alt={data[selectedIndex].title} className="modalImage" />
                    </div>
                    <button className="prev" onClick={prevImage}>&#10094;</button>
                    <button className="next" onClick={nextImage}>&#10095;</button>
                </div>
            )}
        </div>
    );
}

export default GalleryComp;
