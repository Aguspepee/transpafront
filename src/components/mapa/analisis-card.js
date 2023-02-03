import { Card, Divider, Typography, Stack, Collapse, Box, IconButton, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerticalBarChart from './components/vertical-bar-chart';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { codigos_lineas, torres_criticas } from '../../utils/codigos-lineas';
import { lighten, darken } from '@mui/system';
import { Button } from '@mui/material';
import SwitchLabels from './components/switch-labels';
import DateRangeSlider from './components/date-range-slider';
import ToggleMinuciosasTerrestres from './components/toggle-minuciosas-terrestres';
import { MinuciosasTorta } from './components/minuciosas-torta';
import { TerrestresTorta } from './components/terrestres-torta';
/*   */

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

function AnalisisCard({ search, handleSearchChange, ...props }) {
    const [expanded, setExpanded] = useState(true)
    const [expandFecha, setExpandFecha] = useState(true)
    const [expandNovedades, setExpandNovedades] = useState(true)
    const [expandInspecciones, setExpandInspecciones] = useState(true)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [value, setValue] = useState(null)
    const options = codigos_lineas;
    const GroupHeader = styled('div')(({ theme }) => ({
        position: 'sticky',
        top: '-8px',
        padding: '4px 10px',
        color: theme.palette.primary.main,
        backgroundColor:
            theme.palette.mode === 'light'
                ? lighten(theme.palette.primary.light, 0.85)
                : darken(theme.palette.primary.main, 0.8),
    }));

    const GroupItems = styled('ul')({
        padding: 0,
    });

    const handleChange = (newValue) => {
        handleSearchChange({ ...search, codigos: [newValue?.map((value) => value.codigo)] })
        setValue(newValue)
    };

    const verTorresCriticas = () => {
        handleSearchChange({ ...search, codigos: [torres_criticas?.map((value) => value.codigo)] })
        setValue(torres_criticas)
    }

    const seleccionarTorresMapa = (value) => {
        handleSearchChange({ ...search, codigos: [value] })
        setValue(null)
    }

    return (
        <>
            <Stack spacing={2}>
                <Card style={{height: `calc(10vh)`}} >
                    <Box sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        
                    }}>
                        <Typography variant="h6" style={{ padding: '0.5em 0em 0em 1em', fontSize: '0.8em' }} gutterBottom>
                            Fecha
                        </Typography>
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
                    <Divider />
                    <DateRangeSlider search={search} handleSearchChange={handleSearchChange} />
                </Card>
                <Card style={{height: `calc(25.5vh)`}}>
                    <Paper sx={{  width: "100%"}}>
                        <Box sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}>
                            <Typography variant="h6" style={{ padding: '0.5em 0em 0em 1em', fontSize: '0.8em' }} gutterBottom>
                                Novedades
                            </Typography>
                            <Box>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    size="small"
                                >
                                    <ExpandMoreIcon size="small" />
                                </ExpandMore>
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
                        </Box>
                        <Divider />
                        <Box style={{ padding: '0.5em 0.5em 0.5em 0.5em' }}>
                            <Stack direction="column" spacing={1}>
                                <VerticalBarChart search={search} seleccionarTorresMapa={seleccionarTorresMapa} />
                                {/*   <Box style={{ padding: '0em 0em 0em 0em' }}>

                                <Autocomplete
                                    multiple
                                    limitTags={1}
                                    value={value ? value : []}
                                    isOptionEqualToValue={(option, value) => {
                                        return (option.codigo === value.codigo)
                                    }}
                                    disableCloseOnSelect
                                    id="grouped-demo"
                                    options={options}
                                    groupBy={(option) => option.categoria}
                                    getOptionLabel={(a) => (`${a.codigo} ${a.descripcion}`)}
                                    sx={{ width: '100%' }}
                                    size='small'
                                    onChange={(event, newValue) => handleChange(newValue)}
                                    renderInput={(params) => <TextField key={params.key}  {...params} label="Filtro" />}
                                    renderGroup={(params) => {
                                        return (
                                            <li key={params.key}>
                                                <GroupHeader>{params.group}</GroupHeader>
                                                <GroupItems style={{ fontSize: "0.8em" }}>{params.children}</GroupItems>
                                            </li>
                                        )
                                    }}
                                />
                            </Box>
                            <Button variant='outlined' onClick={() => verTorresCriticas()}>Ver torres críticas</Button> 
                            <SwitchLabels search={search} handleSearchChange={handleSearchChange} /> */}
                            </Stack>
                        </Box>
                    </Paper>
                </Card>
                <Card style={{height: `calc(33vh)`}}>
                    <Box sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }}>
                        <Typography variant="h6" style={{ padding: '0.5em 0em 0em 1em', fontSize: '0.8em' }} gutterBottom>
                            Inspecciones
                        </Typography>
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

                    <Divider />
                    <Box style={{ padding: '0.5em 0.5em 0.5em 0.5em', height: '260px' }}>
                        <Stack direction="column" spacing={1}>
                            <ToggleMinuciosasTerrestres search={search} handleSearchChange={handleSearchChange} />
                        </Stack>
                        <Stack direction="row" spacing={0} style={{ width: "100%" }}>
                            <MinuciosasTorta search={search} />
                            <TerrestresTorta search={search} />
                        </Stack>
                    </Box>


                </Card>
            </Stack>
        </>
    )
}

export default AnalisisCard;