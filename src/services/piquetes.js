import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function piquetesGetAll({ zonas, lineas }) {
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/?zonas=${zonas}&lineas=${lineas}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function zonasGet() {
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/zonas`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function lineasGet({ search }) {
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/lineas/?zonas=${search?.zonas}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function lineasNovedadesGet({ search }) {
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/lineas-novedades/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}