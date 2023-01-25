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
    const fecha_inicio = search?.fecha_inicio ? new Date(search?.fecha_inicio).toISOString() : new Date(2020,0,1)
    const fecha_fin = search?.fecha_fin ? new Date(search?.fecha_fin).toISOString() : new Date()
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/lineas-novedades/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&inspecciones=${search?.inspecciones}&fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function cantidadInspecciones({ search,inspecciones }) {
    const fecha_inicio = search?.fecha_inicio ? new Date(search?.fecha_inicio).toISOString() : new Date(2020,0,1)
    const fecha_fin = search?.fecha_fin ? new Date(search?.fecha_fin).toISOString() : new Date()
    let token = localStorage.getItem("token")
    return instance.get(`piquetes/cantidad-inspecciones/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&inspecciones=${inspecciones}&fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}