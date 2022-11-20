import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function novedadesGetAll({ zonas, lineas }) {
    let token = localStorage.getItem("token")
    return instance.get(`novedades/?zonas=${zonas}&lineas=${lineas}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function novedadesGetWithMeta({ search,codigos }) {
    let token = localStorage.getItem("token")
    return instance.get(`novedades/withmeta/?zonas=${search.zonas}&lineas=${search.lineas},&codigos=${codigos}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}