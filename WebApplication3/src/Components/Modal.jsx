import React, { useEffect } from "react";

export const Modal = ({ isOpen }) => {

    useEffect(() => {
        modalFunctionality(isOpen);

        return () => {
            document.body.style.overflow = "auto"; // Przywracanie przewijania
        };

    }, [isOpen])

    return (
        <>
            <div className="modal-style">
                <h3>Deliverables ja</h3>
            </div>
            <div className={isOpen ? 'overlay active' : ''}></div>
        </>

    )
}

function modalFunctionality(isOpen) {
    if (isOpen) {
        document.body.style.overflow = "hidden"; // block scrolling
    }
}
