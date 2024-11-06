import React, { useState, useEffect } from 'react';
import { Modal, ModalTable } from './Modal';
import { addProjectConstants } from "../Constants/Constants";

    const AddProject = () => {
        const [formData, setFormData] = useState({
            status: 0,
            projectName: null,
            client: null,
            shortDescription: null,
            department: null,
            process: null,
            linkTeams: null,
            projectCoordinator: null,
            timesheetCode: null,
            solutionArchitect: null,
            projectTeam: null,
            teamsChannelUrl: null,
            projectStartDate: null,
            projectEndDate: null,
            completion: null,
            deliverables: null,
            budget: null,
            supportingDocumentation: null
        })

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

            e.preventDefault();

            setFormData((prevData) => ({
                ...prevData,
                status: prevData.status + 1
            }))

            fetch('/AddProject/AddProjectAsync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json() })
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };

        return (
            <div className="container row">
                <form className="col-9" method="post" onSubmit={ handleSubmit }>
                    <GeneralInformation
                        handleDataChange={handleDataChange}
                        formData={ formData }
                        />
                    <Deliverables
                        deliverablesModal={addProjectConstants.deliverables}
                        handleModalData={handleModalData}
                    />
                    <Budget
                        budgetModal={addProjectConstants.budget}
                        handleModalData={handleModalData} />
                    <ProjectDetails
                        handleDataChange={handleDataChange}
                        formData={formData}
                    />
                    <AdditionalInformation />
                    <div>
                        <button type="submit">Add project</button>
                    </div>
                </form>
            </div>
        )
    }


const GeneralInformation = ({ handleDataChange, formData }) => {
    return (
        <div>
            <h2>General information</h2>
            <div className="form-group mb-2">
                <label for="projectName" className="mb-1">Project</label>
                <input id="projectName" type="text" className="form-control" placeholder="Project name" name="projectName" value={formData.projectName} onChange={ handleDataChange }></input>
            </div>
            <div className="form-group mb-2">
                <label for="client" className="mb-1">Client</label>
                <select id="client" class="form-select" name="client" value={formData.client} onChange={handleDataChange}>
                    <option value="" disabled>Choose...</option>
                    <option value="Client 1">Client 1</option>
                    <option value="Client 2">Client 2</option>
                    <option value="Client 3">Client 3</option>
                </select>
            </div>
            <div className="form-group mb-2">
                <label for="shortDescription" className="mb-1">Short desctiption</label>
                <input id="shortDescription" type="text" className="form-control" name="shortDescription" value={formData.shortDescription} onChange={handleDataChange }></input>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="department" className="mb-1">Department</label>
                    <select id="department" className="form-select" name="department" value={formData.department} onChange={handleDataChange}>
                        <option value="" disabled>Choose...</option>
                        <option value="Department 1">Department 1</option>
                        <option value="Department 2">Department 2</option>
                        <option value="Department 3">Department 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="process" className="mb-1">Process</label>
                    <select id="process" className="form-select" name="process" value={formData.process} onChange={handleDataChange}>
                        <option value="" disabled>Choose...</option>
                        <option value="Process 1">Process 1</option>
                        <option value="Process2">Process 2</option>
                        <option value="Process 3">Process 3</option>
                    </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label for="link" className="mb-1">Link</label>
                <input id="link" type="text" className="form-control" name="link" value={formData.link} onChange={handleDataChange }></input>
            </div>
        </div>
    )
}

const ProjectDetails = ({ handleDataChange, formData }) => {
    return (
        <div>
            <h2>Project details</h2>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="projectCoordinator" className="mb-1">Project coordinator</label>
                    <select id="projectCoordinator" className="form-select" name="projectCoordinator" value={formData.projectCoordinator} onChange={handleDataChange }>
                        <option value="" disabled>Choose...</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Project 3">Project 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="timesheetCode" className="mb-1">Timesheet code</label>
                    <select id="timesheetCode" className="form-select" name="timesheetCode" value={formData.timesheetCode} onChange={handleDataChange}>
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
                    <select id="solutionArchitect" className="form-select" name="solutionArchitect" value={formData.solutionArchitect} onChange={handleDataChange}>
                        <option value="" disabled>Choose...</option>
                        <option value="Architect 1">Architect 1</option>
                        <option value="Architect 2">Architect 2</option>
                        <option value="Architect 3">Architect 3</option>
                    </select>
                </div>
                <div className="col-6 form-group">
                    <label for="projectTeam" className="mb-1">Project team</label>
                    <select id="projectTeam" className="form-select" name="projectTeam" value={formData.projectTeam} onChange={handleDataChange}>
                        <option value="" disabled>Choose...</option>
                        <option value="Project 1">Project 1</option>
                        <option value="Project 2">Project 2</option>
                        <option value="Project 3">Project 3</option>
                    </select>
                </div>
            </div>
            <div className="form-group mb-2">
                <label for="linkTeams" className="mb-1">Teams channel URL</label>
                <input id="linkTeams" type="text" className="form-control" name="teamsChannelUrl" value={formData.teamsChannelUrl} onChange={handleDataChange}></input>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="projectStartDate" className="mb-1">Project start date</label>
                    <input id="projectStartDate" type="datetime-local" className="form-control" name="projectStartDate" value={formData.projectStartDate} onChange={handleDataChange}></input>
                </div>
                <div className="col-6 form-group">
                    <label for="projectEndDate" className="mb-1">Project end date</label>
                    <input id="projectEndDate" type="datetime-local" className="form-control" name="projectEndDate" value={formData.projectEndDate} onChange={handleDataChange}></input>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-6 form-group">
                    <label for="completion" className="mb-1">Completion (%)</label>
                    <input id="completion" type="text" className="form-control" name="completion" value={formData.completion} onChange={handleDataChange}></input>
                </div>
            </div>
        </div>
    )
}

const Deliverables = ({ deliverablesModal, handleModalData }) => {
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

const Budget = ({ budgetModal, handleModalData }) => {
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