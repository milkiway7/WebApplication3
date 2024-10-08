import React from 'react';

const AddProject = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group mb-2">
                    <label for="projectName" className="mb-1">Project</label>
                    <input id="projectName" type="text" className="form-control" placeholder="Project name"></input>
                </div>
                <div className="form-group mb-2">
                    <label for="client" className="mb-1">Client</label>
                    <select id="client" class="form-select">
                        <option value="1">Client 1</option>
                        <option value="2">Client 2</option>
                        <option value="3">Client 3</option>
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
                            <option value="1">Department 1</option>
                            <option value="2">Department 2</option>
                            <option value="3">Department 3</option>
                        </select>
                    </div>
                    <div className="col-6 form-group">
                        <label for="process" className="mb-1">Process</label>
                        <select id="process" className="form-select">
                            <option value="1">Process 1</option>
                            <option value="2">Process 2</option>
                            <option value="3">Process 3</option>
                        </select>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <label for="link" className="mb-1">Link</label>
                    <input id="link" type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="supportingDocumentation" className="mb-1">Supporting documentation</label>
                    <input id="supportingDocumentation" type="file" className="form-control"></input>
                </div>
            </form>
        </div>
    )
}

export default AddProject;