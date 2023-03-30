import instance from "../config/axios"

export function deleteAll(dbSubBaseURL) {
    return instance.delete(`${dbSubBaseURL}/`)
}

export function createAll(dbSubBaseURL, json) {

    return instance.post(`${dbSubBaseURL}/`, json)
}