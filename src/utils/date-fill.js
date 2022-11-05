import { getYear } from "date-fns";

const getYearsArray = (inicio, fin) => {
    let dates = []
    let startYear = new Date(inicio).getFullYear()
    let gap = new Date(fin).getFullYear() - new Date(inicio).getFullYear() + 1
    for (let i = 0; i < gap; i++) {
        dates[i] = { date: startYear, value: 0 };
        startYear = startYear + 1
    }
    return (dates)
}

const getMonthArray = (start, end) => {
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setMonth(dt.getMonth() + 1)) {
        arr.push(new Date(dt).toISOString().slice(0, 7));
    }
    arr = arr.map((v) => { return ({ date: v, value: 0 }) })
    return arr;
};

const getWeekArray = (start, end) => {
    
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 7)) {
        var start = new Date(dt.getFullYear(), 0, 0);
        var diff = (dt - start) + ((start.getTimezoneOffset() - dt.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        
        arr.push(`${new Date(dt).getFullYear()}-${Math.round(day / 7).toString().padStart(2,"0")}`);
    }
    
    arr = arr.map((v) => { return ({ date: v, value: 0 }) })
    console.log(arr)
    return arr;
};

const getDaysArray = (start, end) => {
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate()+1)) {
        arr.push(new Date(dt).toISOString().slice(0, 10));
    }
    arr = arr.map((v) => { return ({ date: v, value: 0 }) })
    return arr;
};


export function dateFill(data, segmentacion, inicio, fin) {
    let result
    switch (segmentacion) {
        case "anual":
            result = getYearsArray(inicio, fin).map((item) => {
                const newValue = data.filter((dato) => {
                    return (dato.date?.toString() === item.date?.toString())
                })
                return ({ date: item.date.toString(), value: (newValue[0] === undefined ? 0 : newValue[0]?.value) })
            })

            return (result)
        case "mensual":
            result = getMonthArray(inicio, fin).map((item) => {
                const newValue = data.filter((dato) => {
                    return (dato.date?.toString() === item.date?.toString())
                })
                return ({ date: item.date, value: (newValue[0] === undefined ? 0 : newValue[0]?.value) })
            })
            return (result)

        case "semanal":
            result = getWeekArray(inicio, fin).map((item) => {
                const newValue = data.filter((dato) => {
                    return (dato.date?.toString() === item.date?.toString())
                })
                return ({ date: item.date, value: (newValue[0] === undefined ? 0 : newValue[0]?.value) })
            })
            //console.log(result)
            return (result)
        case "diario":
            result = getDaysArray(inicio, fin).map((item) => {
                const newValue = data.filter((dato) => {
                    return (dato.date?.toString() === item.date?.toString())
                })
                return ({ date: item.date, value: (newValue[0] === undefined ? 0 : newValue[0]?.value) })
            })
            return (result)
        default:
            result = getMonthArray(inicio, fin).map((item) => {
                const newValue = data.filter((dato) => {
                    return (dato.date?.toString() === item.date?.toString())
                })
                return ({ date: item.date, value: (newValue[0] === undefined ? 0 : newValue[0]?.value) })
            })

            return (result)
    }
}