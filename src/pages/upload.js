import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../layout/layout';
import Uploader from "../components/upload/uploader";


function Upload() {
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
                    <Uploader
                        dbSubBaseURL="equipos"
                        Titulo="Equipos SAP"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                    <Uploader
                        dbSubBaseURL="maquinas"
                        Titulo="Maquinas Base de Datos Maestra"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                    <Uploader
                        dbSubBaseURL="operaciones"
                        Titulo="Indisponibilidades de Operaciones"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                    <Uploader
                        dbSubBaseURL="sapBase"
                        Titulo="SAP - Datos Generales SAP"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>

                    <Uploader
                        dbSubBaseURL="novedades"
                        Titulo="SAP - Novedades de Lineas"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                    <Uploader
                        dbSubBaseURL="indisponibilidades"
                        Titulo="Indisponibilidades 1Resui"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                     <Uploader
                        dbSubBaseURL="lineas"
                        Titulo="Base de datos de lineas"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                     <Uploader
                        dbSubBaseURL="puntos"
                        Titulo="Base de datos de Puntos de Conexión"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                    <Uploader
                        dbSubBaseURL="maquinas/actualizar-historiales"
                        Titulo="Actualizar Historial de Máquinas"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>
                     <Uploader
                        dbSubBaseURL="maquinas/borrar-historiales"
                        Titulo="Borra Historial de Máquinas (auxiliar)"
                        Subtitulo="Seleccione el archivo"
                        fileTypes=".xlsx , xls"
                    ></Uploader>

                </Container>
            </Box>
        </DashboardLayout>
    )
}


export default Upload
