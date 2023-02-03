import { Card, CardContent, Divider, Typography, Stack, Collapse, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NovedadesTable from './components/novedades-table';


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
    const [expanded, setExpanded] = useState(true)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card  style={{height: `calc(15.5vh)`}}>
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
                    <NovedadesTable flyToPosition={flyToPosition} search={search}/>
                </Box>
            </Collapse>
        </Card>
    )
}

export default NovedadesCard;