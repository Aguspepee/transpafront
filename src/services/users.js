import instance from "../config/axios"

//rutas Axios
export function userRegister(user) {
    return instance.post(`users/register`, user)
}

export function userGetAll(user) {
    return instance.get(`users/`)
}

//Search
export function userSearch(nombre) {
    return instance.get(`users/search?nombre=${nombre}`)
}

//Get Names 
export function userGetNames() {
    return instance.get(`users/names`)
}

export function userLogin(user) {
    return instance.post(`users/login`, user)
}

export function userLogout() {
    localStorage.removeItem('token');
}

export function userWhoami() {
    return instance.post(`users/whoami`, "hola")
}

export function userEdit(user, id) {
    return instance.put(`users/edit/${id}`, user)
}

export function userDelete(id) {
    return instance.delete(`users/${id}`)
}

export function userOne(id) {
    return instance.get(`users/one/${id}`)
}


export function userImage(id, formData) {
    return instance.put(`users/image/${id}-users`, formData)
}

export function userUpdate() {
    return instance.put(`users/update`)
}