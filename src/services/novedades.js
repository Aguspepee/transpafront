import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function novedadesGetAll({ zonas, lineas }) {
    return instance.get(`novedades/?zonas=${zonas}&lineas=${lineas}`)
}

export function novedadesGetWithMeta({ search }) {
    return instance.get(`novedades/withmeta/?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&reparadas=${search.reparadas}&historico=${search.historico}`)
}

export function novedadesCantidades({ search }) {
    return instance.get(`novedades/cantidades?zonas=${search.zonas}&lineas=${search.lineas}&codigos=${search?.codigos?.toString()}&reparadas=${search.reparadas}&historico=${search.historico}`)
}