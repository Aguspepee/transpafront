import instance from "../config/axios"

//rutas Axios
export function userRegister(user) {
    let token = localStorage.getItem("token")
    return instance.post(`users/register`, user, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userGetAll(user) {
    let token = localStorage.getItem("token")
    return instance.get(`users/`, {
        headers: { Authorization: `Bearer ${token}` }
    })
} 

//Search
export function userSearch(nombre) {
    let token = localStorage.getItem("token")
    return instance.get(`users/search?nombre=${nombre}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

//Get Names 
export function userGetNames() {
    let token = localStorage.getItem("token")
    return instance.get(`users/names`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userLogin(user) {
    return instance.post(`users/login`, user)
}

export function userLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}

export function userWhoami() {
    let token = localStorage.getItem("token")

    return instance.post(`users/whoami`, "hola", {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userEdit(user, id) {
    let token = localStorage.getItem("token")
    return instance.put(`users/edit/${id}`, user, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userDelete(id) {
    let token = localStorage.getItem("token")
    return instance.delete(`users/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userOne(id) {
    let token = localStorage.getItem("token")
    return instance.get(`users/one/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userImage(id, formData) {
    console.log(formData)
    let token = localStorage.getItem("token")
    return instance.put(`users/image/${id}-users`, formData, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function userUpdate() {
    let token = localStorage.getItem("token")
    return instance.put(`users/update`, {}, {
        headers: { Authorization: `Bearer ${token}` }
    })
}