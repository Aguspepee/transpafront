import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function equiposGetAll({ zonas, lineas }) {
    let token = localStorage.getItem("token")
    return instance.get(`equipos/?zonas=${zonas}&lineas=${lineas}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}
