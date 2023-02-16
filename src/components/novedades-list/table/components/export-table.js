import { DialogContent, Tooltip, DialogActions, Button, DialogContentText, Stack } from "@mui/material";
import { useState } from 'react';
import { Box, Dialog, Autocomplete, TextField, DialogTitle, Checkbox } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { remitoGetList } from '../../../../services/remitos';
import { remitosListXLS } from "../../../../utils/exports/remitos-list-xls";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { remitos_columns, remitos_campos_predeterminados } from "../../../../utils/columns-export";

//Icons
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TableViewIcon from '@mui/icons-material/TableView';
import CloseIcon from '@mui/icons-material/Close';

export default function ExportTable({ handleReload, handleConfirmDialogChange, handleNotifyChange, order, orderBy, search, ...props }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [campos, setCampos] = useState(remitos_campos_predeterminados);
    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const open = Boolean(anchorEl);

    //Estado de bajada
    const [loading, setLoading] = useState({ status: false, message: "" })

    //Opciones de exportacion
    const [sinFiltro, setSinFlitro] = useState(false)
    const [seleccionarCampos, setSeleccionarCampos] = useState(false)

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    //En base a los filtros, realiza la consulta y le devuelve todos los datos para exportar los archivos
    const getList = async () => {
        setLoading({ status: true, message: "Preparando los datos para descargar..." })
        try {
            const res = await remitoGetList(sinFiltro ? [] : search)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const exportXLS = async () => {
        setLoading({ status: true, message: "Exportando en Excel..." })
        try {
            const remitos = await getList()
            remitosListXLS(remitos, seleccionarCampos ? campos : remitos_columns)
            setLoading({ status: false, message: "" })
            setOpenDialog(false)
        } catch (e) {
            console.log(e)
        }

    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Tooltip title="Exportar Tabla">
                    <IconButton
                        size="small"
                        aria-label="add"
                        onClick={handleClick}>
                        <FileDownloadIcon fontSize='small' />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/*                 <MenuItem onClick={() => {
                    handleClose()
                }}>
                    <ListItemIcon>
                        <PictureAsPdfIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText><Typography style={{ fontSize: "0.9em" }}>Imprimir en PDF</Typography></ListItemText>
                </MenuItem> */}
                <MenuItem onClick={() => {
                    setOpenDialog(true)
                    handleClose()
                }}>
                    <ListItemIcon>
                        <TableViewIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText ><Typography style={{ fontSize: "0.9em" }}>Exportar en Excel</Typography></ListItemText>
                </MenuItem>
            </Menu>
            <Dialog
                fullScreen={fullScreen}
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle style={{ backgroundColor: "#F3F4F6" }}>
                    Exportar a Excel
                    <IconButton
                        aria-label="close"
                        onClick={() => handleCloseDialog()}
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
                <DialogContent>
                    <Box style={{ paddingTop: "1em", paddingBottom: "0.5em" }}>
                        <DialogContentText id="responsive-dialog-title">
                            Seleccione los campos que desea exportar
                        </DialogContentText>
                    </Box>
                    <Box style={{ padding: "20px 10px 0px 10px" }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <Checkbox
                                checked={sinFiltro}
                                color="primary"
                                size={"medium"}
                                disableRipple
                                onChange={() => setSinFlitro(!sinFiltro)}
                            />
                            <Typography
                                color="textSecondary"
                                variant="body2"
                                component={'span'}
                            >
                                Exportar sin filtrar
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                            }}
                        >
                            <Checkbox
                                checked={seleccionarCampos}
                                color="primary"
                                size={"medium"}
                                disableRipple
                                onChange={() => setSeleccionarCampos(!seleccionarCampos)}
                            />
                            <Typography
                                color="textSecondary"
                                variant="body2"
                                component={'span'}
                            >
                                Seleccionar campos
                            </Typography>
                        </Box>
                        <Autocomplete
                            disabled={!seleccionarCampos}
                            multiple
                            id="tags-outlined"
                            options={remitos_columns}
                            value={campos}
                            getOptionLabel={(option) => option.header}
                            isOptionEqualToValue={(option, value) => {
                                return (option.header === value.header)
                            }}
                            //defaultValue={[columns[3]]}
                            onChange={(event, newValues) => {
                                setCampos(newValues)
                            }}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Campos"
                                />
                            )}
                        />
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => exportXLS()} autoFocus>
                        Exportar
                    </Button>
                </DialogActions>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading.status}
                //onClick={handleClose}
                >
                    <Stack
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center">
                        <CircularProgress color="inherit" />
                        <Typography
                            //color="textSecondary"
                            variant="body2"
                            component={'span'}
                        >
                            {loading.message}
                        </Typography>
                    </Stack>
                </Backdrop>
            </Dialog>


        </div>
    );
}