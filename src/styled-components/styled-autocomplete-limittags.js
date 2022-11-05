import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function LimitTags({ description, id, handleFiltersChange, getFunction, search, defaultValue, saveFilters, ...props }) {

    const [list, setList] = useState([])
    const [values, setValues] = useState([])

    useEffect(() => {
        const getList = async () => {
            const res = await getFunction()
            setList(res.data)
            setValues(res.data.filter(item => defaultValue?.includes(item._id)))
        }
        getList()
    }, [])

    useEffect(() => {
        setValues(list?.filter(item => defaultValue?.includes(item._id)))
    }, [search])

    const handleChange = (newValue) => {
        const selected = newValue.map((s) => s._id)
        handleFiltersChange({ ...search, [id]: selected }) 
        setValues(newValue)
        saveFilters({ field: id, value: selected })
    };


    return (
        <Autocomplete
            multiple
            limitTags={2}
            options={list}
            value={values}
            getOptionLabel={(option) => `${option.nombre} ${option.apellido ? option.apellido : ""}`}
            size="small"
            onChange={(event, newValues) => {
                handleChange(newValues)
            }}
            renderInput={(params) => (
                <TextField {...params} label={description} placeholder={description} />
            )}
        />
    );
}