export const segmentacionSettings = (segmentacion) => {
    switch (segmentacion) {
        case "anual":
            return ({
                parser:'YYYY',
                unit: "year",
                tooltipFormat: 'YYYY',
                displayFormats: {
                    'year': 'YYYY'
                },
                timeFormat: 'YYYY'
            })
        case "mensual":
            return ({
                parser:'M-YYYY',
                unit: "month",
                tooltipFormat: 'M-YYYY',
                displayFormats: {
                    'month': 'M-YYYY'
                },
                timeFormat: 'M-YYYY'
            })
        case "semanal":
            return ({
                parser:'YYYY-ww',
                unit: "week",
                tooltipFormat: 'ww-YYYY',
                displayFormats: {
                    'week': 'ww-YYYY'
                },
                timeFormat: ''
            })
        case "diario":
            return ({
                parser:'YYYY-MM-DD',
                unit: "day",
                tooltipFormat: 'DD-MM-YYYY',
                displayFormats: {
                    'day': 'DD-MM-YYYY'
                },
                timeFormat: 'YYYY-MM-DD'
            })
        default:
            return ({
                parser:'YYYY-MM',
                unit: "month",
                tooltipFormat: 'MM-YYYY',
                displayFormats: {
                    'month': 'MM-YYYY'
                },
                timeFormat: 'YYYY-MM'
            })
    }
}
