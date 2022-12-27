import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Autocomplete, Chip, Stack } from "@mui/material";
import { useEffect, useState } from 'react';
import { Box, Button, Table, TableBody, TableHead } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { certificadoAgregarRemito, certificadoGetList } from '../../../services/certificados'
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';

//Icons
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


export default function SumarCertificado({ handleReload, certificado, selected, handleConfirmDialogChange, handleNotifyChange, selectedToEmpty, openSumar, handleOpenSumar, ...props }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [numeroCertificado, setNumeroCertificado] = useState(null);
    const [certificados, setCertificados] = useState([])
    useEffect(() => {
        async function getList() {
            try {
                const res = await certificadoGetList()
                setCertificados(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [openSumar])

    const handleCertificadoCreate = () => {
        handleConfirmDialogChange({
            isOpen: false,
            title: "",
            subTitle: ""
        })
        handleNotifyChange({
            isOpen: true,
            message: `El certificado N° ${numeroCertificado?._id ? numeroCertificado._id : "-"} se agregó correctamente.`,
            type: 'success'
        })
        certificadoAgregarRemito({ selected: selected, numero: numeroCertificado._id })
        selectedToEmpty()
        handleReload()
        handleOpenSumar(false)
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openSumar}
                onClose={() => handleOpenSumar(false)}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" style={{ backgroundColor: "#F3F4F6" }}>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Box>Agregar a Certificado</Box>
                        <Chip label={`N° ${numeroCertificado?._id ? numeroCertificado._id : "-"}`} color="secondary" variant="outlined" />
                    </Stack>
                    <IconButton
                        aria-label="close"
                        onClick={() => handleOpenSumar(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent style={{ padding: "0em 0em 0em 0em" }}>
                    <Box style={{ padding: "1em 1em 1em 1em" }}>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            ¿Desea agregar los items al certificado?
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Seleccione el certificado al que desea agregar los partes
                        </Typography>
                        <Autocomplete
                            getOptionLabel={(certificado) => `${certificado._id} ${certificado.contrato[0].nombre}`}
                            options={certificados}
                            disablePortal
                            isOptionEqualToValue={(option, value) => {
                                return (option === value)
                            }}
                            noOptionsText={"Sin opciones"}
                            renderInput={(params) => <TextField
                                {...params}
                                label="Certificado"
                                placeholder="Certificado"
                            />}
                            value={numeroCertificado ? numeroCertificado : null}
                            onChange={(event, item) => {
                                setNumeroCertificado(item)
                            }}
                            clearOnBlur={true}
                        />
                    </Box>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell>Número de Remito</TableCell>
                                <TableCell>Contrato</TableCell>
                                <TableCell>Unidad</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{
                            certificado.map((item) => {
                                return (
                                    <TableRow key={item._id} >
                                        <TableCell>{item.remito_numero}</TableCell>
                                        <TableCell>{item.contrato[0].nombre}</TableCell>
                                        <TableCell>{item.planta}</TableCell>
                                    </TableRow>
                                )
                            }
                            )}
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions >
                    <Button type='submit' form="myform" color="primary" variant="contained" fullWidth
                        onClick={() => {
                            handleConfirmDialogChange({
                                isOpen: true,
                                title: `¿Deseas agregar los partes al certificado N° ${numeroCertificado?._id ? numeroCertificado._id : "-"} ?`,
                                onConfirm: () => { handleCertificadoCreate() },
                                icon: <PlaylistAddIcon fontSize='inherit' color="success" />
                            })
                        }}
                        //Validación facil de certificante
                        disabled={numeroCertificado === null ? true : false}
                    >
                        Agregar al certificado
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}