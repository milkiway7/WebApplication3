import React from 'react';

const AddProject = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="projectName">Project</label>
                    <input id="projectName" type="text" className="form-control" placeholder="Project name"></input>
                </div>
            </form>
        </div>
    )
}

export default AddProject;