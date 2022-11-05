import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../layout/layout';


function Settings() {
    return (
        <DashboardLayout>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 4
                }}
            >
                <Container>
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Configuración
                    </Typography>

                
                </Container>
            </Box>
        </DashboardLayout>
    )
}


export default Settings;
