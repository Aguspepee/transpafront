export const tipos_actividad = [
    "ADICIONAL", "CAL", "CRO", "CUAD", "DUR", "ESP", "EXT", "GE", "GR", "HH", "INT", "IV", "JOR", "ME", "MT", "OG", "PA",
    "PEC", "PLA", "PLACA", "PT", "RC", "RD", "REP", "RX", "SCAN-B", "STAND BY", "TER", "UT", "VIA", "VIS",
]
export const subtipos_actividad = [
    "Ítem",
    "Subítem"
]
export const area = [
    "Gerencia", 
    "Ingeniería", 
    "Protecciones", 
    "Operaciones", 
    "Zona Norte", 
    "Zona Sur", 
    "Zona Oeste", 
    "Zona Austral"
]
export const unidades_medida = [
    "Día",
    "Hora Hombre",
    "Hora Normalizada",
    "Jornada",
    "Mes",
    "Metro lineal",
    "Metro lineal de soldadura (MLS)",
    "Porcentaje adicional",
    "Punto de medición de espesores (TML)",
    "Unidad",
    "Unidad (dia x persona)",
    "Unidad (croquis/hoja)",
]
export const role = [
    "Administrador", "Supervisor", "Inspector", "Asistente"
]

export const tipo_rx = [
    "Normal", "Exposiciones", "Reparaciones", "Horas", "Metros"
]

export const contratista = [
    "BSI", "DOW", "HCI", "FB", "UTE"
]

export const paga = [
    "BSI", "DOW", "HCI", "FB", "UTE"
]

export const dateArray = (init, finish) => {

    // Create an empty array to store the date objects
    const dateArray = [];

    // Loop over the range of dates
    for (let d = init; d <= finish; d.setMonth(d.getMonth() + 1)) {
        // Create a new object for the current date with year and month properties
        const dateObj = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
        };

        // Add the date object to the array
        dateArray.push(dateObj);
    }

    // Log the date array
    return (dateArray);
}


export const DIMA_historico = [
    {
        "date": "1/2011",
        "value": 99.96381484781713
    },
    {
        "date": "2/2011",
        "value": 99.96332381991415
    },
    {
        "date": "3/2011",
        "value": 99.96214682720397
    },
    {
        "date": "4/2011",
        "value": 99.96194436949969
    },
    {
        "date": "5/2011",
        "value": 99.95954274911938
    },
    {
        "date": "6/2011",
        "value": 99.9597314760253
    },
    {
        "date": "7/2011",
        "value": 99.95850304531758
    },
    {
        "date": "8/2011",
        "value": 99.96708488999384
    },
    {
        "date": "9/2011",
        "value": 99.9702270413934
    },
    {
        "date": "10/2011",
        "value": 99.9735001716846
    },
    {
        "date": "11/2011",
        "value": 99.97354125350267
    },
    {
        "date": "12/2011",
        "value": 99.95397001641798
    },
    {
        "date": "1/2012",
        "value": 99.95647104309664
    },
    {
        "date": "2/2012",
        "value": 99.95640248212062
    },
    {
        "date": "3/2012",
        "value": 99.95775731534108
    },
    {
        "date": "4/2012",
        "value": 99.95848983489064
    },
    {
        "date": "5/2012",
        "value": 99.96081931231936
    },
    {
        "date": "6/2012",
        "value": 99.9571927271829
    },
    {
        "date": "7/2012",
        "value": 99.95968483608519
    },
    {
        "date": "8/2012",
        "value": 99.9618525850019
    },
    {
        "date": "9/2012",
        "value": 99.9618513322578
    },
    {
        "date": "10/2012",
        "value": 99.96188781737828
    },
    {
        "date": "11/2012",
        "value": 99.961994512131
    },
    {
        "date": "12/2012",
        "value": 99.98467196163905
    },
    {
        "date": "1/2013",
        "value": 99.98683194116734
    },
    {
        "date": "2/2013",
        "value": 99.98267259925686
    },
    {
        "date": "3/2013",
        "value": 99.98231336138977
    },
    {
        "date": "4/2013",
        "value": 99.98248090510745
    },
    {
        "date": "5/2013",
        "value": 99.9738179658002
    },
    {
        "date": "6/2013",
        "value": 99.97856133337746
    },
    {
        "date": "7/2013",
        "value": 99.97865293631145
    },
    {
        "date": "8/2013",
        "value": 99.98227172202544
    },
    {
        "date": "9/2013",
        "value": 99.98117530917139
    },
    {
        "date": "10/2013",
        "value": 99.98108289247939
    },
    {
        "date": "11/2013",
        "value": 99.981090971482
    },
    {
        "date": "12/2013",
        "value": 99.98042367447752
    },
    {
        "date": "1/2014",
        "value": 99.97806746730618
    },
    {
        "date": "2/2014",
        "value": 99.98286670712693
    },
    {
        "date": "3/2014",
        "value": 99.9829293077731
    },
    {
        "date": "4/2014",
        "value": 99.98229907270024
    },
    {
        "date": "5/2014",
        "value": 99.98924516196114
    },
    {
        "date": "6/2014",
        "value": 99.98833756596306
    },
    {
        "date": "7/2014",
        "value": 99.94474070917313
    },
    {
        "date": "8/2014",
        "value": 99.94286002179483
    },
    {
        "date": "9/2014",
        "value": 99.94030504466475
    },
    {
        "date": "10/2014",
        "value": 99.94017112053061
    },
    {
        "date": "11/2014",
        "value": 99.93735701830734
    },
    {
        "date": "12/2014",
        "value": 99.93442906956173
    },
    {
        "date": "1/2015",
        "value": 99.93672985025874
    },
    {
        "date": "2/2015",
        "value": 99.93214958651045
    },
    {
        "date": "3/2015",
        "value": 99.93245927872765
    },
    {
        "date": "4/2015",
        "value": 99.92684900164178
    },
    {
        "date": "5/2015",
        "value": 99.92640529131958
    },
    {
        "date": "6/2015",
        "value": 99.92582872635674
    },
    {
        "date": "7/2015",
        "value": 99.96774405920016
    },
    {
        "date": "8/2015",
        "value": 99.97024218554617
    },
    {
        "date": "9/2015",
        "value": 99.97144277187343
    },
    {
        "date": "10/2015",
        "value": 99.97149965870763
    },
    {
        "date": "11/2015",
        "value": 99.97400887345
    },
    {
        "date": "12/2015",
        "value": 99.97305512927475
    },
    {
        "date": "1/2016",
        "value": 99.96039827789461
    },
    {
        "date": "2/2016",
        "value": 99.95383960552414
    },
    {
        "date": "3/2016",
        "value": 99.95292077207132
    },
    {
        "date": "4/2016",
        "value": 99.95810425547239
    },
    {
        "date": "5/2016",
        "value": 99.95714092483695
    },
    {
        "date": "6/2016",
        "value": 99.95538673839741
    },
    {
        "date": "7/2016",
        "value": 99.95521533082919
    },
    {
        "date": "8/2016",
        "value": 99.95603795387626
    },
    {
        "date": "9/2016",
        "value": 99.9559109691023
    },
    {
        "date": "10/2016",
        "value": 99.95453418265278
    }
]

export const VOn = [
    {
        "date": "1/2017",
        "value": 99.926521
    },
    {
        "date": "1/2018",
        "value": 99.928054
    },
    {
        "date": "1/2019",
        "value": 99.929587
    },
    {
        "date": "1/2020",
        "value": 99.931121
    },
    {
        "date": "1/2021",
        "value": 99.932654
    },
    {
        "date": "1/2022",
        "value": 99.932654
    },
]

export const VOI = [
    {
        "date": "1/2017",
        "value": 99.926521
    },
    {
        "date": "1/2018",
        "value": 99.926521
    },
    {
        "date": "1/2019",
        "value": 99.926521
    },
    {
        "date": "1/2020",
        "value": 99.926521
    },
    {
        "date": "1/2021",
        "value": 99.926521
    },
    {
        "date": "1/2022",
        "value": 99.926521
    },
]

export const Kn = [
    {
        "ano": 1,
        "desde": new Date(2017, 1, 1), // 01/02/2017
        "hasta": new Date(2018, 0, 31), // 31/01/2018
        "K": 1
    },
    {
        "ano": 2,
        "desde": new Date(2018, 1, 1),
        "hasta": new Date(2019, 0, 31),
        "K": 1.05
    },
    {
        "ano": 3,
        "desde": new Date(2019, 1, 1),
        "hasta": new Date(2020, 0, 31),
        "K": 1.3
    },
    {
        "ano": 4,
        "desde": new Date(2020, 1, 1),
        "hasta": new Date(2021, 0, 31),
        "K": 1.6
    },
    {
        "ano": 5,
        "desde": new Date(2021, 1, 1),
        "hasta": new Date(2022, 0, 31),
        "K": 2
    },

]
