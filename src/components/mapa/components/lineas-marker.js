import { Table, TableHead, TableBody, Typography, Card, Grid, Paper, Box, CardMedia } from '@mui/material';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import { format } from 'date-fns';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { styled } from '@mui/material/styles';
import Icon from '../../../images/t1';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        //  color: theme.palette.common.white
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
        //   backgroundColor: theme.palette.action.hover
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
        height: 1
    }
}));

const greenIcon = new L.Icon({
    iconUrl:
        //'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png',
        require('../../../icons/marker-green.png'),
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const redIcon = new L.Icon({
    iconUrl:
        'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function LineasMarker({ piquete, reparadas, ...props }) {

    return (
        <>{
            ((reparadas && piquete?.novedades_reparadas?.toString() !== "") || piquete?.novedades_abiertas?.toString() !== "") &&
            <Marker
                //icon={piquete?.novedades?.some(e => e.codigo_valorac.includes('LC05')) ? violetIcon : greyIcon}
                icon={piquete?.novedades_abiertas?.toString() !== "" ? redIcon : greenIcon}
                position={[-Number(piquete.latitud), -Number(piquete.longitud)]}
            >
                <Popup >
                    <Grid
                        container
                        spacing={1}
                    >
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}>
                            <Card style={{ heigth: '100%' }}>
                                <Typography variant="h6" style={{ padding: '1.5em 1em 0em 1.1em', fontSize: '0.8em' }} gutterBottom>
                                    {`Piquete ${piquete?.piquete}`}
                                </Typography>
                                <Typography variant="h6" style={{ padding: '0em 1em 1em 1.5em', fontSize: '0.6em' }} gutterBottom>
                                    {`${piquete?.denominacion}`}
                                </Typography>
                                <Typography variant="subtitle2" style={{ padding: '0em 0em 0em 1.5em', fontSize: '0.8em' }} gutterBottom>
                                    {`Tipo de construcción: ${piquete?.tipo_de_construcción}`}
                                </Typography>
                                <Typography variant="subtitle2" style={{ padding: '0em 0em 0em 1.5em', fontSize: '0.8em' }} gutterBottom>
                                    {`Tipo de Estructura: ${piquete?.tipo_estructura}`}
                                </Typography>
                                <Typography variant="subtitle2" style={{ padding: '0em 0em 0em 1.5em', fontSize: '0.8em' }} gutterBottom>
                                    {`Disposición: ${piquete?.disposición}`}
                                </Typography>
                                <Typography variant="subtitle2" style={{ padding: '0em 0em 0em 1.5em', fontSize: '0.8em' }} gutterBottom>
                                    {`Local: ${piquete?.local}`}
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xl={6}
                            xs={6}>
                            <Card >
                                <Box style={{ heigth: "500px", alignItems: "center" }}>
                                    <Box style={{ padding: "5px 5px 5px 40px" }}>
                                        <Icon />
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ width: "100%" }}>
                                <Paper sx={{ overflowX: "auto", width: "300px", height: `100px` }}>
                                    <Box >
                                        <Table size='small' stickyHeader>
                                            <TableHead >
                                                <TableRow>
                                                    <TableCell>
                                                        TIPO
                                                    </TableCell>
                                                    <TableCell>
                                                        FECHA
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    piquete?.novedades_list?.map((novedad, index) => {
                                                        return (
                                                            <StyledTableRow key={index}>
                                                                <StyledTableCell>
                                                                    {novedad.codif_txt_cod}
                                                                </StyledTableCell>
                                                                <StyledTableCell>
                                                                    {novedad.fecha ? format(new Date(novedad.fecha), 'dd/MM/yyyy') : "-"}
                                                                </StyledTableCell>
                                                            </StyledTableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Paper>
                            </Card>

                        </Grid>
                    </Grid>
                </Popup>
            </Marker>}
        </>

    )
}

export default LineasMarker;