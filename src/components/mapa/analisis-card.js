import { Card, Divider, Typography, Stack, Collapse, Box, IconButton } from '@mui/material';
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
        <Card>
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            }}>
                <Typography variant="h6" style={{ padding: '0.5em 0em 0em 1em', fontSize: '0.8em' }} gutterBottom>
                    Novedades
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
            <Collapse in={expanded} timeout="auto">
                <Divider />
                <Box style={{ padding: '0.5em 0.5em 0.5em 0.5em' }}>
                    <Stack direction="column" spacing={2}>
                        <VerticalBarChart search={search} seleccionarTorresMapa={seleccionarTorresMapa} />
                        <Box style={{ padding: '1em 0em 0em 0em' }}>
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
                        <DateRangeSlider/>
                        <SwitchLabels search={search} handleSearchChange={handleSearchChange} />
                    </Stack>
                </Box>
            </Collapse>
        </Card>
    )
}

export default AnalisisCard;