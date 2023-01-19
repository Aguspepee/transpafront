import { Typography, Box, Table, TableHead, TableBody, Paper, IconButton, Tooltip, withStyles } from '@mui/material';
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react';
import { novedadesGetWithMeta } from '../../../services/novedades';
import NearMeIcon from '@mui/icons-material/NearMe';
import { styled } from '@mui/material/styles';
import EstadoChip from './estado-chip';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        // color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 11,
        padding: "0px 0px 0px 15px"
    }
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        height: "10px"
    },
    "&:nth-of-type(odd)": {
        // backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
        height: 1
    }
}));

export default function NovedadesTable(props) {
    const { search, flyToPosition, ...other } = props;
    const [novedades, setNovedades] = useState([])
    useEffect(() => {
        const getNovedades = async () => {
            const res = await novedadesGetWithMeta({ search })
            setNovedades(res.data)
        }
        getNovedades()
    }, [search]
    )
    return (
        <>
            <Paper sx={{ overflowX: "auto", width: "100%", height: `110px` }}>
                <Table size='small' stickyHeader>
                    <TableHead>
                        <TableRow >
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >OT</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >FECHA</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >EQUIPO</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >DENOMINACIÓN</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >CÓDIGO</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >DETALLE</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h5" style={{ fontSize: '0.9em' }} >ESTADO</Typography>
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {novedades.map((novedad, index) => {

                            return (
                                <StyledTableRow key={index}>
                                    <StyledTableCell>
                                        {novedad.orden}

                                    </StyledTableCell >
                                    <StyledTableCell>
                                        {novedad.fecha}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {novedad.equipo}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {novedad.denominacion}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {novedad.codigo_valorac}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {novedad.codif_txt_cod}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <EstadoChip estado={novedad.valor_medido} />
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Tooltip title="Ir al punto">
                                            <IconButton size='small' sx={{ fontSize: "15px", padding: '3px 3px 3px 3px' }} onClick={() => flyToPosition([-novedad.piquete[0]?.latitud, -novedad.piquete[0]?.longitud])}>
                                                <NearMeIcon sx={{ fontSize: "15px" }} />
                                            </IconButton>
                                        </Tooltip>
                                    </StyledTableCell>
                                </StyledTableRow>
                            )
                        })
                        }
                    </TableBody>

                </Table>
            </Paper>


        </>
    );
}

