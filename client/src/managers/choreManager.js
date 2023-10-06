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