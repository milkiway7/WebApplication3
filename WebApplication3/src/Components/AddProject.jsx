import React, { useState, useEffect } from 'react';
import { Modal, ModalTable } from './Modal';
import { addProjectConstants } from "../Constants/Constants";
import { createNewItemPOST, rejectItemPUT, mapStatuses } from "../Helpers/Helpers"

const AddProject = () => {
    const [formData, setFormData] = useState({
        id: 0,
        createdAt: null,
        createdBy: null,
        createdByEmail: null,
        status: addProjectConstants.statuses.emptyForm,
        projectName: null,
        client: "",
        shortDescription: null,
        department: "",
        process: "",
        linkTeams: null,
        projectCoordinator: "",
        timesheetCode: "",
        solutionArchitect: "",
        projectTeam: "",
        teamsChannelUrl: null,
        projectStartDate: null,
        projectEndDate: null,
        completion: null,
        deliverables: null,
        budget: null,
        supportingDocumentation: null
    })
    const isReadOnly = formData.status == addProjectConstants.statuses.rejected || addProjectConstants.statuses.newItem || addProjectConstants.statuses.created;

    useEffect(() => {
        console.log(formData)
        console.log("USE EFFECT")
    },[formData])
    function handleDataChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleModalData(field, newData) {
        setFormData((prevData) => ({
            ...prevData,
            [field]: newData
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const action = e.nativeEvent.submitter.value;

        console.log(action)

        switch (action) {
            case 'submit':
                createNewItemPOST(formData, setFormData);
                //fetch('/AddProject/AddProjectAsync', {
                //    method: 'POST',
                //    headers: {
                //        'Content-Type': 'application/json',
                //    },
                //    body: JSON.stringify(formData),
                //})
                //    .then(response => {
                //        if (!response.ok) {
                //            throw new Error(`HTTP error, project couldn't be processed / created'. Status: ${response.status}`);
                //        }
                //        return response.json()
                //    })
                //    .then(data => {
                //        if (data.success) {
                //            setFormData(prevData => ({
                //                ...prevData,
                //                id: data.id,
                //                status: data.status,
                //                createdBy: data.createdBy,
                //                createdAt: timeWithoutSeconds(data.createdAt)
                //            }))
                //        }
                //    })
                //    .catch((error) => {
                //        console.error('Error:', error);
                //    });
                break;
            case 'reject':
                rejectItemPUT(formData, setFormData);
                break;
        }
    };

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                {formData.status != addProjectConstants.statuses.emptyForm && <SystemInformation formData={formData} />}
                <GeneralInformation
                    handleDataChange={handleDataChange}
                    formData={formData}
                    isReadOnly={isReadOnly}
                />
                {formData.status != addProjectConstants.statuses.emptyForm && <Deliverables
                    deliverablesModal={addProjectConstants.deliverables}
                    handleModalData={handleModalData}
                    isReadOnly={isReadOnly}
                />}
                {formData.status != addProjectConstants.statuses.emptyForm && <Budget
                    budgetModal={addProjectConstants.budget}
                    handleModalData={handleModalData}
                    isReadOnly={isReadOnly}/>}
                {formData.status != addProjectConstants.statuses.emptyForm && <ProjectDetails
                    handleDataChange={handleDataChange}
                    formData={formData}
                    isReadOnly={isReadOnly}
                />}
                <AdditionalInformation isReadOnly={isReadOnly} />
                <FormButtons status={formData.status}/>
            </form>
        </div>
    )
}

const SystemInformation = ({ formData }) => {
    return (
        <div className="section">
            <h3>System information</h3>
            <div className="row mb-2">
                <div className="form-group col-3">
                    <label for="id" className="mb-1">ID</label>
                    <input id="id" type="number" className="form-control" name="id" value={formData.id} readOnly></input>
                </div>
                <div className="form-group col-3">
                    <label for="createdAt" className="mb-1">Created at</label>
                    <input id="createdAt" type="datetime-local" className="form-control" name="createdAt" value={formData.createdAt} readOnly></input>
                </div>
                <div className="form-group col-3">
                    <label for="createdByEmail" className="mb-1">Created by</label>
                    <input id="createdByEmail" type="text" className="form-control" name="createdByEmail" value={formData.createdByEmail} readOnly></input>
                </div>
                <div className="form-group col-3">
                    <label for="status" className="mb-1">Status </label>
                    <input id="status" type="text" className="form-control" name="status" value={mapStatuses(formData.status)} readOnly></input>
                </div>
            </div>
        </div>
    )
}

const GeneralInformation = ({ handleDataChange, formData, isReadOnly }) => {
    return (
        <div className="section">
            <h3>General information</h3>
            <div className="form-group mb-2">
                <label for="projectName" className="mb-1">Project</label>
                <input id="projectName" type="text" className="form-control" placeholder="Project name" name="projectName" value={formData.projectName} onChange={handleDataChange} readOnly={isReadOnly}></input>
            </div>
            <div className="form-group mb-2">
                <label for="client" className="mb-1">Client</label>
                <select id="client" class="form-select" name="client" value={formData.client} onChange={handleDataChange} disabled={isReadOnly}>
                    <option value="" disabled>Choose...</option>
                    <option value="Client 1">Client 1</option>
                    <option value="Client 2">Client 2</option>
                    <option value="Client 3">Client 3</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label for="shortDescription" className="mb-1">Short desctiption</label>
                <input id="shortDescription" type="text" className="form-control" name="shortDescription" value={formData.shortDescription} onChange={handleDataChange} readOnly={isReadOnly}></input>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="department" className="mb-1">Department</label>
                    <select id="department" className="form-select" name="department" value={formData.department} onChange={handleDataChange} disabled={isReadOnly}>
                        <option value="" disabled>Choose...</option>
                        <option value="Department 1">Department 1</option>
                        <option value="Department 2">Department 2</option>
                        <option value="Department 3">Department 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="process" className="mb-1">Process</label>
                    <select id="process" className="form-select" name="process" value={formData.process} onChange={handleDataChange} disabled={isReadOnly}>
                        <option value="" disabled>Choose...</option>
                        <option value="Process 1">Process 1</option>
                        <option value="Process2">Process 2</option>
                        <option value="Process 3">Process 3</option>
                    </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label for="link" className="mb-1">Link</label>
                <input id="link" type="text" className="form-control" name="link" value={formData.link} onChange={handleDataChange} readOnly={isReadOnly}></input>
            </div>
        </div>
    )
}

const ProjectDetails = ({ handleDataChange, formData, isReadOnly }) => {
    return (
        <div className="section">
            <h3>Project details</h3>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="projectCoordinator" className="mb-1">Project coordinator</label>
                    <select id="projectCoordinator" className="form-select" name="projectCoordinator" value={formData.projectCoordinator} onChange={handleDataChange} disabled={isReadOnly}>
                        <option value="" disabled>Choose...</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Project 3">Project 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="timesheetCode" className="mb-1">Timesheet code</label>
                    <select id="timesheetCode" className="form-select" name="timesheetCode" value={formData.timesheetCode} onChange={handleDataChange} disabled={isReadOnly}>
                        <option value="" disabled>Choose...</option>
                        <option value="Code 1">Code 1</option>
                        <option value="Code 2">Code 2</option>
                        <option value="Code 3">Code 3</option>
                    </select>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="solutionArchitect" className="mb-1">Solution architect</label>
                    <select id="solutionArchitect" className="form-select" name="solutionArchitect" value={formData.solutionArchitect} onChange={handleDataChange} disabled={isReadOnly}>
                        <option value="" disabled>Choose...</option>
                        <option value="Architect 1">Architect 1</option>
                        <option value="Architect 2">Architect 2</option>
                        <option value="Architect 3">Architect 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="projectTeam" className="mb-1">Project team</label>
                    <select id="projectTeam" className="form-select" name="projectTeam" value={formData.projectTeam} onChange={handleDataChange} disabled={isReadOnly}>
                        <option value="" disabled>Choose...</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Project 3">Project 3</option>
                    </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label for="linkTeams" className="mb-1">Teams channel URL</label>
                <input id="linkTeams" type="text" className="form-control" name="teamsChannelUrl" value={formData.teamsChannelUrl} onChange={handleDataChange} readOnly={isReadOnly}></input>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="projectStartDate" className="mb-1">Project start date</label>
                    <input id="projectStartDate" type="datetime-local" className="form-control" name="projectStartDate" value={formData.projectStartDate} onChange={handleDataChange} readOnly={isReadOnly}></input>
                </div>
                <div className="col-6 form-group">
                    <label for="projectEndDate" className="mb-1">Project end date</label>
                    <input id="projectEndDate" type="datetime-local" className="form-control" name="projectEndDate" value={formData.projectEndDate} onChange={handleDataChange} readOnly={isReadOnly}></input>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="completion" className="mb-1">Completion (%)</label>
                    <input id="completion" type="text" className="form-control" name="completion" value={formData.completion} onChange={handleDataChange} readOnly={isReadOnly}></input>
                </div>
            </div>
        </div>
    )
}

const Deliverables = ({ deliverablesModal, handleModalData, isReadOnly }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dataForTable, setDataForTable] = useState([])

    function handleDataFromModal(newItems) {
        setDataForTable(prevItems => [...prevItems, newItems])
    }
    function showModal() {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        handleModalData('deliverables', dataForTable)
    }, [dataForTable])

    return (
        <div className="section">
            <h3>Deliverables</h3>
            {!isReadOnly && <div className="d-flex ">
                <button type="button" onClick={showModal}>Deliverables</button>
            </div>}
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

const Budget = ({ budgetModal, handleModalData, isReadOnly }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [dataForTable, setDataForTable] = useState([])

    function handleDataFromModal(newItems) {
        setDataForTable(prevItems => [...prevItems, newItems])
    }
    function showModal() {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        handleModalData('budget', dataForTable)
    }, [dataForTable])
    return (
        <div className="section">
            <h3>Budget</h3>
            {!isReadOnly && <div className="d-flex ">
                <button type="button" onClick={showModal}>Budget</button>
            </div>}
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

const AdditionalInformation = ({ isReadOnly }) => {
    return (
        <div className="section">
            <h3>Additional information</h3>
            <div className="form-group">
                <label for="supportingDocumentation" className="mb-1">Supporting documentation</label>
                <input id="supportingDocumentation" type="file" className="form-control" readOnly={isReadOnly}></input>
            </div>
        </div>
    )
}

const FormButtons = ({ status }) => {
    const renderButtons = () => {
        switch (status) {
            case addProjectConstants.statuses.emptyForm:
                return <div className="form-buttons-list">
                    <button type="submit" name="action" value="submit">Add project</button>
                </div>
                break;
            case addProjectConstants.statuses.newItem:
                return (<div className="form-buttons-list">
                    <button type="submit" name="action" value="reject">Reject</button>
                    <button type="submit" >Send to correction</button>
                    <button type="submit" >Approve</button>
                </div>)
                break;
            case addProjectConstants.statuses.correction:
                return (<div className="form-buttons-list">
                    <button type="submit" >Send for approval</button>
                </div>)
                break;
        }
    }

    return (
        <div>
            {renderButtons() }
        </div>
    )
}

export default AddProject;