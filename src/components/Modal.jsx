import React from "react";

const Modal =  ({imageUrl, altText, closeModal}) => {
    return(
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
                <img src={imageUrl} alt={altText} />
            </div>
        </div>
    );
};

export default Modal;