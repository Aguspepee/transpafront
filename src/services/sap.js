import instance from "../config/axios"

export function sapsRPM(config, zona) {
    return instance.get(`saps/rpm/`)
}

export function filterGeneral(config, zona) {
    return instance.get(`saps/filterGeneral/${config.Mes}-${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`)
}

export function distribucionHoraria(config, zona) {
    return instance.get(`saps/DistibucionHoraria/${config.Mes}-${config.Año}-${zona}`)
}

export function resumenAnual(config, zona) {
    return instance.get(`saps/resumenAnual/${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`)
}

export function horasPlanificadas(config, zona) {
    return instance.get(`/horas/byZone/${config.Mes}-${config.Año}-${zona}`)
}

export function resumenSap({ year }) {
    return instance.get(`saps/resumen?year=${year}`)
}