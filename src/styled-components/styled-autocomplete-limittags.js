import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function LimitTags({ description, id, handleSearchChange, getFunction, search, defaultValue, ...props }) {
    
    const [list, setList] = useState([])
    const [values, setValues] = useState([])

    useEffect(() => {
        const getList = async () => {
            const res = await getFunction({search})
            setList(res.data)
        }
        getList()
    }, [])

    const handleChange = (newValue) => {
        handleSearchChange({ ...search, [id]: newValue.map((s)=>s.value)}) 
        setValues(newValue)
    };


    return (
        <Autocomplete
        fullWidth
            multiple
            limitTags={2}
            options={list}
            value={values}
            getOptionLabel={(option) => `${option.value}`}
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