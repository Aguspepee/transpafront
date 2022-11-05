import * as ExcelJS from "exceljs";
import saveAs from "file-saver";
import { format } from 'date-fns';

export function partesListXLS(partes, campos) {
    let ExcelJSWorkbook = new ExcelJS.Workbook();
    let ws = ExcelJSWorkbook.addWorksheet(`Parte Diario`, {
        properties: {},
    });

    //Especifica las columnas
    ws.columns = campos;
    //Añade las filas
    partes.map((item, index) => {
        ws.addRow({
            id: index + 1,
            numero_reporte: item.numero_reporte,
            AAMM_inspeccion: item.AAMM_inspeccion,
            AAsem_inspeccion: item.AAsem_inspeccion,
            Id: item.Id,
            Id_str: item.Id_str,
            JN: item.JN,
            archivo: item.archivo,
            cantidad: item.cantidad,
            certificado_finalizado: item.certificado_finalizado,
            certificado_finalizado_fecha: item.certificado_finalizado_fecha ? format(new Date(item.certificado_finalizado_fecha), 'dd/MM/yyyy') : "-",
            certificado_numero: item.certificado_numero,
            certificado_realizado: item.certificado_realizado,
            certificado_realizado_fecha: item.certificado_realizado_fecha ? format(new Date(item.certificado_realizado_fecha), 'dd/MM/yyyy') : "-",
            certificante: item.certificante,
            clase: item.clase,
            clasificacion: item.clasificacion,
            cliente: item.cliente[0].nombre,
            codigo_servicio: item.codigo_servicio,
            contrato: item.contrato[0].nombre,
            curva_S_plan: item.curva_S_plan,
            descripcion_actividad: item.descripcion_actividad,
            descripcion_servicio: item.descripcion_servicio,
            // detalles: { diametro: 0, espesor: 0, numero_costuras: 0, cantidad_placas: 0, tipo: '', … },
            fecha_carga: item.fecha_carga ? format(new Date(item.fecha_carga), 'dd/MM/yyyy') : "-",
            fecha_inspeccion: item.fecha_inspeccion ? format(new Date(item.fecha_inspeccion), 'dd/MM/yyyy') : "-",
            informe_realizado: item.informe_realizado,
            informe_realizado_fecha: item.informe_realizado_fecha ? format(new Date(item.informe_realizado_fecha), 'dd/MM/yyyy') : "-",
            informe_revisado: item.informe_revisado,
            informe_revisado_fecha: item.informe_revisado_fecha ? format(new Date(item.informe_revisado_fecha), 'dd/MM/yyyy') : "-",
            items_cantidad: item.items_cantidad,
            mes_inspeccion: item.mes_inspeccion,
            modificado: item.modificado,
            modificado_fecha: item.modificado_fecha ? format(new Date(item.modificado_fecha), 'dd/MM/yyyy') : "-",
            modificado_nombre: item.modificado_nombre,
            numero_orden: item.numero_orden,
            numero_reporte: item.numero_reporte,
            observaciones: item.observaciones,
            operador: item.operador[0].nombre_completo[0],
            paga: item.paga[0].nombre,
            remito_entregado: item.remito_entregado,
            remito_entregado_fecha: item.remito_entregado_fecha ? format(new Date(item.remito_entregado_fecha), 'dd/MM/yyyy') : "-",
            remito_firmado: item.remito_firmado,
            remito_firmado_fecha: item.remito_firmado_fecha ? format(new Date(item.remito_firmado_fecha), 'dd/MM/yyyy') : "-",
            remito_numero: item.remito_numero,
            remito_numero_str: item.remito_numero_str,
            remito_realizado: item.remito_realizado,
            remito_realizado_fecha: item.remito_realizado_fecha ? format(new Date(item.remito_realizado_fecha), 'dd/MM/yyyy') : "-",
            remito_revisado: item.remito_revisado,
            remito_revisado_fecha: item.remito_revisado_fecha ? format(new Date(item.remito_revisado_fecha), 'dd/MM/yyyy') : "-",
            semana_carga: item.semana_carga,
            semana_inspeccion: item.semana_inspeccion,
            string: item.string,
            tag: item.tag,
            tag_detalle: item.tag_detalle,
            tipo_actividad: item.tipo_actividad,
            trabajo_terminado: item.trabajo_terminado,
            trabajo_terminado_fecha: item.trabajo_terminado_fecha ? format(new Date(item.trabajo_terminado_fecha), 'dd/MM/yyyy') : "-",
            unidad: item.unidad,
            unidad_medida: item.unidad_medida,
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
            `Parte Diario.xlsx`
        );
    });

}
