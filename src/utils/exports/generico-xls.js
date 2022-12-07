import * as ExcelJS from "exceljs";
import saveAs from "file-saver";
import { format } from 'date-fns';

export function genericoXLS({ data }) {
    console.log(data)
    let ExcelJSWorkbook = new ExcelJS.Workbook();
    let ws = ExcelJSWorkbook.addWorksheet(`Parte Diario`, {
        properties: {},
    });
    //Especifica las columnas
    let campos = [{ header: "Fecha", key: "fecha" }].concat(data.map((dato, index) => { return ({ header: dato.label, key: dato.label }) }))
    ws.columns = campos;

    //Añade las filas
    //Saca las fechas del primer label

    data[0].data.map((item, index) => {
        let row = {}
        data.map((item) => {
            row[item.label] = item.data[index].value
            return ("")
        })
        row.fecha = item.date
        row.index = index + 1
        ws.addRow(row)
        ws.getRow(index + 2).font = {
            name: "Arial",
            family: 4,
            size: 8,
        };
        ws.getRow(index + 2).height = 15;
        return ("")
    })

    const row = ws.getRow(1);
    for (let i = 1; i < campos.length + 1; i++) {

        row.getCell(i).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'E33C29' }
        };
        row.getCell(i).font = {
            name: "Arial",
            family: 4,
            size: 8,
            color: { argb: 'FFFFFF' }
        };
        row.getCell(i).alignment = {
            vertical: "middle",
            horizontal: "center",
            wrapText: true,
        };
        row.getCell(i).border = {
            top: { style: "thin", color: { argb: 'FFFFFF' } },
            left: { style: "thin", color: { argb: 'FFFFFF' } },
            bottom: { style: "thin", color: { argb: 'FFFFFF' } },
            right: { style: "thin", color: { argb: 'FFFFFF' } },
        };

    }
    ws.getRow(1).height = 42.5;
    //Exporta el libro
    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `Parte Diario.xlsx`
        );
    });

}
