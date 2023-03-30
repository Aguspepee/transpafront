import instance from "../config/axios"
import * as qs from 'qs'

//rutas Axios
//Get ALL
export function indisponibilidadesGetAll(page, rowsPerPage, order, orderBy, search) {
    return instance.get(`indisponibilidades/?page=${page + 1}&rowsPerPage=${rowsPerPage}&order=${order}&orderBy=${orderBy}&${qs.stringify(search)}`)
}
