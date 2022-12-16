import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableSortLabel from '@mui/material/TableSortLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, Grid, Stack, Table, TableBody, TableHead, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DCFDetailTable } from '../../../services/reportes-dima';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import EnhancedTableRow from './table/enhanced-table-row';

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

export default function CollapseDCFDetailTable({ date, ...rest }) {
    const [expanded, setExpanded] = useState(false);
    const [results, setResults] = useState([]);

    //Sort states and functions
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('horas_indisponibles_ano_movil');
    const handleRequestSort = (event, property) => {
        // setLoading(true);
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await DCFDetailTable({ year: date.year, month: date.month, order: order, orderBy: orderBy })
                setResults(res.data|| [])
            } catch (e) {
                console.log(e)
            }
        }
        getData()

    }, [date, order, orderBy])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
                            style={{ fontSize: "0.8em" , padding:"5px 0px 5px 23px"}}
                        >
                            {`DETALLE POR PUNTO DE CONEXIÓN ${date.month||"-"}/${date.year||"-"}`}
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
            <Collapse in={expanded} timeout="auto">
                <Paper sx={{ overflowX: "auto", width: "100%", height: `300px` }}>
                    <Table size="small" stickyHeader>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>

                                </TableCell>

                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "codigo"}
                                        direction={orderBy === "codigo" ? order : 'asc'}
                                        onClick={createSortHandler("codigo")}
                                    >
                                        Código
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "tension"}
                                        direction={orderBy === "tension" ? order : 'asc'}
                                        onClick={createSortHandler("tension")}
                                    >
                                        Tensión
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "horas_indisponibles_ano_movil"}
                                        direction={orderBy === "horas_indisponibles_ano_movil" ? order : 'asc'}
                                        onClick={createSortHandler("horas_indisponibles_ano_movil")}
                                    >
                                        Horas Indisponibles
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "longitud_oficial"}
                                        direction={orderBy === "longitud_oficial" ? order : 'asc'}
                                        onClick={createSortHandler("longitud_oficial")}
                                    >
                                        Número de Punto
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "IDEQ"}
                                        direction={orderBy === "IDEQ" ? order : 'asc'}
                                        onClick={createSortHandler("IDEQ")}
                                    >
                                        IDEQ
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "propietario_2"}
                                        direction={orderBy === "propietario_2" ? order : 'asc'}
                                        onClick={createSortHandler("propietario_2")}
                                    >
                                        Propietario
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "propietario_2"}
                                        direction={orderBy === "propietario_2" ? order : 'asc'}
                                        onClick={createSortHandler("propietario_2")}
                                    >
                                        Usuario
                                    </TableSortLabel>
                                </TableCell>

                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "fecha_inicio"}
                                        direction={orderBy === "fecha_inicio" ? order : 'asc'}
                                        onClick={createSortHandler("fecha_inicio")}
                                    >
                                        Fecha Inicio
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell style={{ backgroundColor: "#F1F1F1" }}>
                                    <TableSortLabel
                                        active={orderBy === "fecha_fin"}
                                        direction={orderBy === "fecha_fin" ? order : 'asc'}
                                        onClick={createSortHandler("fecha_fin")}
                                    >
                                        Fecha Fin
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {results?.map((line, index) => {
                                return (
                                    <EnhancedTableRow key={index} line={line} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </Collapse>
        </>
    );
}