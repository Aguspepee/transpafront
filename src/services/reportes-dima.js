import instance from "../config/axios"

//rutas Axios
//Get ALL

//-------------ARRAY------------//
export function DIMA({ start, end }) {
    return instance.get(`reportes/DIMA/DIMA-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}

export function DLFValue({ start, end }) {
    return instance.get(`reportes/DIMA/DLF-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}

export function DLPValue({ start, end }) {
    return instance.get(`reportes/DIMA/DLP-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}

export function DTNValue({ start, end }) {
    return instance.get(`reportes/DIMA/DTN-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}

export function DCFValue({ start, end }) {
    return instance.get(`reportes/DIMA/DCF-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}

export function VPMValue({ start, end }) {
    return instance.get(`reportes/DIMA/VPM-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}

export function FAValue({ start, end }) {
    return instance.get(`reportes/DIMA/FA-array?start=${start.toISOString()}&end=${end.toISOString()}`)
}


//--------------DETAIL TABLE--------------//
export function DLFDetailTable({ year, month, order, orderBy }) {
    return instance.get(`reportes/DIMA/DLF-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`)
}

export function DLPDetailTable({ year, month, order, orderBy }) {
    return instance.get(`reportes/DIMA/DLP-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`)
}

export function DTNDetailTable({ year, month, order, orderBy }) {
    return instance.get(`reportes/DIMA/DTN-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`)
}

export function DCFDetailTable({ year, month, order, orderBy }) {
    return instance.get(`reportes/DIMA/DCF-detail-table?year=${year}&month=${month}&order=${order}&orderBy=${orderBy}`)
}