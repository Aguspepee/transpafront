import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function novedadesGetAll(page, rowsPerPage, order, orderBy, search) {
    let token = localStorage.getItem("token")
    return instance.get(`novedades/?page=${page + 1}&rowsPerPage=${rowsPerPage}&order=${order}&orderBy=${orderBy}&${qs.stringify(search)}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function novedadCreate(page, rowsPerPage, order, orderBy, search) {
    let token = localStorage.getItem("token")
   
}
