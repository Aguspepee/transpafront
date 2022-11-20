import { Card, CardContent, Divider, Typography, Stack, Collapse, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import { lineasGet, zonasGet } from '../../services/piquetes';
import LimitTags from '../../styled-components/styled-autocomplete-limittags';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './components/novedades-card-tabpanel'
import { aisladores, estructura_base, hilo_guardia, morseteria_conductor, picadas, seguridad_publica } from '../../utils/codigos-lineas';


const AntTabs = styled(Tabs)({
    minWidth: 0,
    minHeight: "30px",

});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    minWidth: 0,
    minHeight: "30px",
    fontSize: '0.7em',
    marginRight: theme.spacing(0),
    marginTop: theme.spacing(0),
    paddingTop: '5px',
    paddingBottom: '5px',
    '& button': {
        height: 10
    }
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
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

function NovedadesCard({ search, location, flyToPosition, ...props }) {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

            <Divider />
            <Collapse in={expanded} unmountOnExit timeout="auto">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <AntTabs
                            variant="scrollable"
                            scrollButtons="auto"
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            style={{ height: "10px" }}>
                            <AntTab label="TODAS" {...a11yProps(0)} />
                            <AntTab label="Hilo de Guardia" {...a11yProps(1)} />
                            <AntTab label="Aisladores" {...a11yProps(2)} />
                            <AntTab label="Morseteria Conductor" {...a11yProps(3)} />
                            <AntTab label="Estructura Base" {...a11yProps(4)} />
                            <AntTab label="Picada" {...a11yProps(5)} />
                            <AntTab label="Seguridad Pública" {...a11yProps(6)} />
                        </AntTabs>
                    </Box>
                    <TabPanel value={value} index={0} search={search} codigos={[]} flyToPosition={flyToPosition} />
                    <TabPanel value={value} index={1} search={search} codigos={hilo_guardia} flyToPosition={flyToPosition} />
                    <TabPanel value={value} index={2} search={search} codigos={aisladores} flyToPosition={flyToPosition} />
                    <TabPanel value={value} index={3} search={search} codigos={morseteria_conductor} flyToPosition={flyToPosition} />
                    <TabPanel value={value} index={4} search={search} codigos={estructura_base} flyToPosition={flyToPosition} />
                    <TabPanel value={value} index={5} search={search} codigos={picadas} flyToPosition={flyToPosition} />
                    <TabPanel value={value} index={6} search={search} codigos={seguridad_publica} flyToPosition={flyToPosition} />
                </Box>
            </Collapse>
        </Card>
    )
}

export default NovedadesCard;