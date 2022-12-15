import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, Grid } from '@mui/material';

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

export default function CollapseDLF() {
    const [expanded, setExpanded] = React.useState(false);

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
                style={{ padding: "0.1em 1em 0em 1.4em" }}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item style={{ width: '85%' }}>
                    </Grid>
                    <Grid item>
                        <Box sx={{ m: 1 }}>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                </CardContent>
            </Collapse>
        </>
    );
}