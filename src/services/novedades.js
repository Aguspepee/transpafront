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

export function novedadesGetWithMeta({ search }) {
    let token = localStorage.getItem("token")
    return instance.get(`novedades/withmeta/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&reparadas=${search.reparadas}&historico=${search.historico}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function novedadesCantidades({ search }) {
    let token = localStorage.getItem("token")
    return instance.get(`novedades/cantidades?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&reparadas=${search.reparadas}&historico=${search.historico}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}