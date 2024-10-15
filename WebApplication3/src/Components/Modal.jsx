import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export const Modal = ({ isOpen, showModal, modalData, handleDataFromModal }) => {
    const items = modalData.fields.map(field => field.id);
    const [states, setStates] = useState(items.map(() => ''));

    useEffect(() => {
        modalBackgroundOverflow(isOpen);

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isOpen])
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('overlay')) {
            showModal();
        }
    };
    const sendDataToParent = () => {
        const hasEmptyInputs = states.some(state => state.trim() === "")

        if (hasEmptyInputs) {
            alert("Please fill out all fields before submitting.")
            return
        }

        handleDataFromModal(states)
    }

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
                    {modalData.fields.map((field, index) => {
                        return (
                            <div className="form-group mb-2">
                                <label for={field.id} className="mb-1">{field.label}</label>
                                <span className="text-danger">*</span>
                                {field.options ? <select id={field.id} className="form-select" value={states[index]} onChange={(e) => updateStates(index, e.target.value, states, setStates)}>
                                    <option value="" disabled>Choose...</option>
                                    {field.options.map(option => {
                                        return (
                                            <option value={option}>{option}</option>
                                        )
                                    })}
                                </select> : <input id={field.id} className="form-control" type={field.type} value={states[index]} onChange={(e) => updateStates(index, e.target.value, states, setStates)}></input>}
                            </div>
                        )
                    })}
                </form>
                <div className="d-flex justify-content-center mt-4">
                    <button type="button" onClick={() => { sendDataToParent(); showModal() }}>Add</button>
                </div>
            </div>
            <div className={isOpen ? 'overlay active' : ''} onClick={handleOverlayClick}></div>
        </>
    )
}

function modalBackgroundOverflow(isOpen) {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    }
}

function updateStates(index, value, states, setStates) {
    const newStates = [...states]
    newStates[index] = value
    setStates(newStates)
}

export const ModalTable = ({ isOpen, modalData, dataForTable }) => {

    var modalHasData = dataForTable.length !== 0;

    if (!modalHasData) {
        return null
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id.</th>
                    {modalData.fields.map(field => {
                        return (
                            <th>{field.label}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {dataForTable.map((row, index) => {
                    return (
                        <tr>
                            <th>{ index + 1}</th>
                            {row.map(col => {
                                return (
                                    <th>{col}</th>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
