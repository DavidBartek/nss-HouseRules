const _apiUrl = "/api/userprofile";

export const getUsers = () => {
    return fetch(`${_apiUrl}`).then((res) => res.json());
}

export const getUserProfiles = () => {
    return fetch(`${_apiUrl}/withroles`).then((res) => res.json());
}

export const getUserProfileDetails = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
}