import React, { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from 'react-router-dom';
import "./PopUp.css";

export default function PopUp() {
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsPopupOpen(false);
        navigate('/menu');
    };

    const closeModal = () => {
        setIsPopupOpen(false);
    };

    return (
        <ReactModal
            isOpen={isPopupOpen}
            onRequestClose={closeModal}
            contentLabel="Meal Plan Popup"
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTocOTXm6xCGTUptagh487IAlV0k6sYiPjPFAg5_qgepvVFL165MaPn_HZO-f7Xfe1Fd-U&usqp=CAU" alt="My Image" />
            </div>
            <div className="popup-header">Create The Meal Plan For Your Trip</div>
            <div className="popup-text">Assist the Tripme airline in minimizing food wastage while enjoying a personalized dining experience. Choose your meals well in advance during the entire flight and earn extra points as a bonus.</div>

            <button className="popup-button" onClick={handleClick}>
                <p className='popup-btn-text'>Create your Meal Plan</p>
            </button>
        </ReactModal>
    );
}