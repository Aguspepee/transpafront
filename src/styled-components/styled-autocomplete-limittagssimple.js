import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function LimitTagsSimple({ description, id, handleFiltersChange, getFunction, search, defaultValue, saveFilters, ...props }) {
    const [list, setList] = useState([])
    const [values, setValues] = useState([])

    useEffect(() => {
        const getList = async () => {
            const res = await getFunction()
            setList(res.data)
            setValues(res.data.filter(item => defaultValue?.includes(item.area)))
        }
        getList()
    }, [])

    useEffect(() => {
       
            setValues(list?.filter(item => defaultValue?.includes(item.area)))

    }, [search])

    const handleChange = (newValues) => {
        const selected = newValues.map((s) => s.area)
        handleFiltersChange({ ...search, [id]: selected })
        setValues(newValues)
        saveFilters({ field: id, value: selected })
    };

    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={list}
            value={values}
            getOptionLabel={(option) => `${option?.area}`}
            //defaultValue={}
            size="small"
            onChange={(event, newValues) => {
                handleChange(newValues)
            }}
            renderInput={(params) => (
                <TextField {...params} label={description} placeholder={description} />
            )}
        //sx={{ width: '500px' }}
        />
    );
}