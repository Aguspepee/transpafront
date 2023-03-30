import instance from "../config/axios"

//rutas Axios
//Get ALL
export function equiposGetAll({ zonas, lineas }) {
    return instance.get(`equipos/?zonas=${zonas}&lineas=${lineas}`)
}
