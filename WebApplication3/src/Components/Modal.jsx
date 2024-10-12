import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Modal = ({ isOpen, showModal, modalData }) => {
    const items = modalData.fields.map(field=> field.id);
    const [states, setStates] = useState(items.map(() => ''));
    
    useEffect(() => {
        modalFunctionality(isOpen);

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isOpen])
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            showModal();
        }
    };

    return (
        <>
            <div className="modal-style p-4">
                <div className="modal-topbar mb-4">
                    <h3>{modalData.title}</h3>
                    <button type="button" style={{ all: 'unset' }}>
                        <IoMdClose size={24} style={{ cursor: "pointer" }} onClick={showModal} />
                    </button>
                </div>
                <form>
                    {modalData.fields.map((field ,index)=> {
                        return (
                            <div className="form-group mb-2">
                                <label for={field.id} className="mb-1">{field.label}</label>
                                {field.options ? <select id={field.id} className="form-select" value={states[index]} onChange={(e) => updateStates(index, e.target.value, states, setStates) }>
                                    {field.options.map(option => {
                                        return (
                                            <option value={ option }>{option}</option>
                                        )
                                    })}
                                </select> : <input id={field.id} className="form-control" type={field.type} value={states[index]} onChange={(e) => updateStates(index, e.target.value, states, setStates)}></input>}
                            </div>
                        )
                    })}
                </form>



                <div>
                    {states.map((state, index) => {
                        return (
                            <p>{state}</p>

                        )
                    })}
                </div>



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

function updateStates(index, value, states, setStates){
    const newStates = [...states]
    newStates[index] = value
    setStates(newStates)
}

export const ModalTable = () => {

}