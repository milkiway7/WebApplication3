export function timeWithoutSeconds(date) {

    return date.slice(0, 16);
}

export function mapStatuses(statusNumber) {
    switch (statusNumber) {
        case 1:
            return "New item"
            break;
        case 2:
            return "Correction"
            break;
        case 3:
            return "Rejected"
            break;
        case 4:
            return "Created"
            break;
        default:
            return "Unknown"
    }
}
export function processForm(setFormData, updatedStatus, httpRequest) {
    setFormData(prevData => {

        const updatedData = {
            ...prevData,
            status: updatedStatus
        }

        httpRequest(updatedData, setFormData);

        return updatedData;
    })
}
export function createNewItemPOST(formData, setFormData) {
    fetch('/AddProject/AddProjectAsync', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error, project couldn't be processed / created'. Status: ${response.status}`);
            }
            return response.json()
        })
        .then(data => {
            if (data.success) {
                setFormData(prevData => ({
                    ...prevData,
                    id: data.id,
                    createdBy: data.createdBy,
                    createdAt: timeWithoutSeconds(data.createdAt),
                    createdByEmail: data.createdByEmail
                }))
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
export function updateFormStatus(formData, setFormData) {
    fetch("AddProject/UpdateFormStatus", {
        method: "PUT",
        headers: {
            'Content-Type':"application/json"
        },
        body: JSON.stringify(formData)
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, project couldn't be processed / rejected. Status: ${response.stauts}`)
        }

        return response.json();
    }).then((data) => {
        if (data.success) {
            setFormData((prevData) => ({
                ...prevData,
                status: data.status
            }))
        }
    }).catch((error) => {
        console.error('Error:', error)
    })
}
