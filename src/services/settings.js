import instance from "../config/axios"

//rutas Axios
//Get ALL
export function settingGetAll() {
    return instance.get(`settings/`)
}