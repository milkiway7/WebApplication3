export const addProjectConstants = {
    deliverables: {
        title: "Deliverables",
        fields: {
            name: {
                label: "Name",
                type: "text",
                options: null
            },
            state: {
                label: "State",
                type: "select",
                options: ["Done","In progress","Not started","On hold","Rejected","Testing phase"]
            }
        }
    }
}