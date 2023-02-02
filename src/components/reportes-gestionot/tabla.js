import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { resumenSap } from "../../services/sap";
import { datos_gestion, datos_columnas } from "../../utils/datos_gestion";
import ExcelExport from "../../utils/exports/gestionot";
//import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    fontSize: "12px",
                    textAlign: "center",
                    backgroundColor: "gray",
                  },
                })}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps({
                      style: {
                        fontWeight: cell.column.fontWeight,
                        fontSize: cell.column.fontSize,
                        minWidth: cell.column.minWidth,
                        textAlign: "center",
                        width: cell.column.width,
                        backgroundColor: cell.column.backgroundColor,
                      },
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Tabla() {
  const month = 12;
  const columns = datos_columnas;
  let columns_modified = []
  const [data , setData] = useState([])
  const [reload , setReload] =useState(false)
  let aux = datos_gestion 

  useEffect(() => {
    const update = async () => {
      //Se crea una promesa compuesta
      try {
        const res = await resumenSap();
        if (res.data) {
          for (let i = 1; i < 5; i++) {
            for (let j = 1; j < 13; j++) {
              aux[1][`G_${j}`]=res.data["gestion_aceites_generadas"][j-1]?.ZN
              aux[1][`C_${j}`]=res.data["gestion_aceites_cerradas"][j-1]?.ZN
              aux[2][`G_${j}`]=res.data["gestion_aceites_generadas"][j-1]?.ZS
              aux[2][`C_${j}`]=res.data["gestion_aceites_cerradas"][j-1]?.ZS
              aux[3][`G_${j}`]=res.data["gestion_aceites_generadas"][j-1]?.ZO
              aux[3][`C_${j}`]=res.data["gestion_aceites_cerradas"][j-1]?.ZO
              aux[4][`G_${j}`]=res.data["gestion_aceites_generadas"][j-1]?.ZA
              aux[4][`C_${j}`]=res.data["gestion_aceites_cerradas"][j-1]?.ZA

              aux[6][`G_${j}`]=res.data["mantenimiento_estaciones_generadas"][j-1]?.ZN
              aux[6][`C_${j}`]=res.data["mantenimiento_estaciones_cerradas"][j-1]?.ZN
              aux[7][`G_${j}`]=res.data["mantenimiento_estaciones_generadas"][j-1]?.ZS
              aux[7][`C_${j}`]=res.data["mantenimiento_estaciones_cerradas"][j-1]?.ZS
              aux[8][`G_${j}`]=res.data["mantenimiento_estaciones_generadas"][j-1]?.ZO
              aux[8][`C_${j}`]=res.data["mantenimiento_estaciones_cerradas"][j-1]?.ZO
              aux[9][`G_${j}`]=res.data["mantenimiento_estaciones_generadas"][j-1]?.ZA
              aux[9][`C_${j}`]=res.data["mantenimiento_estaciones_cerradas"][j-1]?.ZA

              aux[11][`G_${j}`]=res.data["mantenimiento_lineas_generadas"][j-1]?.ZN
              aux[11][`C_${j}`]=res.data["mantenimiento_lineas_cerradas"][j-1]?.ZN
              aux[12][`G_${j}`]=res.data["mantenimiento_lineas_generadas"][j-1]?.ZS
              aux[12][`C_${j}`]=res.data["mantenimiento_lineas_cerradas"][j-1]?.ZS
              aux[13][`G_${j}`]=res.data["mantenimiento_lineas_generadas"][j-1]?.ZO
              aux[13][`C_${j}`]=res.data["mantenimiento_lineas_cerradas"][j-1]?.ZO
              aux[14][`G_${j}`]=res.data["mantenimiento_lineas_generadas"][j-1]?.ZA
              aux[14][`C_${j}`]=res.data["mantenimiento_lineas_cerradas"][j-1]?.ZA
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
  columns_modified[3] ={}
  columns_modified[3]["Header"] = columns[3].Header
  columns_modified[3]["columns"] = columns[3].columns.slice(0,month+1)
  return (
    <Styles>
      <h5>Ordenes de Trabajo Gestionadas por SAP</h5>
      <ExcelExport  data={data}/>
      <Table columns={columns_modified} data={data} />

    </Styles>
  );
}

export default Tabla;
