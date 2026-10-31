export const changeComplitedTaskAtion = (taskId) => {
    return { id: taskId, type: "change" }
};

export const changeStatusAtion = (status) => {
    return { status: status, type: "status" }
};

export const deleteAtion = (taskId) => {
    return { id: taskId, type: "delete" }
};

export const addAtion = (text) => {
    return { text: text, type: "add"}
};