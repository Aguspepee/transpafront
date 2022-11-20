import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { zonasGet } from '../services/piquetes';

export default function AutocompleteLineas({ description, id, handleSearchChange, getFunction, search, defaultValue, ...props }) {

    const [list, setList] = useState([])
    const [value, setValue] = useState(null)

    useEffect(() => {
        const getList = async () => {
            setValue(null)
            const res = await getFunction({ search })
            setList(res.data)
        }
        getList()
    }, [search.zonas])

    const handleChange = (newValue) => {
        handleSearchChange({ ...search, [id]: [newValue?.value] })
        setValue(newValue)
    };

    return (
        <Autocomplete
            fullWidth
            options={list}
            value={value}
            getOptionLabel={(option) => `${option?.value}`}
            size="small"
            onChange={(event, newValue) => {
                handleChange(newValue)
            }}
            renderInput={(params) => (
                <TextField {...params} label={description} placeholder={description} />
            )}
        />
    );
}