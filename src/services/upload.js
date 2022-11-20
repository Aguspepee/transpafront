import instance from "../config/axios"

export function deleteAll(dbSubBaseURL) {
    return instance.delete(`${dbSubBaseURL}/`)
}

export function createAll(dbSubBaseURL, json) {
    let token = localStorage.getItem("token")
    return instance.post(`${dbSubBaseURL}/`, json, {
        headers: { Authorization: `Bearer ${token}` }
    })
}