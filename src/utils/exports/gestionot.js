import * as ExcelJS from "exceljs";
import saveAs from "file-saver";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { resumenSap } from "../../services/sap";
import { datos_columnas, datos_gestion } from "../datos_gestion";

export default function ExcelExport({ ...props }) {
  const [month, setMonth] = useState("1")
  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)
  const values = data.map((dato) => Object.values(dato));
  let columns_modified = []
  const columns = datos_columnas
  let aux = datos_gestion

  useEffect(() => {
    const update = async () => {
      //Se crea una promesa compuesta
      try {
        const res = await resumenSap({ year: 22 });
        if (res.data) {
          for (let i = 1; i < 5; i++) {
            for (let j = 1; j < 13; j++) {
              aux[1][`G_${j}`] = res.data["gestion_aceites_generadas"][j - 1]?.ZN
              aux[1][`C_${j}`] = res.data["gestion_aceites_cerradas"][j - 1]?.ZN
              aux[2][`G_${j}`] = res.data["gestion_aceites_generadas"][j - 1]?.ZS
              aux[2][`C_${j}`] = res.data["gestion_aceites_cerradas"][j - 1]?.ZS
              aux[3][`G_${j}`] = res.data["gestion_aceites_generadas"][j - 1]?.ZO
              aux[3][`C_${j}`] = res.data["gestion_aceites_cerradas"][j - 1]?.ZO
              aux[4][`G_${j}`] = res.data["gestion_aceites_generadas"][j - 1]?.ZA
              aux[4][`C_${j}`] = res.data["gestion_aceites_cerradas"][j - 1]?.ZA

              aux[6][`G_${j}`] = res.data["mantenimiento_estaciones_generadas"][j - 1]?.ZN
              aux[6][`C_${j}`] = res.data["mantenimiento_estaciones_cerradas"][j - 1]?.ZN
              aux[7][`G_${j}`] = res.data["mantenimiento_estaciones_generadas"][j - 1]?.ZS
              aux[7][`C_${j}`] = res.data["mantenimiento_estaciones_cerradas"][j - 1]?.ZS
              aux[8][`G_${j}`] = res.data["mantenimiento_estaciones_generadas"][j - 1]?.ZO
              aux[8][`C_${j}`] = res.data["mantenimiento_estaciones_cerradas"][j - 1]?.ZO
              aux[9][`G_${j}`] = res.data["mantenimiento_estaciones_generadas"][j - 1]?.ZA
              aux[9][`C_${j}`] = res.data["mantenimiento_estaciones_cerradas"][j - 1]?.ZA

              aux[11][`G_${j}`] = res.data["mantenimiento_lineas_generadas"][j - 1]?.ZN
              aux[11][`C_${j}`] = res.data["mantenimiento_lineas_cerradas"][j - 1]?.ZN
              aux[12][`G_${j}`] = res.data["mantenimiento_lineas_generadas"][j - 1]?.ZS
              aux[12][`C_${j}`] = res.data["mantenimiento_lineas_cerradas"][j - 1]?.ZS
              aux[13][`G_${j}`] = res.data["mantenimiento_lineas_generadas"][j - 1]?.ZO
              aux[13][`C_${j}`] = res.data["mantenimiento_lineas_cerradas"][j - 1]?.ZO
              aux[14][`G_${j}`] = res.data["mantenimiento_lineas_generadas"][j - 1]?.ZA
              aux[14][`C_${j}`] = res.data["mantenimiento_lineas_cerradas"][j - 1]?.ZA
            }
          }
        }
        setData(aux)
        setReload(!reload)
      } catch (e) {
        console.log(e);
      }
    };
    update(reload);
  }, []);


  columns_modified[0] = columns[0]
  columns_modified[1] = columns[1]
  columns_modified[2] = columns[2]
  columns_modified[3] = {}
  columns_modified[3]["Header"] = columns[3].Header
  columns_modified[3]["columns"] = columns[3].columns.slice(0, month + 1)

  //Define Workbook and WorkSheet
  const excelExport = () => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("OT Gestionadas por SAP", {
      properties: { defaultRowHeight: 30 },
    });

    //Array para automatizar los meses de 2022
    const p2022 = [
      /* { mes: "", cell1: "I", cell2: "J", color: "E2EFDA" }, */
      { mes: "ene-22", cell1: "K", cell2: "L", color: "E2EFDA" },
      { mes: "feb-22", cell1: "M", cell2: "N", color: "E2EFDA" },
      { mes: "mar-22", cell1: "O", cell2: "P", color: "E2EFDA" },
      { mes: "abr-22", cell1: "Q", cell2: "R", color: "E2EFDA" },
      { mes: "may-22", cell1: "S", cell2: "T", color: "E2EFDA" },
      { mes: "jun-22", cell1: "U", cell2: "V", color: "E2EFDA" },
      { mes: "jul-22", cell1: "W", cell2: "X", color: "E2EFDA" },
      { mes: "ago-22", cell1: "Y", cell2: "Z", color: "E2EFDA" },
      { mes: "sep-22", cell1: "AA", cell2: "AB", color: "E2EFDA" },
      { mes: "oct-22", cell1: "AC", cell2: "AD", color: "E2EFDA" },
      { mes: "nov-22", cell1: "AE", cell2: "AF", color: "E2EFDA" },
      { mes: "dic-22", cell1: "AG", cell2: "AH", color: "E2EFDA" },
    ];

    //Populate table with Data
    values.map((value, index) => {
      worksheet.getRow(index + 5).values = value;
    });

    //Format Columns
    worksheet.columns = [
      { width: 20 },
      { width: 20 },
      { width: 12 },
      { width: 12 },
      { width: 20 },
      { width: 12 },
      { width: 12 },
      { width: 20 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
      { width: 12 },
    ];

    //GENERALES
    worksheet.getColumn(1).alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };

    //TITULO
    worksheet.mergeCells("B1:AF1");
    const title = worksheet.getCell("B1");
    title.value = "Ordenes de Trabajo Gestionadas por SAP";
    title.font = {
      name: "Calibri",
      family: 4,
      size: 18,
      underline: false,
      bold: true,
    };
    title.alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };
    title.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "E2EFDA" },
    };
    title.border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };

    //PERIODO 2020
    worksheet.mergeCells("B2:D2");
    worksheet.getCell("B2").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    worksheet.getCell("B2").value = "PERIODO 2020";
    worksheet.getCell(`B2`);
    worksheet.getCell(`B2`).font = {
      name: "Arial",
      family: 4,
      size: 14,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`B2`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D0CECE" },
    };
    worksheet.getCell(`B2`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.mergeCells("B3:D3");
    worksheet.getCell(`B3`);
    worksheet.getCell(`B3`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D0CECE" },
    };
    worksheet.getCell(`B3`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    //RPM 2020
    worksheet.getCell("B4").value = "RPM";
    worksheet.getCell(`B4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`B4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D0CECE" },
    };
    worksheet.getCell(`B4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("B4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    //GENERADAS 2020
    worksheet.getCell("C4").value = "Generadas";
    worksheet.getCell(`C4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`C4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D0CECE" },
    };
    worksheet.getCell(`C4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("C4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    //CERRADAS 2020
    worksheet.getCell("D4").value = "Cerradas";
    worksheet.getCell(`D4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`D4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D0CECE" },
    };
    worksheet.getCell(`D4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("D4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };

    //PERIODO 2021
    worksheet.mergeCells("E2:G2");
    worksheet.getCell("E2").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    worksheet.getCell("E2").value = "PERIODO 2021";
    worksheet.getCell(`E2`);
    worksheet.getCell(`E2`).font = {
      name: "Arial",
      family: 4,
      size: 14,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`E2`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D6DCE4" },
    };
    worksheet.getCell(`E2`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    //ESPACIO 2021
    worksheet.mergeCells("E3:G3");
    worksheet.getCell(`E3`);
    worksheet.getCell(`E3`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D6DCE4" },
    };
    worksheet.getCell(`E3`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    //RPM 2021
    worksheet.getCell("E4").value = "RPM";
    worksheet.getCell(`E4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`E4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D6DCE4" },
    };
    worksheet.getCell(`E4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("E4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    //GENERADAS 2021
    worksheet.getCell("F4").value = "Generadas";
    worksheet.getCell(`F4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`F4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D6DCE4" },
    };
    worksheet.getCell(`F4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("F4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    //CERRADAS 2021
    worksheet.getCell("G4").value = "Cerradas";
    worksheet.getCell(`G4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`G4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D6DCE4" },
    };
    worksheet.getCell(`G4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("G4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };

    //GENERADAS 2022
    worksheet.getCell("I4").value = "Generadas";
    worksheet.getCell(`I4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`I4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DDEBF7" },
    };
    worksheet.getCell(`I4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("I4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    //CERRADAS 2022
    worksheet.getCell("J4").value = "Cerradas";
    worksheet.getCell(`J4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`J4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DDEBF7" },
    };
    worksheet.getCell(`J4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("J4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };

    //PERIODO 2022
    worksheet.mergeCells("H2:J2");
    worksheet.getCell("H2").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    worksheet.getCell("H2").value = "PERIODO 2022";
    worksheet.getCell(`H2`);
    worksheet.getCell(`H2`).font = {
      name: "Arial",
      family: 4,
      size: 14,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`H2`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DDEBF7" },
    };
    worksheet.getCell(`H2`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };

    //ESPACIO 2022
    worksheet.mergeCells("H3:J3");
    worksheet.getCell(`H3`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DDEBF7" },
    };
    worksheet.getCell(`H3`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };

    //RPM ENE 2022
    worksheet.getCell("H4").value = "RPM";
    worksheet.getCell(`H4`).font = {
      name: "Arial",
      family: 4,
      size: 11,
      underline: false,
      bold: true,
    };
    worksheet.getCell(`H4`).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "DDEBF7" },
    };
    worksheet.getCell(`H4`).border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };
    worksheet.getCell("H4").alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };

    //ENE 22
    p2022.map((p22, index) => {
      worksheet.mergeCells(`${p22.cell1}3:${p22.cell2}3`);
      worksheet.getCell(`${p22.cell1}3`).value = p22.mes;
      worksheet.getCell(`${p22.cell1}3`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`${p22.cell1}3`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "DDEBF7" },
      };
      worksheet.getCell(`I3`).border = {
        top: { style: "medium" },
        left: { style: "medium" },
        bottom: { style: "medium" },
        right: { style: "medium" },
      };
      worksheet.getCell(`${p22.cell1}3`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };

      worksheet.getCell(`${p22.cell1}4`).value = "Generadas";
      worksheet.getCell(`${p22.cell1}4`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`${p22.cell1}4`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "DDEBF7" },
      };
      worksheet.getCell(`${p22.cell1}4`).border = {
        top: { style: "medium" },
        left: { style: "medium" },
        bottom: { style: "medium" },
        right: { style: "medium" },
      };
      worksheet.getCell(`${p22.cell1}4`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };

      worksheet.getCell(`${p22.cell2}4`).value = "Cerradas";
      worksheet.getCell(`${p22.cell2}4`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`${p22.cell2}4`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "DDEBF7" },
      };
      worksheet.getCell(`${p22.cell2}4`).border = {
        top: { style: "medium" },
        left: { style: "medium" },
        bottom: { style: "medium" },
        right: { style: "medium" },
      };
      worksheet.getCell(`${p22.cell2}4`).alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };

      for (let j = 3; j < 20; j++) { }
    });

    //ESQUINA
    worksheet.mergeCells("A1:A4");
    const corner = worksheet.getCell("A1");
    corner.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "E2EFDA" },
    };
    corner.border = {
      top: { style: "medium" },
      left: { style: "medium" },
      bottom: { style: "medium" },
      right: { style: "medium" },
    };

    for (let i = 0; i < 13; i = i + 5) {
      //COLUMNA LATERAL
      //Título
      worksheet.getCell(`A${i + 5}`);
      worksheet.getCell(`A${i + 5}`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`A${i + 5}`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "E2EFDA" },
      };
      worksheet.getCell(`A${i + 5}`).border = {
        top: { style: "medium" },
        left: { style: "medium" },
        bottom: { style: "thin" },
        right: { style: "medium" },
      };
      //ZN
      worksheet.getCell(`A${i + 6}`);
      worksheet.getCell(`A${i + 6}`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`A${i + 6}`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "E2EFDA" },
      };
      worksheet.getCell(`A${i + 6}`).border = {
        top: { style: "thin" },
        left: { style: "medium" },
        bottom: { style: "thin" },
        right: { style: "medium" },
      };
      //ZS
      worksheet.getCell(`A${i + 7}`);
      worksheet.getCell(`A${i + 7}`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`A${i + 7}`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "E2EFDA" },
      };
      worksheet.getCell(`A${i + 7}`).border = {
        top: { style: "thin" },
        left: { style: "medium" },
        bottom: { style: "thin" },
        right: { style: "medium" },
      };
      //ZO
      worksheet.getCell(`A${i + 8}`);
      worksheet.getCell(`A${i + 8}`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`A${i + 8}`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "E2EFDA" },
      };
      worksheet.getCell(`A${i + 8}`).border = {
        top: { style: "thin" },
        left: { style: "medium" },
        bottom: { style: "thin" },
        right: { style: "medium" },
      };
      //ZA
      worksheet.getCell(`A${i + 9}`);
      worksheet.getCell(`A${i + 9}`).font = {
        name: "Arial",
        family: 4,
        size: 11,
        underline: false,
        bold: true,
      };
      worksheet.getCell(`A${i + 9}`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "E2EFDA" },
      };
      worksheet.getCell(`A${i + 9}`).border = {
        top: { style: "thin" },
        left: { style: "medium" },
        bottom: { style: "medium" },
        right: { style: "medium" },
      };
    }

    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer) {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        `OT Gestionadas por SAP.xlsx`
      );
    });
  };

  const handleExportClick = (e) => {
    excelExport();
  };

  return (
    <Button text="export" type="danger" onClick={() => handleExportClick()}>
      EXLS
    </Button>
  );
}
