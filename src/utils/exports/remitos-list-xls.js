import * as ExcelJS from "exceljs";
import saveAs from "file-saver";
import { format } from 'date-fns';

export function remitosListXLS(remitos, campos) {
    let ExcelJSWorkbook = new ExcelJS.Workbook();
    let ws = ExcelJSWorkbook.addWorksheet(`Hitorial de Remitos`, {
        properties: {},
    });

    //Especifica las columnas
    ws.columns = campos;
    //Añade las filas
    remitos.map((item, index) => {
        ws.addRow({
            id: index + 1,
            remito_numero: item._id,
           certificante: item.certificante,
            cliente: item.cliente[0].nombre,
            contrato: item.contrato[0].nombre,
            operador: `${item.operador[0].nombre} ${item.operador[0].apellido}`,
            fecha: item.fecha ? format(new Date(item.fecha), 'dd/MM/yyyy') : "-",
            remito_revisado: item.remito_revisado,
            remito_revisado_fecha: item.remito_revisado_fecha ? format(new Date(item.remito_revisado_fecha), 'dd/MM/yyyy') : "-",
            remito_entregado: item.remito_entregado,
            remito_entregado_fecha: item.remito_entregado_fecha ? format(new Date(item.remito_entregado_fecha), 'dd/MM/yyyy') : "-",
            remito_firmado: item.remito_firmado,
            remito_firmado_fecha: item.remito_firmado_fecha ? format(new Date(item.remito_firmado_fecha), 'dd/MM/yyyy') : "-",
            certificado_numero: item.certificado_numero,
            certificado_realizado: item.certificado_realizado,
            certificado_realizado_fecha: item.certificado_realizado_fecha ? format(new Date(item.certificado_realizado_fecha), 'dd/MM/yyyy') : "-",
            certificado_finalizado: item.certificado_finalizado,
            certificado_finalizado_fecha: item.certificado_finalizado_fecha ? format(new Date(item.certificado_finalizado_fecha), 'dd/MM/yyyy') : "-",
            planta: item.planta,
        })
        ws.getRow(index + 2).font = {
            name: "Arial",
            family: 4,
            size: 8,
        };
        ws.getRow(index + 2).height = 15;
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
            `Hitorial de Remitos.xlsx`
        );
    });

}
