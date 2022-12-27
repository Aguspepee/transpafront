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

export function VPMValue({ start, end  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/VPM-array?start=${start.toISOString()}&end=${end.toISOString()}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}


//--------------DETAIL TABLE--------------//
export function DLFDetailTable({ year, month, order, orderBy }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DLF-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DLPDetailTable({ year, month, order, orderBy  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DLP-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DTNDetailTable({ year, month, order, orderBy  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DTN-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function DCFDetailTable({ year, month, order, orderBy  }) {
    let token = localStorage.getItem("token")
    return instance.get(`reportes/DIMA/DCF-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}