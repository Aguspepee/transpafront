
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
        //bordetTop:4
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
                <StyledTableCell >
                    {line.tension}
                </StyledTableCell>
                <StyledTableCell >
                    {line.potencia_1}
                </StyledTableCell>
                <StyledTableCell >
                    {line.horas_indisponibles_ano_movil !== 0 ? (line.horas_indisponibles_ano_movil).toFixed(2) : "-"}
                </StyledTableCell>
                <StyledTableCell >
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
                        <Box style={{ paddingLeft: "0px" }}>
                            <Table size='small'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            DETALLE
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
                                        <TableCell align='right' style={{ backgroundColor: "#F7F7F7" }}>
                                            ENS
                                        </TableCell>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            Salida
                                        </TableCell>
                                        <TableCell style={{ backgroundColor: "#F7F7F7" }}>
                                            Entrada
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {
                                        line.indisponibilidades.map((indisponibilidad, index) => {

                                            return (
                                                <StyledTableRow key={index} >
                                                    <StyledTableCell>
                                                        {indisponibilidad.OBSERVACIONES}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='right'>
                                                        {indisponibilidad.Causa}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='right'>
                                                        {indisponibilidad.Cl}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='right'>
                                                        {indisponibilidad.duracion_ano_movil?.toFixed(2)}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='right'>
                                                        {indisponibilidad.Energ?.toFixed(2)}
                                                    </StyledTableCell>
                                                    <StyledTableCell>
                                                        {indisponibilidad.SALIDA ? format(new Date(indisponibilidad.SALIDA), 'dd/MM/yyyy HH:mm') : "-"}
                                                    </StyledTableCell>
                                                    <StyledTableCell>
                                                        {indisponibilidad.ENTRADA ? format(new Date(indisponibilidad.ENTRADA), 'dd/MM/yyyy HH:mm') : "-"}
                                                    </StyledTableCell>
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