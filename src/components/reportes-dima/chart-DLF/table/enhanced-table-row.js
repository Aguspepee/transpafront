
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
                    {line.codigo}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {`${line.tension} kV`}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {line.horas_indisponibles_ano_movil !== 0 ? `${(line.horas_indisponibles_ano_movil).toFixed(2)} h` : "-"}
                </StyledTableCell>
                <StyledTableCell align='right'>
                    {`${line.longitud_oficial} km`}
                </StyledTableCell>
                <StyledTableCell >
                    {line.IDEQ}
                </StyledTableCell>
                <StyledTableCell >
                    {line.propietario_2}
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
                        <Box style={{ padding:"2em 2em 2em 2em" }}>
                            <Table size='small'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            Detalle de la Indisponibilidad
                                        </TableCell >
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            Causa
                                        </TableCell>
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            Clase
                                        </TableCell>
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            Duración
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
                                                    <StyledSubTableCell style={{ backgroundColor: "#FDFDFD" }}>
                                                        {indisponibilidad.OBSERVACIONES}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell align='right' style={{ backgroundColor: "#FDFDFD" }}>
                                                        {indisponibilidad.causa_detalle[0] ? indisponibilidad.causa_detalle[0]?.detalle || indisponibilidad.Causa : indisponibilidad.Causa}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell align='right' style={{ backgroundColor: "#FDFDFD" }}>
                                                        {indisponibilidad.clase_detalle[0] ? indisponibilidad.clase_detalle[0]?.detalle || "S/D" : "S/D"}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell align='right' style={{ backgroundColor: "#FDFDFD" }}>
                                                        {`${indisponibilidad.duracion_ano_movil?.toFixed(2)} h`}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell style={{ backgroundColor: "#FDFDFD" }}>
                                                        {indisponibilidad.SALIDA ? format(new Date(indisponibilidad.SALIDA), 'dd/MM/yyyy HH:mm') : "-"}
                                                    </StyledSubTableCell>
                                                    <StyledSubTableCell style={{ backgroundColor: "#FDFDFD" }}>
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