import { DashboardLayout } from '../layout/layout';
import { Box, Container } from '@mui/material';
import { Card } from "@mui/material";
import "gantt-task-react/dist/index.css";
import { useEffect, useState } from 'react';
import { sapsRPM } from '../services/sap';
import 'react-big-scheduler/lib/css/style.css'
import Basic from '../components/scheduler-personas/basic';


function RPM() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await sapsRPM()


                setData(res?.data?.map((d) => {
                    return ({
                        start: new Date(d.start),
                        end: new Date(d.end),
                        name: d.name,
                        id: d.id,
                        type: d.type,
                        progress: 100
                    })
                }))
            } catch (e) {
                console.log(e)
            }
        }

        getData()
    }, [])


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
                        <Basic />
                    </Card>
                </Container>
            </Box>
        </DashboardLayout>
    )
}

export default RPM;
