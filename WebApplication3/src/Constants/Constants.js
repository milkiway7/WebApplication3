export const addProjectConstants = {
    deliverables: {
        title: "Deliverables",
        fields: [
            {
                id:"name",
                label: "Name",
                type: "text",
                options: null
            },
            {
                id:"state",
                label: "State",
                type: "select",
                options: ["Done", "In progress", "Not started", "On hold", "Rejected", "Testing phase"]
            }
        ]
    }
}



