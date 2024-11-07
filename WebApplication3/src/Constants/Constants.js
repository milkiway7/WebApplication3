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
    },
    budget: {
        title: "Budget",
        fields: [
            {
                id: "position",
                label: "Position",
                type: "text",
                options: null
            },
            {
                id: "budget",
                label: "Budget",
                type: "number",
                options: null
            },
            {
                id: "consumedBudget",
                label: "Consumed budget",
                type: "number",
                options: null
            },
            {
                id: "remainingBudget",
                label: "Remaining budget",
                type: "number",
                options: null
            }
        ]
    }
}



