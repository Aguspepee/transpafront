import React from "react";
import * as xlsx from "xlsx/xlsx.mjs";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { deleteAll, createAll } from "../../services/upload"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Uploader(props) {
    let json = [];
    const dbSubBaseURL = props.dbSubBaseURL;
    const Titulo = props.Titulo;
    const Subtitulo = props.Subtitulo;
    const fileTypes = props.fileTypes;
    const [open, setOpen] = React.useState(false);
    const [succes, setSucces] = React.useState(false);

    const uploadFiles = async (json) => {
        setOpen(true)
        console.log("comienza carga en ", dbSubBaseURL, json);
        try {
            const res = await createAll(dbSubBaseURL, json)
            setOpen(false)
            setSucces(true)
        } catch (e) {
            setOpen(false)
            setSucces(false)
        }
    }

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                json = xlsx.utils.sheet_to_json(worksheet, { raw: false });
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };

    return (
        <>

            <div style={{ paddingTop: "10px" }}>
                <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <CardContent>
                        <CardHeader
                            title={Titulo}
                            subheader={Subtitulo}
                        />
                        <form style={{ padding: " 0em 3em 0em 3em" }}>
                            <div>
                                <label htmlFor="upload"></label>
                            </div>
                            <input
                                type="file"
                                name="upload"
                                id="upload"
                                onChange={readUploadFile}
                                accept={fileTypes}
                            />
                            <div style={{ padding: "1em 1em 1em 1em" }}>
                                <Button variant="contained" onClick={() => uploadFiles(json)}>
                                    Guardar
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    <Collapse in={succes}>
                        <Alert action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setSucces(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                            severity="success">
                            El archivo se cargó correctamente
                        </Alert>
                    </Collapse>
                </Card>
            </div>
            <div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
        </>
    );
}

export default Uploader;