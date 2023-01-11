
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableSortLabel from '@mui/material/TableSortLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, Grid, Stack, Table, TableBody, TableHead, Paper, Typography, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { DIMA, DIMADetailTable } from '../../../services/reportes-dima';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

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
        height: "25px"
    },
    "&:nth-of-type(odd)": {
    },
    "&:last-child td, &:last-child th": {
        //border: 0,
        height: 1
    }
}));

export default function CollapseDIMADetailTable({ ...rest }) {
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
        setLoading(true)
        setData([])
    };

    useEffect(() => {
        setLoading(true)
        if (expanded) {
            try {
                const getData = async () => {
                    const res = await DIMA({ start: new Date(2011, 0, 1), end: new Date(2015, 11, 31) })
                    setData(res.data)
                    setLoading(false)
                }
                getData()

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
    }, [expanded])

    const VB = data.reduce((a, b) => a + b.data, 0) / data.length;
    const VM = data.reduce((a, b) => Math.max(a, b.data), 0);
    const VOI = VB - (VM - VB) / 2
    const SA = (VM - VB) / 4

    return (
        <>
            <Divider />
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    //justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    m: -1
                }}
                style={{ padding: "0.3em 1em 0.3em 0em" }}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item style={{ width: '85%' }}>
                        <Typography
                            sx={{ m: 1 }}
                            variant="h6"
                            style={{ fontSize: "0.8em", padding: "5px 0px 0px 23px" }}
                        >
                            {`PARÁMETROS CALCULADOS`}
                        </Typography>

                    </Grid>
                    <Grid item>
                        <Box sx={{ m: 0.6 }}>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                size="small"
                            >
                                <ExpandMoreIcon size="small" />
                            </ExpandMore>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography
                    sx={{ m: 1 }}
                    variant="body1"
                    style={{ fontSize: "0.8em", padding: "0px 0px 0px 15px" }}
                >
                    {`Comparación de parámetros calculados por el ENRE para la afectación de las sanciones por no alcanzar 
                            la calidad objetivo para el periodo comprendido entre ene-11 y dic-15.`}
                </Typography>
                <Paper sx={{ overflowX: "auto", width: "100%", height: `130px` }}>
                    <Table size="small" stickyHeader>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    Parámetro
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }} align='right'>
                                    ENRE
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }} align='right'>
                                    Calculado
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }} align='right'>
                                    Discrepancia
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow  >
                                <StyledTableCell>
                                    {`Valor Máximo (VM)`}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {99.977627}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && VM?.toFixed(6)}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && `${((VM - 99.977627) * 100 / 99.977627)?.toFixed(4)}%`}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow  >
                                <StyledTableCell>
                                    {`Valor Base (VB)`}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {99.943556}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && VB?.toFixed(6)}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} align='right'/>}
                                    {!loading && `${((VB - 99.943556) * 100 / 99.943556)?.toFixed(4)}%`}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow  >
                                <StyledTableCell>
                                    {`Valor Objetivo Inicial (VOI)`}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {99.926521}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && VOI?.toFixed(6)}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && `${((VOI - 99.926521) * 100 / 99.926521)?.toFixed(4)}%`}
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow  >
                                <StyledTableCell>
                                    {`Salto Anual (SA)`}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {0.0085177}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && SA?.toFixed(7)}
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    {loading && <Skeleton variant="text" sx={{ fontSize: '1em' }} />}
                                    {!loading && `${((SA - 0.0085177) * 100 / 0.0085177)?.toFixed(4)}%`}
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </Collapse>
        </>
    );
}