import { DashboardLayout } from '../layout/layout';
import { Box, Container } from '@mui/material';
import { Card } from "@mui/material";
import React from "react";
import Tabla from "../components/reportes-gestionot/tabla";

const ref = React.createRef();
function ReportesGestionOT() {

    return (
        <DashboardLayout>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 2
                }}
            >
                <Container maxWidth={false}>
                    <Card >
                        <div ref={ref} style={{ width: "100%", overflow: "auto", display: "flex" }}>
                            <Tabla />
                        </div>
                    </Card>
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default ReportesGestionOT;
