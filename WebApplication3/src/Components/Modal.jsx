import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export const Modal = ({ isOpen, showDeliverableModal, modalData }) => {

    useEffect(() => {
        modalFunctionality(isOpen);

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isOpen])

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            showDeliverableModal();
        }
    };

    return (
        <>
            <div className="modal-style p-4">
                <div className="modal-topbar mb-4">
                    <h3>{modalData.title}</h3>
                    <button type="button" style={{ all: 'unset' }}>
                        <IoMdClose size={24} style={{ cursor: "pointer" }} onClick={showDeliverableModal} />
                    </button>
                </div>
                <form>
                    {modalData.fields.map(field => {
                        return (
                            <div className="form-group mb-2">
                                <label for={field.id} className="mb-1">{field.label}</label>
                                {field.options ? <select id={field.id} className="form-select">
                                    {field.options.map(option => {
                                        return (
                                            <option value="option">{option}</option>
                                        )
                                    })}
                                </select> : <input id={field.id} className="form-control" type={field.type}></input>}
                            </div>
                        )
                    })}
                </form>
            </div>
            <div className={isOpen ? 'overlay active' : ''} onClick={handleOverlayClick}></div>
        </>
    )
}

function modalFunctionality(isOpen) {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    }
}
