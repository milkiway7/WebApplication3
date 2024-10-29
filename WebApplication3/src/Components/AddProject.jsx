﻿import React, { useState } from 'react';
import { Modal, ModalTable } from './Modal';
import { addProjectConstants } from "../Constants/Constants";

const AddProject = () => {
    return (
        <div className="container row">
            <form className="col-9">
                <GeneralInformation />
                <ProjectDetails />
                <Deliverables
                    deliverablesModal={addProjectConstants.deliverables}
                />
                <Budget budgetModal={addProjectConstants.budget} />
                <AdditionalInformation />
            </form>
        </div>
    )
}


const GeneralInformation = () => {
    return (
        <div>
            <h2>General information</h2>
            <div className="form-group mb-2">
                <label for="projectName" className="mb-1">Project</label>
                <input id="projectName" type="text" className="form-control" placeholder="Project name"></input>
            </div>
            <div className="form-group mb-2">
                <label for="client" className="mb-1">Client</label>
                <select id="client" class="form-select">
                    <option value="Client 1">Client 1</option>
                    <option value="Client 2">Client 2</option>
                    <option value="Client 3">Client 3</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label for="shortDescription" className="mb-1">Short desctiption</label>
                <input id="shortDescription" type="text" className="form-control"></input>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="department" className="mb-1">Department</label>
                    <select id="department" className="form-select">
                        <option value="Department 1">Department 1</option>
                        <option value="Department 2">Department 2</option>
                        <option value="Department 3">Department 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="process" className="mb-1">Process</label>
                    <select id="process" className="form-select">
                        <option value="Process 1">Process 1</option>
                        <option value="Process2">Process 2</option>
                        <option value="Process 3">Process 3</option>
                    </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label for="link" className="mb-1">Link</label>
                <input id="link" type="text" className="form-control"></input>
            </div>
        </div>
    )
}

const ProjectDetails = () => {
    return (
        <div>
            <h2>Project details</h2>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="projectCoordinator" className="mb-1">Project coordinator</label>
                    <select id="projectCoordinator" className="form-select">
                        <option value="1">Project 1</option>
                        <option value="2">Project 2</option>
                        <option value="3">Project 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="timesheetCode" className="mb-1">Timesheet code</label>
                    <select id="timesheetCode" className="form-select">
                        <option value="1">Code 1</option>
                        <option value="2">Code 2</option>
                        <option value="3">Code 3</option>
                    </select>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="solutionArchitect" className="mb-1">Solution architect</label>
                    <select id="solutionArchitect" className="form-select">
                        <option value="1">Architect 1</option>
                        <option value="2">Architect 2</option>
                        <option value="3">Architect 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="projectTeam" className="mb-1">Project team</label>
                    <select id="projectTeam" className="form-select">
                        <option value="1">Project 1</option>
                        <option value="2">Project 2</option>
                        <option value="3">Project 3</option>
                    </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label for="linkTeams" className="mb-1">Teams channer URL</label>
                <input id="linkTeams" type="text" className="form-control"></input>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="projectStartDate" className="mb-1">Project start date</label>
                    <input id="projectStartDate" type="datetime-local" className="form-control"></input>
                </div>
                <div className="col-6 form-group">
                    <label for="projectEndDate" className="mb-1">Project end date</label>
                    <input id="projectEndDate" type="datetime-local" className="form-control"></input>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="completion" className="mb-1">Completion (%)</label>
                    <input id="completion" type="text" className="form-control"></input>
                </div>
            </div>
        </div>
    )
}

const Deliverables = ({ deliverablesModal }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dataForTable, setDataForTable] = useState([])

    function handleDataFromModal(newItems) {
        setDataForTable(prevItems => [...prevItems, newItems])
    }
    function showModal() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <h2>Deliverables</h2>
            <div className="d-flex ">
                <button type="button" className="ms-auto" onClick={showModal}>Deliverables</button>
            </div>
            {isOpen && <Modal
                isOpen={isOpen}
                showModal={showModal}
                modalData={deliverablesModal}
                handleDataFromModal={handleDataFromModal}
            />}
            <ModalTable
                modalData={deliverablesModal}
                dataForTable={dataForTable}
            />
        </div>
    )
}

const Budget = ({ budgetModal }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dataForTable, setDataForTable] = useState([])

    function handleDataFromModal(newItems) {
        setDataForTable(prevItems => [...prevItems, newItems])
    }
    function showModal() {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <h2>Budget</h2>
            <div className="d-flex ">
                <button type="button" className="ms-auto" onClick={showModal}>Budget</button>
            </div>
            {isOpen && <Modal
                isOpen={isOpen}
                showModal={showModal}
                modalData={budgetModal}
                handleDataFromModal={handleDataFromModal}
            />}
            <ModalTable
                modalData={budgetModal}
                dataForTable={dataForTable}
            />
        </div>
    )
}

const AdditionalInformation = () => {
    return (
        <div>
            <h2>Additional information</h2>
            <div className="form-group">
                <label for="supportingDocumentation" className="mb-1">Supporting documentation</label>
                <input id="supportingDocumentation" type="file" className="form-control"></input>
            </div>
        </div>
    )
}

export default AddProject;