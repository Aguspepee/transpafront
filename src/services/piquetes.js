import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function piquetesGetAll({ zonas, lineas }) {
    console.log(zonas)
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/?zonas=${zonas}&lineas=${lineas}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function lineasNovedadesGet({ zonas, lineas }) {
    console.log(zonas)
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/lineas-novedades/?zonas=${zonas}&lineas=${lineas}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}