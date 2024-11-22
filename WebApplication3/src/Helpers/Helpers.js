export function timeWithoutSeconds(date) {

    return date.slice(0, 16);
}
export function createNewItemPOST(formData, setFormData) {
    console.log(formData)
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
                    status: data.status,
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
export function rejectItemPUT(formData, setFormData) {
    console.log(formData)

    fetch("AddProject/RejectProjectAsync", {
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