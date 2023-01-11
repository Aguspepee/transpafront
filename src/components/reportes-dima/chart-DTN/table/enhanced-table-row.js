
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { format } from 'date-fns';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, Box, TableHead, Table, TableBody } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 11,
        padding: "0px 17px 0px 17px",
        borderBottom: "0.1px solid #F5F5F5",
    }
}));

const StyledSubTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        padding: "0px 17px 0px 17px",
        borderBottom: "0.1px solid #F5F5F5",
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "10px"
    },
    "&:nth-of-type(odd)": {
    },
    "&:last-child td, &:last-child th": {
        //border: 0,
        height: 1
    }
}));

export default function EnhancedTableRow({ line, ...rest }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledTableRow>
                <StyledTableCell padding='none' style={{ fontSize: '7pt', }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{ width: "25px", height: "25px", fontSize: '15pt' }}
                    >
                        {open ? <KeyboardArrowUpIcon fontSize="inherit" /> : <KeyboardArrowDownIcon fontSize="inherit" />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell >
                    {line.ubicacion_tecnica}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {`${line.tension} kV`}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {`${line.potencia_1} MVA`}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {line.horas_indisponibles_ano_movil !== 0 ? `${(line.horas_indisponibles_ano_movil).toFixed(2)} h` : "-"}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {line.ENS_total_ano_movil !== 0 ? (line.ENS_total_ano_movil).toFixed(2) : "-"}
                </StyledTableCell>
                <StyledTableCell >
                    {line.ID}
                </StyledTableCell>
                <StyledTableCell >
                    {line.IDEQ}
                </StyledTableCell>
                <StyledTableCell >
                    {line.atendido_por}
                </StyledTableCell>
                <StyledTableCell>
                    {line.fecha_inicio ? format(new Date(line.fecha_inicio), 'dd/MM/yyyy') : "-"}
                </StyledTableCell>
                <StyledTableCell>
                    {line.fecha_fin ? format(new Date(line.fecha_fin), 'dd/MM/yyyy') : "-"}
                </StyledTableCell>
            </StyledTableRow>
            <TableRow >
                <TableCell style={{ padding: "0px 0px 0px 0px" }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box style={{ padding: "2em 2em 2em 2em" }}>
                            <Table size='small'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            Detalle de la Indisponibilidad
                                        </TableCell >
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            Clase
                                        </TableCell>
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            Duración
                                        </TableCell>
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            ENS
                                        </TableCell>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            Salida de Servicio
                                        </TableCell>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            Entrada de Servicio
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        line.indisponibilidades.map((indisponibilidad, index) => {
                                            return (
                                                <StyledTableRow key={index} >
                                                    <StyledSubTableCell>
                                                        {indisponibilidad.OBSERVACIONES}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell align='right'>
                                                        {indisponibilidad.clase_detalle[0] ? indisponibilidad.clase_detalle[0]?.detalle || "S/D" : "S/D"}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell align='right'>
                                                        {`${indisponibilidad.duracion_ano_movil?.toFixed(2)} h`}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell align='right'>
                                                        {`${indisponibilidad.Energ?.toFixed(2)} MVAh`}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell>
                                                        {indisponibilidad.SALIDA ? format(new Date(indisponibilidad.SALIDA), 'dd/MM/yyyy HH:mm') : "-"}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell>
                                                        {indisponibilidad.ENTRADA ? format(new Date(indisponibilidad.ENTRADA), 'dd/MM/yyyy HH:mm') : "-"}
                                                    </StyledSubTableCell>
                                                </StyledTableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}