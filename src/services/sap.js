import instance from "../config/axios"

export function sapsRPM(config,zona){
    let token = localStorage.getItem("token")
    return instance.get(`saps/rpm/`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function filterGeneral(config,zona){
    let token = localStorage.getItem("token")
    return instance.get(`saps/filterGeneral/${config.Mes}-${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function distribucionHoraria(config,zona){
    let token = localStorage.getItem("token")
    return instance.get(`saps/DistibucionHoraria/${config.Mes}-${config.Año}-${zona}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function resumenAnual(config,zona){
    let token = localStorage.getItem("token")
    return instance.get(`saps/resumenAnual/${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function horasPlanificadas(config, zona){
    let token = localStorage.getItem("token")
    return instance.get(`/horas/byZone/${config.Mes}-${config.Año}-${zona}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export function resumenSap({year}){
    let token = localStorage.getItem("token")
    return instance.get(`saps/resumen?year=${year}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}