import instance from "../config/axios"

//rutas Axios
//Get ALL

//-------------ARRAY------------//
export function DIMA({ start, end }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DIMA-array?start=${start.toISOString()}&end=${end.toISOString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DLFValue({ start, end }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DLF-array?start=${start.toISOString()}&end=${end.toISOString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DLPValue({ start, end  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DLP-array?start=${start.toISOString()}&end=${end.toISOString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DTNValue({ start, end  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DTN-array?start=${start.toISOString()}&end=${end.toISOString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DCFValue({ start, end  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DCF-array?start=${start.toISOString()}&end=${end.toISOString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}


//--------------DETAIL TABLE-----------//
export function DLFTable({ year, month }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DLF-table?year=${year}&month=${month}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DLPTable({ year, month }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DLP-table?year=${year}&month=${month}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DTNTable({ year, month }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DTN-table?year=${year}&month=${month}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DCFTable({ year, month }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DCF-table?year=${year}&month=${month}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}
