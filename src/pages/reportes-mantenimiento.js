import { DashboardLayout } from '../layout/layout';
import { Box, Container } from '@mui/material';
import BarGeometry from '../components/reportes-mantenimiento/bar-geometry';


function ReportesMantenimiento() {
    const barWidth = 50;
    const barHeight = 200;
    const barRadius = 10;
    const distanceBetweenBars = 100;

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
                        <BarGeometry
                            barWidth={barWidth}
                            barHeight={barHeight}
                            barRadius={barRadius}
                            distanceBetweenBars={distanceBetweenBars}
                        />
                    </Container>
                </Box>
            </DashboardLayout>
        </>
    )
}

export default ReportesMantenimiento;
