const _apiUrl = "/api/chore";

export const getChores = () => {
    return fetch(`${_apiUrl}`).then((res) => res.json());
};

export const getChoreDetails = (choreId) => {
    return fetch(`${_apiUrl}/${choreId}`).then((res) => res.json());
};

export const deleteChore = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE"
    });
};

export const createChore = (newChoreObj) => {
    return fetch(`${_apiUrl}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newChoreObj)
    }).then((res) => res.json());
};

// options for the below 3:
// 1. if API endpoint is returning NoContent() - do not include a response (because undefined
// cannot be parsed to json)
// 2. otherwise, change API endpoint to Ok(newObjHere) and keep the response pattern below

export const completeChore = (choreId, userId) => {
    const responseBody = {
        choreId: choreId,
        userId: userId
    }
    
    return fetch(`${_apiUrl}/${choreId}/complete?userId=${userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(responseBody)
    }).then((res) => res.json());
};

export const assignChore = (choreId, userId) => {
    const responseBody = {
        choreId: choreId,
        userId: userId
    }

    return fetch(`${_apiUrl}/${choreId}/assign?userId=${userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(responseBody)
    }).then((res) => res.json());
};

export const unassignChore = (choreId, userId) => {
    const responseBody = {
        choreId: choreId,
        userId: userId
    }

    return fetch(`${_apiUrl}/${choreId}/unassign?userId=${userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(responseBody)
    }).then((res) => res.json());
};