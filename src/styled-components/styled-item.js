import React, { useState } from "react";
import { Grid, IconButton, Tooltip } from '@mui/material';
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function StyledItem({ control, name, list, description, errors, items, ...rest }) {

    const [unidad, setUnidad] = useState(null)
    let items_list = list?.filter((dato) => dato.clase === "Ítem").map((dato) => dato.descripcion_servicio)
    items_list = items_list ? items_list : []
    const handleUnit = (item) => {
        setUnidad(list?.filter((list) => list.descripcion_servicio === item)[0]?.unidad_medida)
    }

    return (
        <>
            <Grid item md={8} xs={12} >

                <Controller
                    
                    name={name}
                    control={control}
                    render={({ field: { onChange, onBlur, value, ref, ...field } }) =>
                        <Autocomplete
                        {...rest}
                            defaultValue={value}
                            disablePortal
                            getOptionLabel={(items_list) => `${items_list}`}
                            options={items_list}
                            isOptionEqualToValue={(option, value) => option === value}
                            noOptionsText={"Sin opciones"}
                            renderInput={(params) => <TextField {...params}  multiline maxRows={4} label={"Descripción del Servicio*"}
                                error={Boolean(errors?.items && errors?.items[0]?.descripcion_servicio)}
                                helperText={errors?.items && errors?.items[0]?.descripcion_servicio?.message} />}
                            value={value ? value : null}
                            onChange={(event, item) => {
                                handleUnit(item)
                                onChange(item ? item : null)
                            }}
                            onBlur={onBlur}
                            clearOnBlur={true}

                        />
                    }
                />
            </Grid>
            <Grid item md={2.5} xs={9} >
                <Controller
                    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) =>
                        <TextField
                            fullWidth
                            {...rest}
                            value={value ? value : ""}
                            error={Boolean(error)}
                            helperText={error ? error.message : unidad}
                            label="Cantidad*"
                            onChange={onChange}
                            onBlur={onBlur}
                            type="number"
                        />}
                    name={`items.0.cantidad`}
                    control={control}
                />
            </Grid>
            <Grid item md={1} xs={3} >
                <Tooltip title="Añadir Adicional">
                    <IconButton color="primary" onClick={() => items({})}>
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>
    )
}

export default StyledItem
