import instance from "../config/axios"

//rutas Axios
//Get ALL
export function DIMA({ year, month }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA?year=${year}&month=${month}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}
