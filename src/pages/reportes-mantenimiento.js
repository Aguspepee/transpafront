import { DashboardLayout } from '../layout/layout';
import { Box, Container } from '@mui/material';


function ReportesMantenimiento() {

    return (
        <>
            <DashboardLayout>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 2
                    }}
                >
                    <Container maxWidth={false}>

                    </Container>
                </Box>
            </DashboardLayout>
        </>
    )
}

export default ReportesMantenimiento;
