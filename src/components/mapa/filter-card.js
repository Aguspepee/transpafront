import { Card, CardContent, Divider, Typography, Stack, Collapse, Box, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwitchLabels from './components/switch-labels';
import SelectNovedad from './components/select-novedad';

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

function FilterCard({ search, handleSearchChange, ...props }) {
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
                    <Stack direction="column" spacing={0.5}>
                        <Typography variant="h6" style={{ fontSize: '0.8em' }} gutterBottom>
                        </Typography>
                        <SelectNovedad search={search} handleSearchChange={handleSearchChange} />
                        <SwitchLabels search={search} handleSearchChange={handleSearchChange} />
                    </Stack>
                </Box>
            </Collapse>
        </Card>
    )
}

export default FilterCard;