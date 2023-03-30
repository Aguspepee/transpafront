import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function piquetesGetAll({ zonas, lineas }) {
    return instance.get(`piquetes/?zonas=${zonas}&lineas=${lineas}`)
}

export function zonasGet() {
    return instance.get(`piquetes/zonas`)
}

export function lineasGet({ search }) {
    return instance.get(`piquetes/lineas/?zonas=${search?.zonas}`)
}

export function piquetesPorLinea() {
    return instance.get(`piquetes/piquetes-por-linea`)
}

export function lineasNovedadesGet({ search }) {
    const fecha_inicio = search?.fecha_inicio ? new Date(search?.fecha_inicio).toISOString() : new Date(2020, 0, 1)
    const fecha_fin = search?.fecha_fin ? new Date(search?.fecha_fin).toISOString() : new Date()
    return instance.get(`piquetes/lineas-novedades/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&inspecciones=${search?.inspecciones}&fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`)
}

export function cantidadInspecciones({ search, inspecciones }) {
    const fecha_inicio = search?.fecha_inicio ? new Date(search?.fecha_inicio).toISOString() : new Date(2020, 0, 1)
    const fecha_fin = search?.fecha_fin ? new Date(search?.fecha_fin).toISOString() : new Date()
    return instance.get(`piquetes/cantidad-inspecciones/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&inspecciones=${inspecciones}&fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`)
}