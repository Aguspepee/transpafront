import { Card, CardContent, Divider, Typography, Stack, Collapse, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import { lineasGet, zonasGet } from '../../services/piquetes';
import LimitTags from '../../styled-components/styled-autocomplete-limittags';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutocompleteZonas from '../../styled-components/styled-autocomplete-zonas';
import AutocompleteLineas from '../../styled-components/styled-autocomplete-lineas';

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

function FilterCard({ search, handleSearchChange, data, ...props }) {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
            }}>
                <Box style={{ padding: '0.5em 0em 0em 1em' }}>
                    <Typography variant="h6" style={{ padding: '0em 0em 0em 0em', fontSize: '0.8em' }} gutterBottom>
                        {data[0]?.linea}
                    </Typography>
                    <Typography variant="h6" style={{ padding: '0em 0em 0em 0em', fontSize: '0.6em' }} gutterBottom>
                        {data[0]?.denominacion}
                    </Typography>
                </Box>
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
            <Box style={{ padding: '0.3em 0em 0em 1em' }}>


            </Box>

            <Divider />
            <Collapse in={expanded}  timeout="auto">
                <Box style={{padding:'0.5em 0.5em 0.5em 0.5em'}}>
                    <Stack direction="row" spacing={1} >
                        <AutocompleteZonas description={"Zonas"} search={search} handleSearchChange={handleSearchChange} id="zonas" getFunction={zonasGet} />
                        <AutocompleteLineas description={"Lineas"} search={search} handleSearchChange={handleSearchChange} id="lineas" getFunction={lineasGet} /> 
                    </Stack>
                </Box>
            </Collapse>
        </Card>
    )
}

export default FilterCard;