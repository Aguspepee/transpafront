import { Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, Tooltip, withStyles } from '@mui/material';
import 'leaflet/dist/leaflet.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { novedadesGetWithMeta } from '../../../services/novedades';
import NearMeIcon from '@mui/icons-material/NearMe';
import { styled } from '@mui/material/styles';
import EstadoChip from './estado-chip';

const StyledTableCell = styled('TableCell')(({ theme }) => ({
    root: {
        height: 10,
        padding:0
      }
  }));

  

function TabBase(props) {
    const { value, index, search, codigos, flyToPosition, ...other } = props;
    const [novedades, setNovedades] = useState([])
    useEffect(() => {
        const getNovedades = async () => {
            const res = await novedadesGetWithMeta({ search, codigos })
            setNovedades(res.data)
        }
        getNovedades()
    }, [search]
    )
    return (
        <>
            {value === index && (
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
                                    <TableRow  key={index}>
                                        <TableCell>
                                            <Typography variant="body1" style={{ fontSize: '0.75em' }} >{novedad.orden}</Typography>

                                        </TableCell >
                                        <TableCell>
                                            <Typography variant="body1" style={{ fontSize: '0.75em' }} >{novedad.fecha}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1" style={{ fontSize: '0.75em' }} >{novedad.equipo}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1" style={{ fontSize: '0.75em' }} >{novedad.denominacion}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1" style={{ fontSize: '0.75em' }} > {novedad.codigo_valorac}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1" style={{ fontSize: '0.75em' }} > {novedad.codif_txt_cod}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <EstadoChip estado={novedad.valor_medido}/>
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip title="Ir al punto">
                                                <IconButton size='small' sx={{ fontSize: "15px", padding: '3px 3px 3px 3px' }} onClick={() => flyToPosition([-novedad.piquete[0]?.latitud, -novedad.piquete[0]?.longitud])}>
                                                    <NearMeIcon sx={{ fontSize: "15px" }} />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                            }
                        </TableBody>

                    </Table>
                </Paper>

            )}
        </>
    );
}

TabBase.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function TabPanel({ value, index, search, codigos, flyToPosition, ...other }) {

    return (
        <>
            {value === index && <TabBase index={index} value={value} search={search} codigos={codigos} flyToPosition={flyToPosition} />}
        </>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};